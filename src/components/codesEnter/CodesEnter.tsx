import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { Fragment, useContext, useEffect, useState } from "react";
import TextInput from "../TextInput";
import { globalLoadingContext } from "../../components/globalLoading/GlobalLoading";
import submitCode from "../../services/submitCode";
import { toast } from "react-toastify";
import { noop } from "lodash";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../button";
import { getResult } from "../../services/getResult";
import ResultSuccess from "../modal/ResultSuccess";
import ResultFail from "../modal/ResultFail";

interface Props {
  className?: string;
}

const MAP_DIME = {
  width: 2500,
  height: 898,
};

const CodesEnter: React.FC<Props> = (props) => {
  const setting = useSelector((state: RootState) => state.setting);
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useContext(globalLoadingContext);
  const [activeNumber, setActiveNumber] = useState(0);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [code, setCode] = useState("");
  const [codes, setCodes] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<"success" | "fail" | "">("");

  useEffect(() => {
    if (!setting.isAuthenticated) {
      toast.info("Vui lòng đăng nhập!");
      navigate("/");
    }
  }, []);

  const handleClickCode = () => {
    setShowCodeInput(true);
  };

  const handleSubmitCode = async () => {
    const audio = new Audio("/SOUND/mở mật thư/Paper Crunch.mp3");

    if (!code) {
      toast.info("Vui Lòng Nhập Mã!");
      return;
    }

    showLoading();
    try {
      await submitCode({
        code: code,
        badgeType: activeNumber + 1,
      });
      setShowCodeInput(false);

      setActiveNumber(activeNumber + 1);
      setCodes([...codes, code]);
      setCode("");
      audio.play();

      toast.success(`Nhập Thành Công Mã Huy Hiệu ${activeNumber + 1}`);
    } catch (err) {
      toast.error("Thất bại, vui lòng thử lại sau!");
    } finally {
      hideLoading();
    }
  };

  const handleGetResult = async () => {
    showLoading();
    const { data } = await getResult();
    setShowModal(data.data ? "success" : "fail");
    hideLoading();
  };

  return (
    <div
      className="relative"
      style={{
        paddingTop: `${(MAP_DIME.height / MAP_DIME.width) * 100}%`,
        width: "100%",
      }}
    >
      <div
        className=" absolute path-wrapper top-0"
        style={{
          transform: `scale(${(window.innerWidth - 100) / MAP_DIME.width})`,
        }}
      >
        <img
          src="/path.png"
          alt="path"
          className="max-w-none"
          width={MAP_DIME.width}
          height={MAP_DIME.height}
        />
        <div>
          <img
            src="/code-1.png"
            className={clsx(
              "absolute code-item",
              activeNumber >= 0 || "code-item-disabled"
            )}
            alt="code1"
            style={{ width: 254, height: 301, bottom: 0, left: 120 }}
            onClick={activeNumber === 0 ? handleClickCode : noop}
          />
          <img
            src="/code-2.png"
            className={clsx(
              "absolute code-item",
              activeNumber >= 1 || "code-item-disabled"
            )}
            alt="code2"
            style={{ width: 260, height: 307, bottom: 150, left: 550 }}
            onClick={activeNumber === 1 ? handleClickCode : noop}
          />
          <img
            src="/code-3.png"
            className={clsx(
              "absolute code-item",
              activeNumber >= 2 || "code-item-disabled"
            )}
            alt="code3"
            style={{ width: 384, height: 305, bottom: 0, left: 850 }}
            onClick={activeNumber === 2 ? handleClickCode : noop}
          />
          <img
            src="/code-4.png"
            className={clsx(
              "absolute code-item",
              activeNumber >= 3 || "code-item-disabled"
            )}
            alt="code4"
            style={{ width: 264, height: 300, bottom: 303, left: 1163 }}
            onClick={activeNumber === 3 ? handleClickCode : noop}
          />
          <img
            src="/code-5.png"
            className={clsx(
              "absolute code-item",
              activeNumber >= 4 || "code-item-disabled"
            )}
            alt="code5"
            style={{ width: 260, height: 315, bottom: 113, left: 1622 }}
            onClick={activeNumber === 4 ? handleClickCode : noop}
          />
        </div>

        <Transition appear show={showCodeInput} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setShowCodeInput(false)}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border-NeonCarrot">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Nhập Mã Huy Hiệu {activeNumber + 1}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <TextInput
                        type="text"
                        name="storeName"
                        placeholder={"Nhập Mã Huy Hiệu"}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        onBlur={console.log}
                      />
                    </p>
                  </div>

                  <div>
                    <Button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={handleSubmitCode}
                    >
                      Xác Nhận
                    </Button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>

      {showModal === "success" && <ResultSuccess onPlay={console.log} />}
      {showModal === "fail" && <ResultFail onPlay={console.log} />}

      {codes.length === 5 && (
        <Button className="fixed right-14 bottom-3" onClick={handleGetResult}>
          Xem Kết Quả
        </Button>
      )}
    </div>
  );
};

export default CodesEnter;
