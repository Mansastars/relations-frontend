import React, { useEffect } from "react";
import InputContainer from "./InputContainer";
import CustomInput from "./CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";
import TextField from "@mui/material/TextField";
import { formatDate } from "./FormatDate";

const schema = yup.object().shape({
  // email: yup.string().email("Invalid email").required("Email is required"),
  date: yup.date().required("Date is required").typeError("Invalid date"),
  company_name: yup.string().required("Company name is required"),
  company_description: yup.string().required("Company description is required"),
  website: yup.string().url("Invalid URL").required("Website is required"),
  founders_profile: yup.string(), // Not required
});

const Step1 = ({
  updateData,
  next,
  back,
  isFirstStep,
  isLastStep,
  formData,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      // email: formData.email || "",
      date: formData.date ? formatDate(formData.date) : "",
      company_name: formData.company_name || "",
      company_description: formData.company_description || "",
      website: formData.website || "",
      founders_profile: formData.founders_profile || "",
    },
  });

  useEffect(() => {
    if (formData) {
      for (const key in formData) {
        if (key === "date" && formData[key]) {
          setValue(key, formatDate(formData[key]));
        } else {
          setValue(key, formData[key]);
        }
      }
    }
  }, [formData, setValue]);

  useEffect(() => {
    if (Object.keys(formData).length === 0) {
      reset({
        // email: "",
        date: "",
        company_name: "",
        company_description: "",
        website: "",
        founders_profile: "",
      });
    }
  }, [formData, reset]);

  const onSubmit = async (formData) => {
    updateData(formData);
    next();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {/* <InputContainer isRequired title="Email">
        <CustomInput
          name="email"
          control={control}
          error={errors.email}
          autoFocus={true}
        />
      </InputContainer> */}

      <InputContainer isRequired title="Date">
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <TextField
              label="Date"
              type="date"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              {...field}
              error={!!errors.date}
              helperText={errors.date?.message}
              fullWidth
            />
          )}
        />
      </InputContainer>

      <InputContainer isRequired title="Company Name">
        <CustomInput
          name="company_name"
          control={control}
          error={errors.company_name}
        />
      </InputContainer>

      <InputContainer isRequired title="Company Description">
        <CustomInput
          name="company_description"
          control={control}
          error={errors.company_description}
          multiline
        />
      </InputContainer>

      <InputContainer isRequired title="Website">
        <CustomInput name="website" control={control} error={errors.website} />
      </InputContainer>

      <InputContainer title="Founder(s) Profile(s)">
        <CustomInput
          name="founders_profile"
          control={control}
          error={errors.founders_profile}
          multiline
        />
      </InputContainer>

      <div className="flex items-center justify-end w-full">
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

export default Step1;
