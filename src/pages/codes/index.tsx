import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import Audio from "../../components/audio";
import { STATUS } from "../../constants";

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

  console.log(status)

  return (
    <div>
      <img
        src="/lzd-logo.png"
        alt="logo"
        className="d-block absolute top-10 lg:top-4 right-1/2 lg:right-4 translate-x-1/2 lg:translate-x-0"
        style={{ maxWidth: 250 }}
      />

      <Container>
        codes
      </Container>

      <img
        src="/points-mobile.png"
        className="block lg:hidden mt-2"
        alt="points"
      />

      <Audio
        src="SOUND/KV chờ/videogameloop_29s_145bpm_LOOP.wav"
        className="fixed bottom-5 right-5"
      />
    </div>
  );
};

export default Kv;
