import React, { useState } from "react";
import EditContactDetails from "../CardDetails/EditContactDetails";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../api";
import Swal from "sweetalert2";
import Loader from "../Cards/Loader/Loader";
import itemTypes from "./itemTypes";
import ContactCard from "../Table/Card";
import { toast } from "react-toastify";
import { useDrop } from "react-dnd";
import { BiCollapse } from "react-icons/bi";
import { HiArrowsExpand } from "react-icons/hi";
import { motion } from "framer-motion";

function Stage({
  titleColor,
  borderColour,
  stageName,
  stage,
  stageQuery,
  url,
  isCollapsed
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [contactDetails, setContactDetails] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const queryClient = useQueryClient();
  const currentDealId =
    localStorage.getItem("currentDealId") ||
    window.location.pathname.split("/").at(-1);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const moveContact = useMutation({
    mutationFn: async (userData) => {
      const currentDealId = localStorage.getItem("currentDealId");
      if (!currentDealId) {
        throw new Error("Deal ID not found in localStorage");
      }

      return await api.patch(`/deals/change-stage/${currentDealId}`, userData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        "contacts",
        "deals",
        "followUps",
        "negotiations",
        "notAFits",
        "OnGoingReviews",
        "partners",
        "pitches",
        "prospects",
        "researches",
        "termSheets",
      ]);
      toast.success("Contact moved successfully.");
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleContactMove = (id, stage) => {
    const userData = {
      id,
      stage,
    };
    moveContact.mutate(userData);
  };

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: itemTypes.CARD,
      drop: (item, monitor) => {
        handleContactMove(item.Id, stage);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    []
  );

  const {
    data: contacts,
    error,
    isLoading,
  } = useQuery({
    queryKey: [stageQuery, currentDealId],
    queryFn: async () => {
      const response = await api.get(`${url}/${currentDealId}`);
      return response.data.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) =>
      api.delete(`contacts/delete-contact/${currentDealId}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["followUps", currentDealId]);
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
    return (
      <div>Error occurred check your internet connection and try again</div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <motion.div
          className={`shadow-lg rounded-2xl w-full bg-white flex justify-between`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {!collapsed && (
            <div
              className={`font-bold text-xl py-4 pl-4`}
              style={{ color: titleColor }}
            >
              {stageName}
            </div>
          )}
          <button onClick={toggleCollapse} className="p-5 rounded transition-transform duration-300 ease-in-out transform hover:scale-110">
            {collapsed ? (
              <HiArrowsExpand className="text-green-400" size={24} />
            ) : (
              <BiCollapse className="text-red-400" size={24} />
            )}
          </button>
        </motion.div>

        <motion.div
          ref={dropRef}
          className={`overflow-auto p-2 rounded-xl ${
            collapsed ? "w-16 min-h-16" : "min-w-48"
          } ${isOver || contacts.length === 0 ? "min-h-96" : ""}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: collapsed ? 0 : "auto", opacity: collapsed ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            display: collapsed ? "none" : "block",
          }}
        >
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <ContactCard
                  contact={contact}
                  borderColour={borderColour}
                  anchorEl={anchorEl}
                  handleMenuClick={handleMenuClick}
                  handleMenuClose={handleMenuClose}
                  handleViewOrUpdate={handleViewOrUpdate}
                  handleDeleteClick={handleDeleteClick}
                />
              </motion.div>
            ))
          ) : (
            <div className="text-center text-gray-500 p-4">
              
            </div>
          )}
        </motion.div>
      </div>

      {showEditModal && contactDetails && (
        <EditContactDetails
          onClose={handleCloseEditModal}
          contactDetails={contactDetails}
        />
      )}
    </>
  );
}

export default Stage;
