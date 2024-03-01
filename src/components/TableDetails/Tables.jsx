// This file contains the list of tables
import { Card } from "./Cards";
import { Column } from "./Column";
import Research from "../Cards/Research";
import Contact from "../Cards/Contacts";
import Pitch from "../Cards/Pitch";
import Negotiation from "../Cards/Negotiation";
import Deals from "../Cards/Deals";
import NotAFit from "../Cards/NotAFit";
import Prospect from "../Cards/Prospect";
import OnGoingReview from "../Cards/OnGoingReview";
import Partner from "../Cards/Partners";
import TermSheet from "../Cards/TermSheet";
import FollowUp from "../Cards/FollowUp";

export const Tables = () => {
  // if the table is not avaliable by default create it
    const researchData = <Research borderColour='rgb(0, 0, 139)' />;
    const contactData = <Contact borderColour='#87CEEB' />;
    const pitchData = <Pitch borderColour='#08a5aa' />
    const negotiationData = <Negotiation borderColour='orange' />
    const dealData = <Deals borderColour='green' />
    const NotAFitData = <NotAFit borderColour='#FF0000' />

    //console.log(prospectsLength);

    return (
      <div className="flex gap-2 pb-10 w-full overflow-y-auto overflow-x-auto" >
        
        <Column titles="Research" titleColors='rgb(0, 0, 139)' contents={researchData} />

        <Prospect borderColour='rgb(115, 147, 179)' titleColors='rgb(115, 147, 179)' />

        <Column titles="Contacted" titleColors='#87CEEB' contents={contactData} />

        <Column titles="Pitch"  titleColors='#08a5aa' contents={pitchData} />

        <OnGoingReview borderColour='#FDDC5C' titleColors='#FDDC5C' />

        <Partner borderColour='#E67451' titleColors='#E67451' />

        <TermSheet titleColors='#000000' borderColour='#000000' />
        
        <Column titles="Negotiation" titleColors='orange' contents={negotiationData} />

        <Column titles="Deal" titleColors='green' contents={dealData} />

        <FollowUp borderColour='#D3D3D3' titleColors='#D3D3D3' />
        
        <Column titles="Not a Fit" titleColors='#FF0000' contents={NotAFitData} />
      </div>
    );
};
