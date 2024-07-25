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

export default function NotAFit({ borderColour }) {
  const queryClient = useQueryClient();
  const currentDealId =
    localStorage.getItem("currentDealId") ||
    window.location.pathname.split("/").at(-1);

  const BorderStyle = {
    border: `2px solid  ${borderColour}`,
    width: "210px",
    minWidth: "210px",
    overflow: "hidden",
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [contactDetails, setContactDetails] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const {
    data: notAFits,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["notAFits", currentDealId],
    queryFn: async () => {
      const response = await api.get(
        `deals/rejection-contacts/${currentDealId}`
      );
      return response.data.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) =>
      api.delete(`contacts/delete-contact/${currentDealId}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["notAFits", currentDealId]);
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
    return <div>Error occurred fetching contacts in not-a-fit stage.</div>;
  }

  return (
    <>
      {notAFits.length === 0 ? (
        <div></div>
      ) : (
        notAFits.map((notAFit) => (
          <div
            key={notAFit.id}
            className="flex flex-col rounded-2xl mb-2 h-40 "
            style={{ ...BorderStyle }}
          >
            <div
              className="flex flex-row p-2 rounded-t-2xl border-b-dark-blue items-center gap-2"
              style={{ background: borderColour }}
            >
              <ContactImage
                profile_url={notAFit.profile_pic}
                firstName={notAFit.first_name}
                lastName={notAFit.last_name}
                color={borderColour}
              />
              <div className="flex-grow overflow-hidden">
                <p className="font-extrabold text-sm text-white truncate">
                  {`${notAFit.first_name} ${notAFit.last_name}`}
                </p>
                <p className="text-sm text-white truncate">
                  {notAFit.organization_name || "No company"}
                </p>
              </div>
              <div className="flex-shrink-0">
                <ContactMenu
                  anchorEl={anchorEl}
                  handleMenuClick={(event) =>
                    handleMenuClick(event, notAFit.id)
                  }
                  handleMenuClose={handleMenuClose}
                  handleViewOrUpdate={handleViewOrUpdate}
                  handleDeleteClick={handleDeleteClick}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
              <div className="overflow-hidden w-full">
                <p className="text-xs font-semibold truncate">
                  Deal Size: $
                  {notAFit.deal_size
                    ? addCommasToNumber(notAFit.deal_size)
                    : "0"}
                </p>
                <p className="text-xs font-semibold truncate">
                  Meeting:{" "}
                  {notAFit.meeting_date
                    ? new Date(notAFit.meeting_date).toLocaleString()
                    : "Nil"}
                </p>
                <p className="text-xs truncate">
                  {notAFit.email || "No email"}
                </p>
                <p className="text-xs truncate">
                  {notAFit.phone_number || "No phone number"}
                </p>
              </div>
              <div className="w-full overflow-hidden">
                <p className="text-xs truncate">{notAFit.notes}</p>
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
