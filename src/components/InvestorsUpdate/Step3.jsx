import React, { useEffect } from "react";
import InputContainer from "./InputContainer";
import CustomInput from "./CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const schema = yup.object().shape({
  januaryMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("January MRR is required"),
  februaryMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("February MRR is required"),
  marchMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("March MRR is required"),
  aprilMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("April MRR is required"),
  mayMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("May MRR is required"),
  juneMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("June MRR is required"),
  julyMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("July MRR is required"),
  augustMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("August MRR is required"),
  septemberMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("September MRR is required"),
  octoberMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("October MRR is required"),
  novemberMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("November MRR is required"),
  decemberMRR: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("December MRR is required"),
  gross_margin: yup
    .number()
    .typeError("Only numbers are allowed")
    .min(0, "Only Add a Number here starting at 0")
    .required("Gross Margin is required"),
  cash_burn: yup.number().notRequired().typeError("Only numbers are allowed"),
  cash_in_hand: yup
    .number()
    .notRequired()
    .typeError("Only numbers are allowed"),
  user_MoM_growth_rate: yup.string().notRequired(),
});

const Step3 = ({
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
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      januaryMRR: formData.januaryMRR || "",
      februaryMRR: formData.februaryMRR || "",
      marchMRR: formData.marchMRR || "",
      aprilMRR: formData.aprilMRR || "",
      mayMRR: formData.mayMRR || "",
      juneMRR: formData.juneMRR || "",
      julyMRR: formData.julyMRR || "",
      augustMRR: formData.augustMRR || "",
      septemberMRR: formData.septemberMRR || "",
      octoberMRR: formData.octoberMRR || "",
      novemberMRR: formData.novemberMRR || "",
      decemberMRR: formData.decemberMRR || "",
      gross_margin: formData.gross_margin || "",
      cash_burn: formData.cash_burn || "",
      cash_in_hand: formData.cash_in_hand || "",
      user_MoM_growth_rate: formData.user_MoM_growth_rate || "",
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
    updateData(data);
    next();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <InputContainer
        isRequired
        title="January MRR in USD"
        isHeader
        headerText="Key Performance Indicators (Month/Year)"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="januaryMRR"
          control={control}
          error={errors.januaryMRR}
          autoFocus={true}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="February MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="februaryMRR"
          control={control}
          error={errors.februaryMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="March MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="marchMRR"
          control={control}
          error={errors.marchMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="April MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="aprilMRR"
          control={control}
          error={errors.aprilMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="May MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="mayMRR"
          control={control}
          error={errors.mayMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="June MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="juneMRR"
          control={control}
          error={errors.juneMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="July MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="julyMRR"
          control={control}
          error={errors.julyMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="August MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="augustMRR"
          control={control}
          error={errors.augustMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="September MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="septemberMRR"
          control={control}
          error={errors.septemberMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="October MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="octoberMRR"
          control={control}
          error={errors.octoberMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="November MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="novemberMRR"
          control={control}
          error={errors.novemberMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="December MRR in USD"
        isadditionalText
        additionalText="Add your MRR for the month. If you are pre-Revenue or the month is yet to start, add 0"
      >
        <CustomInput
          name="decemberMRR"
          control={control}
          error={errors.decemberMRR}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer
        isRequired
        title="Share of Revenue Net Attributable to Company / Gross Profit Share or Gross Margin in %"
      >
        <CustomInput
          name="gross_margin"
          control={control}
          error={errors.gross_margin}
          type="number"
          endAdornment="%"
        />
      </InputContainer>

      <InputContainer title="Cash Burn in USD">
        <CustomInput
          name="cash_burn"
          control={control}
          error={errors.cash_burn}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer title="Cash in Hand (USD)">
        <CustomInput
          name="cash_in_hand"
          control={control}
          error={errors.cash_in_hand}
          type="number"
          endAdornment="$"
        />
      </InputContainer>

      <InputContainer title="Avg. User MoM Growth Rate (Avg. of MoM Growth rate over year to date period)">
        <CustomInput
          name="user_MoM_growth_rate"
          control={control}
          error={errors.user_MoM_growth_rate}
          type="number"
          endAdornment="%"
        />
      </InputContainer>

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

export default Step3;
