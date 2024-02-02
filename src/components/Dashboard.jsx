// Dashboard implementation
import Sidebar from "./SideBar";
import { SearchBar } from "./Reusables";
import { Button } from "./Reusables";
import Modal from "./Modal";
import { useState } from "react";
import { Tables } from "./Tables";

function Dasboard() {
    const [showModal, setShowModal] = useState(false)

    return (
      <div className=" flex gap-5 h-screen">
        <div className=" fixed w-56">
          <Sidebar />
        </div>
        <div className=" flex flex-col gap-20 w-full pl-56 mx-2">
          <div className=" flex pt-2 items-center gap-4">
            <SearchBar />
            <div onClick={() => setShowModal(true)} className="flex">
              <Button text="Add a New Contact" />
            </div>
          </div>
          <Tables />
        </div>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    )
}

export default Dasboard;

{/* <div className=" flex flex-row pt-6 pb-6">
          <Sidebar />
          <div className=" flex flex-col gap-20 justify-between ml-64">
              <div className=" flex flex-row items-center ">
                  <SearchBar />
                  <div onClick={() => setShowModal(true)} className="flex">
                      <Button text="Add a New Contact" />
                  </div>
              </div>
              {showModal && <Modal onClose={() => setShowModal(false)} />}
                <Tables />
          </div>
        </div> */}
