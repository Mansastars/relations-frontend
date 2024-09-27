
import { stageType } from "./stageType";
import Stage from "./Stage";
import { useTranslation } from "react-i18next";

export const Tables = () => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-2 pb-10 w-full overflow-y-auto overflow-x-auto">
      <Stage
        titleColor={"#00008b"}
        borderColour={"rgb(0, 0, 139)"}
        stageName={t("stage.research")}
        stage={stageType.RESEARCH}
        stageQuery={"researches"}
        url={'deals/research-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"rgb(115, 147, 179)"}
        borderColour={"rgb(115, 147, 179)"}
        stageName={t("stage.prospect")}
        stage={stageType.PROSPECT}
        stageQuery={"prospects"}
        url={'deals/prospect-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"#87CEEB"}
        borderColour={"#87CEEB"}
        stageName={t("stage.contacted")}
        stage={stageType.CONTACTED}
        stageQuery={"contacts"}
        url={'deals/contacted-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"#08a5aa"}
        borderColour={"#08a5aa"}
        stageName={t("stage.pitch")}
        stage={stageType.PITCH}
        stageQuery={"pitches"}
        url={'deals/pitch-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"#FDDC5C"}
        borderColour={"#FDDC5C"}
        stageName={t("stage.review")}
        stage={stageType.REVIEW}
        stageQuery={"OnGoingReviews"}
        url={'deals/review-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"#E67451"}
        borderColour={"#E67451"}
        stageName={t("stage.partner")}
        stage={stageType.PARTNER}
        stageQuery={"partners"}
        url={'deals/partner-contacts'}
        isCollapsed={false}
      />
      <Stage
        titleColor={"#000000"}
        borderColour={"#000000"}
        stageName={t("stage.termSheet")}
        stage={stageType.OFFER}
        stageQuery={"termSheets"}
        url={'deals/offer-contacts'}
        isCollapsed={true}
      />
      <Stage
        titleColor={"orange"}
        borderColour={"orange"}
        stageName={t("stage.negotiation")}
        stage={stageType.NEGOTIATION}
        stageQuery={"negotiations"}
        url={'deals/negotiation-contacts'}
        isCollapsed={true}
      />
      <Stage
        titleColor={"green"}
        borderColour={"green"}
        stageName={t("stage.deal")}
        stage={stageType.DEAL}
        stageQuery={"deals"}
        url={'deals/deal-contacts'}
        isCollapsed={true}
      />
      <Stage
        titleColor={"#D3D3D3"}
        borderColour={"#D3D3D3"}
        stageName={t("stage.followUp")}
        stage={stageType.FOLLOWUP}
        stageQuery={"followUps"}
        url={'deals/followup-contacts'}
        isCollapsed={true}
      />
      <Stage
        titleColor={"#FF0000"}
        borderColour={"#FF0000"}
        stageName={t("stage.deal")}
        stage={stageType.REJECTION}
        stageQuery={"notAFits"}
        url={'deals/rejection-contacts'}
        isCollapsed={true}
      />
    </div>
  );
};
