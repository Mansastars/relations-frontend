import { useTranslation } from "react-i18next";

export const useWaitlistContent = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("ai_automation_title"),
      image: "https://miro.medium.com/v2/resize:fit:1024/0*ZWxz3SM_uMvbmo_E.png",
      note: t("ai_automation_note"),
    },
    {
      title: t("marketing_title"),
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-Digital-Marketing-is-Critical-to-Your-Organization-in-2017.jpg",
      note: t("marketing_note"),
    },
    {
      title: t("ticket_management_title"),
      image: "https://www.tawasultech.com/images/Ticketing-System-Image-01.png",
      note: t("ticket_management_note"),
    },
    {
      title: t("analytics_title"),
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/data_analyticstrendsmin.jpg",
      note: t("analytics_note"),
    },
  ];
};
