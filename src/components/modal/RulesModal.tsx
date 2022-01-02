import React from "react";
import PlayIcon from "@heroicons/react/outline/PlayIcon";

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
              src="/rules-modal.png"
              alt="rule"
              className="max-w-full lg:max-w-2xl modal-rules"
            />

            <button
              onClick={props.onPlay}
              className=" bg-NeonCarrot text-white p-2 rounded-xl -translate-y-1/2"
            >
              <PlayIcon className="h-12 w-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
