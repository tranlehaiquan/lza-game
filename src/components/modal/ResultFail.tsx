import React from "react";
import XIcon from "@heroicons/react/outline/XIcon";

interface Props {
  className?: string;
  onPlay: () => void;
}

const RulesModal: React.FC<Props> = (props) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        <div className="flex items-start justify-center min-h-screen text-center pt-2">
          <div className="relative">
            <img
              src="/KQ chua chinh xac.png"
              alt="rule"
              className="max-w-full lg:max-w-2xl modal-rules"
            />

            <button
              onClick={props.onPlay}
              className=" bg-NeonCarrot text-white p-2 rounded-full -translate-y-2/3"
            >
              <XIcon className="h-12 w-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
