import React, { useContext, useMemo, useState } from "react";
import Container from "../../components/container";
import Audio from "../../components/audio";
import Button from "../../components/button";
import { TextInputFormik } from "../../components/TextInput";
import * as yup from "yup";
import { Formik } from "formik";
import shopRegister from "../../services/shopRegister";
import { useNavigate } from "react-router-dom";
import { RulesModal } from "../../components/modal";
import { globalLoadingContext } from "../../components/globalLoading/GlobalLoading";
import { setAuth } from "../../services/axios";
import { useDispatch } from "react-redux";
import {
  setAuthenticated,
  turnOnSound,
} from "../../store/settingSlice/settingSlice";
import { toast } from "react-toastify";

interface Props {
  className?: string;
}
const Kv: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { showLoading, hideLoading } = useContext(globalLoadingContext);
  let navigate = useNavigate();
  const schema = useMemo(() => {
    return yup.object().shape({
      storeName: yup.string().required("Tên gian hàng là bắt buộc!"),
      storeCode: yup.string().required("Mã gian hàng là bắt buộc!"),
      fullName: yup.string().required("Họ tên bắt buộc!"),
      email: yup
        .string()
        .email("Email không hợp lệ")
        .required("Email là bắt buộc!"),
      phoneNumber: yup.string().required("Số điện thoại là bắt buộc!"),
      address: yup.string().required("Địa chỉ là bắt buộc"),
    });
  }, []);

  const handlePlay = () => {
    navigate("/codes");

    dispatch(turnOnSound());
  };

  return (
    <div className="app">
      <img
        src="/lzd-logo.png"
        alt="logo"
        className="d-block absolute top-10 lg:top-4 right-1/2 lg:right-4 translate-x-1/2 lg:translate-x-0"
        style={{ maxWidth: 250 }}
      />

      <Container>
        <div className="lg:pt-0 pt-24">
          <img
            alt="title"
            src="/kv-title.png"
            className="d-block mr-auto ml-auto max-w-full xl:max-w-2xl pt-2"
          />

          <div className="max-w-lg mr-auto ml-auto mt-4">
            <Formik
              initialValues={{
                storeName: "",
                storeCode: "",
                fullName: "",
                email: "",
                phoneNumber: "",
                address: "",
              }}
              validationSchema={schema}
              onSubmit={async (values) => {
                showLoading();
                const dataRs = await shopRegister(values);
                const { data } = dataRs;
                if (data.success) {
                  dispatch(setAuthenticated());
                  setAuth(data.data);
                  setShow(true);
                }

                if (!data.success) {
                  toast.error(data.message);
                  navigate("/");
                }
                hideLoading();
              }}
            >
              {({ handleSubmit }) => (
                <>
                  <h1 className="text-xl md:text-2xl lg:text-3xl mb-2 text-center uppercase text-white font-bold">
                    Thông Tin <br /> Nhà bán Hàng Cần Cung Cấp
                  </h1>
                  <label className="block mb-6">
                    <TextInputFormik
                      label={"Tên gian hàng"}
                      type="text"
                      name="storeName"
                      placeholder={"Tên gian hàng"}
                      required
                    />
                  </label>
                  <label className="block mb-6">
                    <TextInputFormik
                      label={"Mã gian hàng (cần nhập chính xác để nhận thưởng)"}
                      type="text"
                      name="storeCode"
                      placeholder={"Mã gian hàng"}
                      required
                    />
                  </label>
                  <label className="block mb-6">
                    <TextInputFormik
                      label={"Họ tên"}
                      type="text"
                      name="fullName"
                      placeholder={"Họ tên"}
                      required
                    />
                  </label>
                  <label className="block mb-6">
                    <TextInputFormik
                      label={"Địa chỉ"}
                      type="text"
                      name="address"
                      placeholder={"Địa chỉ"}
                      required
                    />
                  </label>
                  <label className="block mb-6">
                    <TextInputFormik
                      label={"Số điện thoại"}
                      type="text"
                      name="phoneNumber"
                      placeholder={"Số điện thoại"}
                      required
                    />
                  </label>
                  <label className="block mb-6">
                    <TextInputFormik
                      label={"Email"}
                      type="text"
                      name="email"
                      placeholder={"Email"}
                      required
                    />
                  </label>

                  <div className="text-center">
                    <Button
                      className="px-5 py-2 rounded-lg mt-2"
                      onClick={() => handleSubmit()}
                    >
                      Đăng ký
                    </Button>
                  </div>
                </>
              )}
            </Formik>
          </div>
        </div>
      </Container>

      <div className="lg:block hidden w-full">
        <img src="/check-points.png" className="mt-2" alt="points" />
      </div>

      <img
        src="/points-mobile.png"
        className="block lg:hidden mt-2"
        alt="points"
      />

      {show && <RulesModal onPlay={handlePlay} />}

      <Audio
        src="SOUND/KV chờ/videogameloop_29s_145bpm_LOOP.wav"
        className="fixed bottom-5 right-5"
      />
    </div>
  );
};

export default Kv;
