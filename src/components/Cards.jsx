// Cards in the table dashboard
import data from "./data.js";
import Research from "./TableContactsRoute.jsx";

export function Card( {borderColour, data}) {
    const BorderStyle = {
        border: `2px solid  ${borderColour}`,
      };
      
    return(
        // Search for cards in a table
        <div className=" flex flex-col rounded-2xl max-w-34 mb-2 h-full" style={BorderStyle}>
            <div className=" flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour}}>
                <p className=" font-extrabold text-sm">{data.name}</p>
                <p className=" text-sm">{data.company}</p>
            </div>
            <div className=" flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                <div className="">
                    <p className=" text-xs font-semibold">{data.meeting}</p>
                    <p className="text-xs">{data.email}</p>
                </div>
                <div className=" flex flex-col justify-center items-start">
                    <p className="text-xs text-wrap">{data.notes}</p>
                </div>
            </div>
        </div>
    ) 
}
