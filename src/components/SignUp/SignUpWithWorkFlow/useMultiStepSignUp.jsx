import React, { useState, useEffect } from "react";

export const useMultiStepSignUp = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("sign_up_data");
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    localStorage.setItem("sign_up_data", JSON.stringify(formData));
  }, [formData]);

  const next = () => {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? 0 : i + 1));
  };

  const back = () => {
    setCurrentStepIndex((i) => (i <= 0 ? i : i - 1));
  };

  const goTo = (index) => {
    setCurrentStepIndex(index);
  };

  const updateData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const clearForm = () => {
    setFormData({});
    // setCurrentStepIndex(0);
    localStorage.removeItem("sign_up_data");
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
    updateData,
    formData,
    clearForm,
  };
};
