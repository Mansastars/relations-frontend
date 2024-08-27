
import { stageType } from "./stageType";
import Stage from "./Stage";

export const Tables = () => {

  return (
    <div className="flex gap-2 pb-10 w-full overflow-y-auto overflow-x-auto">
      <Stage
        titleColor={"#00008b"}
        borderColour={"rgb(0, 0, 139)"}
        stageName={"Research"}
        stage={stageType.RESEARCH}
        stageQuery={"researches"}
        url={'deals/research-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"rgb(115, 147, 179)"}
        borderColour={"rgb(115, 147, 179)"}
        stageName={"Prospect"}
        stage={stageType.PROSPECT}
        stageQuery={"prospects"}
        url={'deals/prospect-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"#87CEEB"}
        borderColour={"#87CEEB"}
        stageName={"Contacted"}
        stage={stageType.CONTACTED}
        stageQuery={"contacts"}
        url={'deals/contacted-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"#08a5aa"}
        borderColour={"#08a5aa"}
        stageName={"Pitch"}
        stage={stageType.PITCH}
        stageQuery={"pitches"}
        url={'deals/pitch-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"#FDDC5C"}
        borderColour={"#FDDC5C"}
        stageName={"Review"}
        stage={stageType.REVIEW}
        stageQuery={"OnGoingReviews"}
        url={'deals/review-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"#E67451"}
        borderColour={"#E67451"}
        stageName={"Partner"}
        stage={stageType.PARTNER}
        stageQuery={"partners"}
        url={'deals/partner-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"#000000"}
        borderColour={"#000000"}
        stageName={"Term Sheet"}
        stage={stageType.OFFER}
        stageQuery={"termSheets"}
        url={'deals/offer-contacts'}
        isCollapsed={true}
      />
      <Stage
        titleColor={"orange"}
        borderColour={"orange"}
        stageName={"Negotiation"}
        stage={stageType.NEGOTIATION}
        stageQuery={"negotiations"}
        url={'deals/negotiation-contacts'}
        isCollapsed={true}
      />
      <Stage
        titleColor={"green"}
        borderColour={"green"}
        stageName={"Deal"}
        stage={stageType.DEAL}
        stageQuery={"deals"}
        url={'deals/deal-contacts'}
        isCollapsed={true}
      />
      <Stage
        titleColor={"#D3D3D3"}
        borderColour={"#D3D3D3"}
        stageName={"Follow-up"}
        stage={stageType.FOLLOWUP}
        stageQuery={"followUps"}
        url={'deals/followup-contacts'}
        isCollapsed={true}
      />
      <Stage
        titleColor={"#FF0000"}
        borderColour={"#FF0000"}
        stageName={"Deal"}
        stage={stageType.REJECTION}
        stageQuery={"notAFits"}
        url={'deals/rejection-contacts'}
        isCollapsed={true}
      />
    </div>
  );
};
