// New Deal Page
import Sidebar from "./SideBar"
import { SearchBar } from "../Reusables"
import { Button } from "../Reusables"
import { useState } from "react"
import NewDealModal from "../DealDetails/NewDealModal"
import CreatedDeals from "../DealDetails/CreatedDeal"
import FreeTrialBanner from "./FreeTrialBanner"

// The all dashbord page. All dashboards appear here annd one can also create a dashboard on this page.
export default function NewDealPage() {
    const [showNewDealModal, setShowNewDealModal] = useState(false)

    return (
        <div className=" h-screen w-full">
            <div className=" sticky top-0">
                <FreeTrialBanner />
            </div>
            <div className=" flex gap-5 w-full h-screen">
                <div className="">
                    {/* w-fit max-[768px]:w-20 h-screen max-h-screen overflow-y-auto */}
                    <Sidebar />
                </div>
                <div className=" flex flex-col gap-20 w-full h-full ">
                    <div className=" flex pt-2 items-center gap-4">
                        <div onClick={() => setShowNewDealModal(true)} className="flex">
                            <Button text="Create a Dashboard" />
                        </div>
                    </div>
                    <div className=" overflow-x-auto pb-5">
                        <CreatedDeals />
                    </div>
                </div>
                {showNewDealModal && <NewDealModal onClose={() => setShowNewDealModal(false)} />}
            </div>
        </div>
    )
}
