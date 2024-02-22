// New Deal Page
import Sidebar from "./SideBar"
import { SearchBar } from "./Reusables"
import { Button } from "./Reusables"
import { useState } from "react"
import NewDealModal from "./NewDealModal"
import CreatedDeals from "./CreatedDeal"

/**
 * This code snippet represents the NewDealPage component in a React application.
 * It is responsible for rendering the page that allows users to create new deals.
 * The component includes a sidebar, a button to create a new deal,
 * and a section to display existing deals. It also includes a modal component for
 * creating a new deal. The component uses state to control the visibility of the
 * modal. When the button to create a new deal is clicked, the modal is shown. When
 * the modal is closed, the state is updated to hide the modal. The component is
 * exported as the default export.
 */

export default function NewDealPage() {
    const [showNewDealModal, setShowNewDealModal] = useState(false)

    return (
        <div>
            <div className=" flex gap-5">
                <div className=" fixed h-full min-h-screen"> 
                    <Sidebar />
                </div>
                <div className=" flex flex-col ml-56 max-[768px]:ml-20 gap-20 pl-2 w-full h-full mb-10 ">
                    <div className=" flex pt-2 items-center gap-4">
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
