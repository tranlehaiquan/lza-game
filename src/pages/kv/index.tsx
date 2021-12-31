import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import Countdown from "../../components/countdown";
import KvRules from "../../components/kvRules";
import Audio from "../../components/audio";
import { getEventConfig } from "../../apis";
import { STATUS } from "../../constants";
import { EventDate } from "../../interface";

interface Props {
  className?: string;
}
const Kv: React.FC<Props> = (props) => {
  const [status, setStatus] = useState(STATUS.idle);
  const [eventDate, setEventDate] = useState<EventDate>();

  useEffect(() => {
    (async () => {
      setStatus(STATUS.pending);
      const data = await getEventConfig();
      setEventDate(data.data);
      setStatus(STATUS.resolved);
    })();
  }, []);
  console.log(status)
  return (
    <div className="pb-80">
      <img src="/lzd-logo.png" alt="logo" className="d-block absolute top-4 right-4" />
      <Container>
        <div className="text-center">
          <img
            alt="title"
            src="/kv-title.png"
            className="d-block mr-auto ml-auto max-w-2xl pt-2"
          />
          <Countdown
            className="mr-auto ml-auto justify-center"
            endDate={eventDate ? eventDate.startTime : new Date().toString()}
          />
          <KvRules />
        </div>
      </Container>

      <Audio
        src="SOUND/KV chờ/videogameloop_29s_145bpm_LOOP.wav"
        className="fixed bottom-5 right-5"
      />
    </div>
  );
};

export default Kv;
