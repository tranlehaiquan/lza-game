import React from "react";

interface Props {
  className?: string;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className="max-w-7xl lg:max-w-4xl md:max-w-3xl mr-auto ml-auto">{children}</div>;
};

export default Container;
