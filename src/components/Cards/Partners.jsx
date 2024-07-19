import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../api";
import Swal from "sweetalert2";
import Loader from "./Loader/Loader";
import EditContactDetails from "../CardDetails/EditContactDetails";
import addCommasToNumber from "../ReusableComponents/AddCommastoNum";
import { useState } from "react";
import truncateEmail from "./Utilities/truncateEmail";
import truncatePhoneNumber from "./Utilities/truncatePhoneNumber";
import ContactImage from "./ContactImage/ContactImage";
import ContactMenu from "./ContactMenu/ContactMenu";
import classNames from "classnames";

//Contact
export default function Partner({ borderColour, titleColors }) {
  const queryClient = useQueryClient();
  const currentDealId =
    localStorage.getItem("currentDealId") ||
    window.location.pathname.split("/").at(-1);

  const BorderStyle = {
    border: `2px solid  ${borderColour}`,
  };

  const ColumnClasses = classNames(
    "shadow-lg",
    "rounded-2xl",
    "w-full"
    // 'relative',
  );

  const TitleStyle = {
    color: titleColors,
    minWidth: "210px",
  };

  const ColumnStyle = {
    backgroundColor: "rgb(255, 255, 255)",
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [contactDetails, setContactDetails] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const {
    data: partners,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["partners", currentDealId],
    queryFn: async () => {
      const response = await api.get(`deals/partner-contacts/${currentDealId}`);
      return response.data.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) =>
      api.delete(`contacts/delete-contact/${currentDealId}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["partners", currentDealId]);
      Swal.fire("Deleted!", "Your contact entry has been deleted.", "success");
    },
    onError: () => {
      Swal.fire("Error", "Failed to delete contact", "error");
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this contact entry!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  const handleEdit = async (id) => {
    try {
      const response = await api.get(
        `contacts/single-contact/${currentDealId}/${id}`
      );
      setContactDetails(response.data.contact);
      setShowEditModal(true);
    } catch (error) {
      console.error("Error fetching contact details:", error);
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setContactDetails(null);
  };

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedContactId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedContactId(null);
  };

  const handleViewOrUpdate = () => {
    if (selectedContactId) {
      handleEdit(selectedContactId);
      handleMenuClose();
    }
  };

  const handleDeleteClick = () => {
    if (selectedContactId) {
      handleDelete(selectedContactId);
      handleMenuClose();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {partners.length > 0 ? (
        <div className=" flex flex-col gap-5 items-center">
          <div className={ColumnClasses} style={ColumnStyle}>
            <div
              className="font-bold text-xl p-5 text-center"
              style={TitleStyle}
            >
              Partner
            </div>
          </div>
          <div style={{ overflowY: "auto", maxHeight: "calc(100vh - 100px)" }}>
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col rounded-2xl mb-2 h-40"
                style={{ ...BorderStyle, minWidth: "210px" }}
              >
                <div
                  className="flex flex-row p-2 rounded-t-2xl border-b-dark-blue items-center gap-2"
                  style={{ background: borderColour }}
                >
                  <ContactImage
                    profile_url={partner.profile_pic}
                    firstName={partner.first_name}
                    lastName={partner.last_name}
                    color={borderColour}
                  />
                  <div className="flex flex-row w-full items-center">
                    <div className="flex flex-col w-full">
                      <p className="font-extrabold text-sm text-white truncate">
                        {`${partner.first_name} ${partner.last_name}`.length >
                        12
                          ? `${partner.first_name} ${partner.last_name}`.substring(
                              0,
                              9
                            ) + "..."
                          : `${partner.first_name} ${partner.last_name}`}
                      </p>
                      <p className="text-sm text-white">
                        {partner.organization_name
                          ? partner.organization_name.length > 15
                            ? partner.organization_name.substring(0, 12) + "..."
                            : partner.organization_name
                          : "No company"}
                      </p>
                    </div>
                    <div className=" self-end">
                      <ContactMenu
                        anchorEl={anchorEl}
                        handleMenuClick={(event) =>
                          handleMenuClick(event, partner.id)
                        }
                        handleMenuClose={handleMenuClose}
                        handleViewOrUpdate={handleViewOrUpdate}
                        handleDeleteClick={handleDeleteClick}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                  <div>
                    <p className="text-xs font-semibold">
                      Deal Size:{" "}
                      {partner.deal_size
                        ? partner.deal_size.length > 15
                          ? "$" +
                            addCommasToNumber(
                              partner.deal_size.substring(0, 12)
                            ) +
                            "..."
                          : "$" + addCommasToNumber(partner.deal_size)
                        : "$0"}
                    </p>
                    <p className="text-xs font-semibold">
                      Meeting:{" "}
                      {partner.meeting_date
                        ? new Date(partner.meeting_date).toLocaleString()
                        : "Nil"}
                    </p>
                    <p className="text-xs">
                      {partner.email
                        ? truncateEmail(partner.email, 28)
                        : "No email"}
                    </p>
                    <p className="text-xs">
                      {partner.phone_number
                        ? truncatePhoneNumber(partner.phone_number, 15)
                        : "No phone number"}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-xs text-wrap truncate">
                      {partner.notes.length > 32
                        ? partner.notes.substring(0, 29) + "..."
                        : partner.notes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {showEditModal && contactDetails && (
        <EditContactDetails
          onClose={handleCloseEditModal}
          contactDetails={contactDetails}
        />
      )}
    </>
  );
}

export function getPartnerLength(partners) {
  return partners ? partners.length : 0;
}
