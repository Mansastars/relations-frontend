import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../api";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import Swal from "sweetalert2";
import EditContactDetails from "../CardDetails/EditContactDetails";
import addCommasToNumber from "../ReusableComponents/AddCommastoNum";
import truncateEmail from "./Utilities/truncateEmail";
import truncatePhoneNumber from "./Utilities/truncatePhoneNumber";
import ContactImage from "./ContactImage/ContactImage";
import ContactMenu from "./ContactMenu/ContactMenu";

//Contact
export default function Deals({ borderColour }) {
  const queryClient = useQueryClient();
  const currentDealId =
    localStorage.getItem("currentDealId") ||
    window.location.pathname.split("/").at(-1);

  const BorderStyle = {
    border: `2px solid  ${borderColour}`,
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [contactDetails, setContactDetails] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const {
    data: deals,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["deals", currentDealId],
    queryFn: async () => {
      const response = await api.get(`deals/deal-contacts/${currentDealId}`);
      return response.data.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) =>
      api.delete(`contacts/delete-contact/${currentDealId}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["deals", currentDealId]);
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
      {deals.length === 0 ? (
        <div></div>
      ) : (
        deals.map((deal) => (
          <div
            key={deal.id}
            className="flex flex-col rounded-2xl mb-2 h-40"
            style={{ ...BorderStyle, minWidth: "210px" }}
          >
            <div
              className="flex flex-row p-2 rounded-t-2xl border-b-dark-blue items-center gap-2"
              style={{ background: borderColour }}
            >
              <ContactImage
                profile_url={deal.profile_pic}
                firstName={deal.first_name}
                lastName={deal.last_name}
                color={borderColour}
              />
              <div className="flex flex-row w-full items-center">
                <div className="flex flex-col w-full">
                  <p className="font-extrabold text-sm text-white truncate">
                    {`${deal.first_name} ${deal.last_name}`.length > 11
                      ? `${deal.first_name} ${deal.last_name}`.substring(0, 8) +
                        "..."
                      : `${deal.first_name} ${deal.last_name}`}
                  </p>
                  <p className="text-sm text-white truncate">
                    {deal.organization_name
                      ? deal.organization_name.length > 15
                        ? deal.organization_name.substring(0, 12) + "..."
                        : deal.organization_name
                      : "No company"}
                  </p>
                </div>
                <div className=" self-end">
                  <ContactMenu
                    anchorEl={anchorEl}
                    handleMenuClick={(event) => handleMenuClick(event, deal.id)}
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
                  {deal.deal_size
                    ? deal.deal_size.length > 15
                      ? "$" +
                        addCommasToNumber(deal.deal_size.substring(0, 15)) +
                        "..."
                      : "$" + addCommasToNumber(deal.deal_size)
                    : "$0"}
                </p>
                <p className="text-xs font-semibold">
                  Meeting:{" "}
                  {deal.meeting_date
                    ? new Date(deal.meeting_date).toLocaleString()
                    : "Nil"}
                </p>
                <p className="text-xs">
                  {deal.email ? truncateEmail(deal.email, 30) : "No email"}
                </p>
                <p className="text-xs">
                  {deal.phone_number
                    ? truncatePhoneNumber(deal.phone_number, 15)
                    : "No phone number"}
                </p>
              </div>
              <div className="flex flex-col justify-center items-start">
                <p className="text-xs text-wrap">
                  {deal.notes.length > 33
                    ? deal.notes.substring(0, 30) + "..."
                    : deal.notes}
                </p>
              </div>
            </div>
          </div>
        ))
      )}

      {showEditModal && contactDetails && (
        <EditContactDetails
          onClose={handleCloseEditModal}
          contactDetails={contactDetails}
        />
      )}
    </>
  );
}
