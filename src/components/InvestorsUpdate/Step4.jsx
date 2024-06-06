import React, { useEffect } from "react";
import InputContainer from "./InputContainer";
import CustomInput from "./CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";

const schema = yup.object().shape({
  news: yup.string().required("News is required"),
});

const Step4 = ({
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
    defaultValues: { news: formData.news || "" },
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
        title="What's new?"
        isHeader
        headerText="News"
        isadditionalText
        additionalText="i.e. New partnerships, Advanced talks, new hire, new lead..."
      >
        <CustomInput
          name="news"
          control={control}
          error={errors.news}
          autoFocus={true}
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

export default Step4;
