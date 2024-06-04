import React, { useEffect, useRef } from "react";
import InputContainer from "./InputContainer";
import CustomInput from "./CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";
import Swal from "sweetalert2";
import BarChart from "./Chart/BarChart";
import cloudinary from "../../../cloudinaryConfig";
import * as htmlToImage from "html-to-image";
import api from "../../api";
import UploadLogo from "./UploadLogo";

const schema = yup.object().shape({
  recipients_emails: yup.string().required("Recipients E-mails is required"),
  email_subject: yup.string().required("E-mail subject is required"),
  deck_line: yup.string(),
});

const Step8 = ({
  updateData,
  next,
  back,
  isFirstStep,
  isLastStep,
  formData,
}) => {
  const chartRef = useRef(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      recipients_emails: formData.recipients_emails || "",
      email_subject: formData.email_subject || "",
      deck_line: formData.deck_line || "",
    },
  });

  useEffect(() => {
    if (formData) {
      for (const key in formData) {
        setValue(key, formData[key]);
      }
    }
  }, [formData, setValue]);

  const onSubmit = (data) => {
    updateData(data);
    Swal.fire({
      title: "Confirm Submission",
      text: "Are you sure you want to submit the form?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleConfirm();
      }
    });
  };

  // const handleConfirm = async () => {
  //   // Generate base64 chart image
  //   const chartNode = chartRef.current;
  //   const dataUrl = await htmlToImage.toPng(chartNode);

  //   // Upload the image to Cloudinary
  //   const cloudinaryUrl = await uploadToCloudinary(dataUrl);

  //   // Get the existing InvestorUpdate data from local storage
  //   const savedData = localStorage.getItem("InvestorsUpdate");
  //   const parsedData = savedData ? JSON.parse(savedData) : {};

  //   // Add the Cloudinary URL to the InvestorUpdate data
  //   parsedData.chartImageUrl = cloudinaryUrl;

  //   // Save updated data back to local storage
  //   localStorage.setItem("InvestorsUpdate", JSON.stringify(parsedData));

  //   // Send data to backend
  //   await sendToBackend(parsedData);

  //   next();
  // };

  // const uploadToCloudinary = async (base64Image) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", base64Image);
  //     formData.append("upload_preset", "your_upload_preset");

  //     const response = await fetch(`https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await response.json();
  //     return data.secure_url; // Return the secure URL of the uploaded image
  //   } catch (error) {
  //     console.error("Failed to upload image to Cloudinary:", error);
  //     throw error;
  //   }
  // };

  // const sendToBackend = async (data) => {
  //   // Replace this with your actual backend API call
  //   try {
  //     const response = await api.post(``, JSON.stringify(data))
  //     console.log("Successfully submitted data:", response);
  //   } catch (error) {
  //     console.error("Failed to submit data:", error);
  //   }
  // };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <InputContainer
        title="Recipients E-mails"
        isHeader
        headerText="Recipients"
        isadditionalText
        additionalText="Add Recipients by e-mail separated by commas i.e. info@mansastars.com, investors@vc.com"
        isRequired
      >
        <CustomInput
          name="recipients_emails"
          control={control}
          error={errors.recipients_emails}
          autoFocus={true}
          multiline
        />
      </InputContainer>

      <InputContainer title="E-mail Subject" isRequired>
        <CustomInput
          name="email_subject"
          control={control}
          error={errors.email_subject}
        />
      </InputContainer>

      <InputContainer
        title="Your Logo"
        isRequired
        isadditionalText
        additionalText="If you want your logo to appear at the top of the E-mail to your investors, upload your logo below."
      >
        <UploadLogo />
      </InputContainer>

      <InputContainer
        title="Deck Link"
        isadditionalText
        additionalText="Optional (if you are currently fundraising, kindly add a freely accessible link to your pitch deck). If not applicable simply write 'N/A' below"
      >
        <CustomInput
          name="deck_line"
          control={control}
          error={errors.deck_line}
        />
      </InputContainer>

      <div className=" self-center my-5">
        <span className=" font-bold text-center">
          A copy of your responses will be emailed to the address that you
          provided.
        </span>
      </div>

      <div className="flex items-center justify-between w-full">
        {!isFirstStep && (
          <Button
            text="Back"
            type="button"
            className="bg-white hover:text-white"
            onClick={back}
          />
        )}
        <Button
          type="submit"
          text={isLastStep ? "Finish" : "Next"}
          className=" bg-mansa-blue text-white hover:bg-white hover:text-teal-400"
        />
      </div>

      <div ref={chartRef} style={{ display: "none" }}>
        <BarChart />
      </div>
    </form>
  );
};

export default Step8;
