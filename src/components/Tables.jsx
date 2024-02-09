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
import { getProspectsLength } from "./Prospect";
import { getPartnerLength } from "./Partners";
import { getTermSheetLength } from "./TermSheet";
import { getOnGoingReviewsLength } from "./OnGoingReview";
import { getfollowUpsLength } from "./FollowUp";

export const Tables = () => {
  // if the table is not avaliable by default create it
    const researchData = <Research borderColour='#fc6e51' />;
    const contactData = <Contact borderColour='#3bafda' />;
    const pitchData = <Pitch borderColour='#967adc' />
    const negotiationData = <Negotiation borderColour='blue' />
    const dealData = <Deals borderColour='grey' />
    const NotAFitData = <NotAFit borderColour='brown' />
    const ProspectData = <Prospect borderColour='pink' />
    const OnGoingReviewData = <OnGoingReview borderColour='rgb(69,77,87)' />
    const partnerData = <Partner borderColour='rgb(74,72,42)' />
    const termSheetData = <TermSheet borderColour='rgb(80,52,25)' />
    const followupData = <FollowUp borderColour='rgb(87,63,87)' />

    //console.log(prospectsLength);

    return (
      <div className="flex gap-2 pb-10 overflow-y-auto overflow-x-auto" >
        
        <Column titles="Research" titleColors='#fc6e51' contents={researchData} />

        { getProspectsLength > 0 ? <Column titles="Prospect" titleColors='pink' contents={ProspectData} /> : null }

        <Column titles="Contacted" titleColors='#3bafda' contents={contactData} />

        <Column titles="Pitch"  titleColors='#967adc' contents={pitchData} />

        { getOnGoingReviewsLength > 0 ? <Column titles="Review"  titleColors='rgb(69,77,87)' contents={OnGoingReviewData} /> : null }
        
        { getPartnerLength > 0 ?  <Column titles="Partner"  titleColors='rgb(74,72,42)' contents={partnerData} /> : null}

        { getTermSheetLength > 0 ? <Column titles="Term Sheet"  titleColors='rgb(80,52,25)' contents={termSheetData} /> : null  }
        

        <Column titles="Negotiation" titleColors='blue' contents={negotiationData} />

        <Column titles="Deal" titleColors='grey' contents={dealData} />

        { getfollowUpsLength > 0 ? <Column titles="Follow-up" titleColors='rgb(87,63,87)' contents={followupData} /> : null }
        
        <Column titles="Not a Fit" titleColors='brown' contents={NotAFitData} />
      </div>
    );
};
