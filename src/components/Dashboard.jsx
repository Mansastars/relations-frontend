// Dashboard implementation
import Sidebar from "./SideBar";
import { SearchBar } from "./Reusables";
import { Button } from "./Reusables";
import Modal from "./Modal";
import { useState } from "react";

function Dasboard() {
    const [showModal, setShowModal] = useState(false)

    return (
      <div className=" bg-light-grey flex flex-row w-full h-screen pt-6 pb-6">
        <Sidebar />
        <div className=" ml-64 pr-12 w-full h-full">
            <div className=" flex flex-row justify-between items-center ">
                <SearchBar />
                <div onClick={() => setShowModal(true)} className="flex">
                    <Button text="Add a New Deal" />
                </div>
            </div>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
      </div>
    )
}

export default Dasboard;
