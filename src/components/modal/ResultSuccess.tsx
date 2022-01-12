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
              src="/KQ mo khoa thanh cong.png"
              alt="rule"
              className="max-w-full lg:max-w-2xl modal-rules"
            />

            <button
              onClick={props.onPlay}
              className=" bg-NeonCarrot text-white p-2 rounded-full absolute top-0 right-0"
            >
              <XIcon className="h-12 w-12" />
            </button>

            <a
              href="https://university.lazada.vn/cms/nynm"
              className="bg-NeonCarrot inline-block text-white p-3 -translate-y-10 rounded-lg font-bold shadow-md uppercase"
            >
              Xem Chi Tiết
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
