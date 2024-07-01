import React from "react";

type FormLayoutProps = { children: React.ReactNode };

const FormLayout = ({ children }: FormLayoutProps) => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-no-repeat bg-[#F5F5F5] bg-center bg-opacity-75"
      style={{
        backgroundImage: 'url("/images/pattern.svg")',
      }}
    >
      {children}
    </div>
  );
};

export default FormLayout;
