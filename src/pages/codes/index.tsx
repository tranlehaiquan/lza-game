import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import Audio from "../../components/audio";
import { STATUS } from "../../constants";
import CodesEnter from "../../components/codesEnter";

const MAP_DIME = {
  width: 2500,
  height: 898,
};
interface Props {
  className?: string;
}
const Kv: React.FC<Props> = (props) => {
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    (async () => {
      setStatus(STATUS.pending);
      setStatus(STATUS.resolved);
      console.log(window.innerWidth - 100 / MAP_DIME.width);
    })();
  }, []);

  console.log(status);

  return (
    <div className="app appSecond">
      <img
        src="/lzd-logo.png"
        alt="logo"
        className="d-block absolute top-10 lg:top-4 right-1/2 lg:right-4 translate-x-1/2 lg:translate-x-0"
        style={{ maxWidth: 250 }}
      />

      <div>
        <img src="/codes-banner.png" alt="lzd" className="max-w-full" />
      </div>

      <CodesEnter className="-mt-20" />

      <Audio
        src="SOUND/KV chờ/videogameloop_29s_145bpm_LOOP.wav"
        className="fixed bottom-5 right-5"
      />
    </div>
  );
};

export default Kv;
