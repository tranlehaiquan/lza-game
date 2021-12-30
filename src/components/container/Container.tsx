import React from "react";

interface Props {
  className?: string;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className="xl:max-w-5xl lg:max-w-xl mr-auto ml-auto">{children}</div>;
};

export default Container;
