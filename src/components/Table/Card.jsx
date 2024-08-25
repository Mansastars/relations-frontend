import React from "react";
import ContactImage from "../Cards/ContactImage/ContactImage";
import ContactMenu from "../Cards/ContactMenu/ContactMenu";
import { useDrag } from "react-dnd";
import itemTypes from "./itemTypes";

function ContactCard({ contact, borderColour, anchorEl, handleMenuClose, handleViewOrUpdate, handleDeleteClick,handleMenuClick }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: itemTypes.CARD,
      item: {
        Id: contact.id,
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  const BorderStyle = {
    border: `2px solid ${borderColour}`,
    width: "210px",
    minWidth: "210px",
    overflow: "hidden",
  };
  return (
    <div
      key={contact.id}
      className="flex flex-col rounded-2xl mb-2 h-40"
      style={{ ...BorderStyle, opacity }}
      ref={dragRef}
    >
      <div
        className="flex flex-row p-2 rounded-t-2xl border-b-dark-blue items-center gap-2"
        style={{ background: borderColour }}
      >
        <ContactImage
          profile_url={contact.profile_pic}
          firstName={contact.first_name}
          lastName={contact.last_name}
          color={borderColour}
        />
        <div className="flex-grow overflow-hidden">
          <p className="font-extrabold text-sm text-white truncate">
            {`${contact.first_name} ${contact.last_name}`}
          </p>
          <p className="text-sm text-white truncate">
            {contact.organization_name || "No company"}
          </p>
        </div>
        <div className="flex-shrink-0">
          <ContactMenu
            anchorEl={anchorEl}
            handleMenuClick={(event) => handleMenuClick(event, contact.id)}
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
            {contact.deal_size ? addCommasToNumber(contact.deal_size) : "0"}
          </p>
          <p className="text-xs font-semibold truncate">
            Meeting:{" "}
            {contact.meeting_date
              ? new Date(contact.meeting_date).toLocaleString()
              : "Nil"}
          </p>
          <p className="text-xs truncate">{contact.email || "No email"}</p>
          <p className="text-xs truncate">
            {contact.phone_number || "No phone number"}
          </p>
        </div>
        <div className=" w-full overflow-hidden">
          <p className="text-xs truncate">{contact.notes}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
