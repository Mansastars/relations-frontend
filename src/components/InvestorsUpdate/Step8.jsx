import React, { useEffect, useRef } from "react";
import InputContainer from "./InputContainer";
import CustomInput from "./CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";
import Swal from "sweetalert2";
import BarChart from "./Chart/BarChart";
import * as htmlToImage from "html-to-image";
import api from "../../api";
import UploadLogo from "./UploadLogo";

const schema = yup.object().shape({
  recipients_emails: yup
    .string()
    .required("Recipients E-mails is required")
    .max(2000, "Character limit exceeded (2000)"),
  email_subject: yup
    .string()
    .required("E-mail subject is required")
    .max(2000, "Character limit exceeded (2000)"),
  deck_line: yup.string().max(2000, "Character limit exceeded (2000)"),
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

  const onSubmit = async (data) => {
    // Check if the logo URL exists in formData
    const logoUrl = formData.logoUrl || "";

    if (!logoUrl) {
      Swal.fire({
        icon: "error",
        title: "Logo Required",
        text: "Please upload your company logo before submitting the form.",
      });
      return;
    }

    // Update data in state
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

  const handleConfirm = async () => {
    Swal.fire({
      title: "Processing...",
      text: "Please wait while we process your request.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Generate base64 chart image
      const chartNode = chartRef.current;

      const dataUrl = await htmlToImage.toPng(chartNode);

      // Upload the image to Cloudinary
      const cloudinaryUrl = await uploadToCloudinary(dataUrl);

      // Get the existing InvestorUpdate data from local storage
      const savedData = localStorage.getItem("InvestorsUpdate");
      const parsedData = savedData ? JSON.parse(savedData) : {};

      // Add the Cloudinary URL to the InvestorUpdate data
      parsedData.chartImageUrl = cloudinaryUrl;

      // Update the state and local storage
      updateData({ chartImageUrl: cloudinaryUrl });
      localStorage.setItem("InvestorsUpdate", JSON.stringify(parsedData));

      // Send data to backend
      await sendToBackend(parsedData);

      Swal.fire({
        icon: "success",
        title: "Submission Successful",
        text: "Your form has been successfully submitted.",
      }).then(() => {
        // Reset form or navigate to the first step
        updateData({});
        next();
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "An error occurred during the submission process.",
      });
    }
  };

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET;

  const uploadToCloudinary = async (base64Image) => {
    try {
      const formData = new FormData();
      formData.append("file", base64Image);
      formData.append("upload_preset", uploadPreset);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const error = await response.json();
        Swal.fire({
          icon: "error",
          title: "Failed to Upload Image",
          text: "An error occurred while uploading image. Please try again or contact support",
        });
        console.error("Cloudinary Upload Error:", error);
        throw new Error(
          `Failed to upload image to Cloudinary: ${error.error.message}`
        );
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to Upload Image",
        text: "An error occurred while uploading image. Please try again or contact support",
      });
      console.error("Failed to upload image to Cloudinary:", error);
      throw error;
    }
  };

  const sendToBackend = async (data) => {
    try {
      const response = await api.post(`users/send-update`, data);
      // console.log("Successfully submitted data:", response);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.data.message ||
          "An error occurred during the submission process.",
      });
      console.error("Failed to submit data:", error);
      throw new Error("Failed to submit data, please try again.");
    }
  };

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
        <UploadLogo updateData={updateData} />
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
          multiline
        />
      </InputContainer>

      <>
        <div
          className={`bg-white flex flex-col rounded-xl items-start w-full p-5  gap-3`}
        >
          <h1 className=" text-dark-blue font-semibold text-lg">
            Net Monthly Recurring Revenue (YTD) in USD
          </h1>
          <p>
            Note: The graph below will be included in the email sent to the
            recipients.
          </p>
        </div>
        <div
          ref={chartRef}
          className={`bg-white flex flex-col rounded-xl items-start w-full p-5  gap-3`}
        >
          <BarChart />
        </div>
      </>

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
    </form>
  );
};

export default Step8;
