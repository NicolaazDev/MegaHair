"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type FormContextType = {
  isRegister: boolean;
  toggleForm: () => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <FormContext.Provider value={{ isRegister, toggleForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
