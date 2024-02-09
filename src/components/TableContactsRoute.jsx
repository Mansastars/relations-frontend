import api from "./api";
import { useEffect, useState } from 'react';

export default function Research(borderColour) {

    const BorderStyle = {
        border: `2px solid  ${borderColour}`,
      };

    const [researches, setResearches] = useState([]);

    useEffect(() => {
        const fetchResearches = async () => {
            const currentDealId = localStorage.getItem('currentDealId');

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }
            console.log(currentDealId)

            try {
                const response = await api.get(`deals/research-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                const fetchedResearches = response.data;
                console.log(fetchedResearches);
                
                if (Array.isArray(fetchedResearches)) {
                    setResearches(prevResearches => [...prevResearches, ...fetchedResearches]);
                  } else {
                    console.error('Fetched researches is not an array:', fetchedResearches);
                  }
                  
            } catch (error) {
                console.error('Error fetching research:', error);
            }
        };

        fetchResearches();
    }, []);

    return (
        <>
            {researches.length === 0 ? (
                <div>No research data available</div>
            ) : (
                <>
                    {console.log("Researches length:", researches.length)}
                    {researches.length > 0 && (
                        <div>
                            <p>hello</p>
                            {researches.map(research => (
                                <div key={research.id} className=" flex flex-col rounded-2xl max-w-34 mb-2 h-full" style={BorderStyle}>
                                    <div className=" flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour}}>
                                        <p className=" font-extrabold text-sm">{research.first_name}</p>
                                        <p>hello</p>
                                        <p className=" text-sm">{research.organization_name}</p>
                                    </div>
                                    <div className=" flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                                        <div className="">
                                            <p className=" text-xs font-semibold">{research.meeting_date}</p>
                                            <p className="text-xs">{research.email}</p>
                                        </div>
                                        <div className=" flex flex-col justify-center items-start">
                                            <p className="text-xs text-wrap">{research.notes}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    )
}
