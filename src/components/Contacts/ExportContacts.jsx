import React from "react";
import exportFromJSON from "export-from-json";
import { Button } from "../Reusables";
import Swal from "sweetalert2";
import api from "../../api";
import { useTranslation } from "react-i18next";

function ExportContacts() {
  const { t } = useTranslation();

  const handleExport = async () => {
    Swal.fire({
      title: t("export_contacts.title"),
      text: t("export_contacts.text"),
      icon: "question",
      showCancelButton: true,
      confirmButtonText: t("export_contacts.confirmButtonText"),
      cancelButtonText: t("export_contacts.cancelButtonText"),
    }).then(async (result) => {
      if (result.isConfirmed) {
        // API call to get contacts
        try {
          const response = await api.get("contacts/export-contacts");
          const data = response.data.data;

          const userData = JSON.parse(localStorage.getItem("user"));

          const fileName = `${userData.first_name}_Contacts`;
          const exportType = exportFromJSON.types.csv;

          exportFromJSON({
            data,
            fileName,
            fields: {
              first_name: t("export_contacts.fields.first_name"),
              last_name: t("export_contacts.fields.last_name"),
              gender: t("export_contacts.fields.gender"),
              organization_name: t("export_contacts.fields.organization_name"),
            },
            exportType,
          });

          Swal.fire({
            icon: "success",
            title: t("export_contacts.success.title"),
            text: t("export_contacts.success.text"),
          });
        } catch (error) {
          console.log(error);

          Swal.fire({
            icon: "error",
            title: t("export_contacts.error.title"),
            text: t("export_contacts.error.text"),
          });
        }
      }
    });
  };

  return (
    <>
      <Button text={t("export_contacts.button_text")} onClick={handleExport} className='whitespace-nowrap'/>
    </>
  );
}

export default ExportContacts;
