// This file contains the list of tables
import { Card } from "./Cards";
import { Column } from "./Column";
import Research from "./Research";
import Contact from "./Contacts";
import Pitch from "./Pitch";
import Negotiation from "./Negotiation";
import Deals from "./Deals";
import NotAFit from "./NotAFit";
import Prospect from "./Prospect";
import OnGoingReview from "./OnGoingReview";
import Partner from "./Partners";
import TermSheet from "./TermSheet";
import FollowUp from "./FollowUp";

export const Tables = () => {
  // if the table is not avaliable by default create it
    const researchData = <Research borderColour='#fc6e51' />;
    const contactData = <Contact borderColour='#3bafda' />;
    const pitchData = <Pitch borderColour='#967adc' />
    const negotiationData = <Negotiation borderColour='blue' />
    const dealData = <Deals borderColour='grey' />
    const NotAFitData = <NotAFit borderColour='brown' />

    //console.log(prospectsLength);

    return (
      <div className="flex gap-2 pb-10 overflow-y-auto overflow-x-auto" >
        
        <Column titles="Research" titleColors='#fc6e51' contents={researchData} />

        <Prospect borderColour='pink' titleColors='pink' />

        <Column titles="Contacted" titleColors='#3bafda' contents={contactData} />

        <Column titles="Pitch"  titleColors='#967adc' contents={pitchData} />

        <OnGoingReview borderColour='rgb(69,77,87)' titleColors='rgb(69,77,87)' />

        <Partner borderColour='rgb(74,72,42)' titleColors='rgb(74,72,42)' />

        <TermSheet titleColors='rgb(80,52,25)' borderColour='rgb(80,52,25)' />
        

        <Column titles="Negotiation" titleColors='blue' contents={negotiationData} />

        <Column titles="Deal" titleColors='grey' contents={dealData} />

        <FollowUp borderColour='rgb(87,63,87)' titleColors='rgb(87,63,87)' />
        
        <Column titles="Not a Fit" titleColors='brown' contents={NotAFitData} />
      </div>
    );
};
