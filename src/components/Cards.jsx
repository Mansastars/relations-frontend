// Cards in the table dashboard

export function Card(borderColour) {

    const BorderStyle = {
        border: `1px solid  ${borderColour}`,
      };
      
    return(
        <div className=" flex flex-col bg-white rounded-2xl max-w-34 h-full" style={BorderStyle}>
            <div className=" flex flex-col bg-[#d3d3d3] p-2 rounded-t-2xl border-b-dark-blue items-start">
                <p className=" font-extrabold text-sm">Khairat Adesina</p>
                <p className=" text-sm">Khairat Company</p>
            </div>
            <div className=" flex flex-col gap-1 p-2 items-center justify-center">
                <div className="">
                    <p className=" text-xs font-semibold">Meeting: Jan 22nd, 9am</p>
                    <p className="text-xs">khairatadesina01@gmail.com</p>
                </div>
                <div className=" flex flex-col justify-center items-center">
                    <p className="text-xs">Get Alex to introduce me</p>
                </div>
            </div>
        </div>
    ) 
}
