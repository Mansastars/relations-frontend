// Dashboard implementation
import Sidebar from "./SideBar";
import { SearchBar } from "./Reusables";
import { Button } from "./Reusables";
import Modal from "./Modal";
import { useState } from "react";
import { Tables } from "./Tables";
import MoveContactModal from "./MoveContactModal";

function Dasboard() {
    const [showModal, setShowModal] = useState(false)
    const [showMoveContactModal, setShowMoveContactModal] = useState(false)

    return (
      <div className=" flex gap-5 h-screen">
        <div className=" fixed w-56">
          <Sidebar />
        </div>
        <div className=" flex flex-col gap-20 w-full pl-56 mx-2 overflow-auto">
          <div className=" flex pt-2 items-center gap-4">
            {/* <SearchBar /> */}
            <div onClick={() => setShowModal(true)} className="flex">
              <Button text="Add a New Contact" />
            </div>
            <div onClick={() => setShowMoveContactModal(true)} className="flex">
              <Button text="Move a Contact" />
            </div>
          </div>
          <Tables />
        </div>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
        {showMoveContactModal && <MoveContactModal onClose={() => setShowMoveContactModal(false)} />}
      </div>
    )
}

export default Dasboard;
