// New Deal Page
import Sidebar from "./SideBar"
import { SearchBar } from "./Reusables"
import { Button } from "./Reusables"
import { useState } from "react"
import NewDealModal from "./NewDealModal"
import CreatedDeals from "./CreatedDeal"

export default function NewDealPage() {
    const [showNewDealModal, setShowNewDealModal] = useState(false)

    return (
        <div>
            <div className=" flex gap-5 h-screen">
                <div className=" fixed w-56">
                    <Sidebar />
                </div>
                <div className=" flex flex-col gap-20 w-full pl-56 mx-2">
                <div className=" flex pt-2 items-center gap-4">
                    <SearchBar />
                    <div onClick={() => setShowNewDealModal(true)} className="flex">
                        <Button text="Create a Deal" />
                    </div>
                </div>
                <CreatedDeals />
                </div>
                {showNewDealModal && <NewDealModal onClose={() => setShowNewDealModal(false)} />}
            </div>
        </div>
    )
}
