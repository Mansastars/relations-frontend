// Created Deals

export default function CreatedDeals() {
    return (
        <div className=" flex flex-col gap-10 items-center justify-center w-full">
            <div className=" flex">
                <h1 className=" text-dark-blue font-bold text-4xl">Existing Deals</h1>
            </div>
            <div className=" flex flex-row max-md:flex-col flex-wrap justify-start items-start gap-5">
                <div className=" flex flex-col justify-start items-start w-64 gap-2 p-5 rounded border border-mansa-blue hover:border-dark-blue">
                    <h2 className=" font-bold text-2xl text-dark-blue text-nowrap">Mansa</h2>
                    <p className=" text-dark-blue text-base font-semibold text-wrap">23 contacts created</p>
                    <p className=" text-dark-blue text-base"><span className=" font-semibold">Deadline: </span> 12/06/2023</p>
                </div>
                <div className=" flex flex-col justify-start items-start w-64 gap-2 p-5 rounded border border-mansa-blue hover:border-dark-blue">
                    <h2 className=" font-bold text-2xl text-dark-blue text-nowrap ">Khairat Daniel</h2>
                    <p className=" text-dark-blue text-base font-semibold text-wrap">23 contacts created</p>
                    <p className=" text-dark-blue text-base"><span className=" font-semibold">Deadline: </span>12/06/2023</p>
                </div>
                <div className=" flex flex-col justify-start items-start w-64 gap-2 p-5 rounded border border-mansa-blue hover:border-dark-blue">
                    <h2 className=" font-bold text-2xl text-dark-blue text-nowrap">Khairat Deal</h2>
                    <p className=" text-dark-blue text-base font-semibold text-wrap">23 contacts created</p>
                    <p className=" text-dark-blue text-base"><span className=" font-semibold">Deadline: </span>12/06/2023</p>
                </div>
            </div>
        </div>
    )
}
