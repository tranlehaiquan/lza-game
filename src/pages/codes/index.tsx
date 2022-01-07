import React, { useEffect, useState } from "react";
import Audio from "../../components/audio";
import { STATUS } from "../../constants";
import CodesEnter from "../../components/codesEnter";

interface Props {
  className?: string;
}
const Kv: React.FC<Props> = (props) => {
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    (async () => {
      setStatus(STATUS.pending);
      setStatus(STATUS.resolved);
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

      <div className="pl-24">
        <CodesEnter className="-mt-28" />
      </div>

      <Audio
        src="SOUND/KV chờ/videogameloop_29s_145bpm_LOOP.wav"
        className="fixed bottom-5 right-5"
      />
    </div>
  );
};

export default Kv;
