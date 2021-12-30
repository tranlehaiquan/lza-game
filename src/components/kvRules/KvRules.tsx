import React from "react";

interface Props {
  className?: string;
}

const KvRules: React.FC<Props> = (props) => {
  return (
    <div>
      <img src="/gifts.png" className="d-block mr-auto ml-auto max-w-full" />
    </div>
  );
};

export default KvRules;
