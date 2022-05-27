import React from "react";

interface PropsHeading {
  children: React.ReactNode;
}
const Heading = ({ children }: PropsHeading) => {
  return (
    <h1 className="text-5xl font-extrabold text-light text-center">
      {children}
    </h1>
  );
};

export default Heading;
