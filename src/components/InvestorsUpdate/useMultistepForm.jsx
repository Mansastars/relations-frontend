import React, { useState, useEffect } from "react";

export const useMultistepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("InvestorsUpdate");
    return savedData ? JSON.parse(savedData) : {};
  });

  // useEffect(() => {
  //   if (Object.keys(formData).length === 0) {
  //     fetchDataFromBackend();
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("InvestorsUpdate", JSON.stringify(formData));
  }, [formData]);

  // const fetchDataFromBackend = async () => {
  //   try {
  //     const response = await api.get("/path/to/your/endpoint"); // Adjust the endpoint
  //     const data = response.data;

  //     // Save the fetched data to local storage and state
  //     localStorage.setItem("InvestorsUpdate", JSON.stringify(data));
  //     setFormData(data);
  //   } catch (error) {
  //     console.error("Failed to fetch data from backend:", error);
  //   }
  // };

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
    setCurrentStepIndex(0);
    localStorage.removeItem("InvestorsUpdate");
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
