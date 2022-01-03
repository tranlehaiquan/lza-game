import React from "react";

interface Props {
  className?: string;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="xl:max-w-6xl lg:max-w-xl mr-auto ml-auto px-2">{children}</div>
  );
};

export default Container;
