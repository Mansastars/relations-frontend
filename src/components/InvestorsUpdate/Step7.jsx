import React, { useEffect } from "react";
import InputContainer from "./InputContainer";
import CustomInput from "./CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";

const schema = yup.object().shape({
  targets: yup.string(),
  founders_message: yup.string(),
});

const Step7 = ({
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
      targets: formData.targets || "",
      founders_message: formData.founders_message || "",
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
        title="Expectations in the next months"
        isHeader
        headerText="Next months targets"
        isadditionalText
        additionalText={`i.e. Launch new feature, Capital commitment of X number of VCs / Term sheets<br/><br/>
        Answer the following questions and be specific:<br/>
        &bull; How will your Revenue grow in the next few months until the end of the year in USD and why?<br/>
        &bull; What will your Users / bookings or order volumes be each of the next months?<br/>
        &bull; Are you already profitable? How will your profitability margins increase in the next months?`}
      >
        <CustomInput
          name="targets"
          control={control}
          error={errors.targets}
          autoFocus={true}
          multiline
        />
      </InputContainer>

      <InputContainer title="Founder's Message">
        <CustomInput
          name="founders_message"
          control={control}
          error={errors.founders_message}
          multiline
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

export default Step7;
