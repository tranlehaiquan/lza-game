import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import Countdown from "../../components/countdown";
import KvRules from "../../components/kvRules";
import Audio from "../../components/audio";
import { getEventConfig } from "../../apis";
import { STATUS } from "../../constants";
import { EventDate } from "../../interface";
import { isPast } from "date-fns";
import Button from "../../components/button";

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
  console.log(status);

  const isInEvent = eventDate ? isPast(new Date(eventDate.startTime).getTime()) : false;
  // const isInEvent = eventDate ? isPast(new Date().getTime() - 1) : false;

  return (
    <div>
      <img
        src="/lzd-logo.png"
        alt="logo"
        className="d-block absolute top-10 lg:top-4 right-1/2 lg:right-4 translate-x-1/2 lg:translate-x-0"
        style={{ maxWidth: 250 }}
      />

      <Container>
        <div className="text-center lg:pt-0 pt-24">
          <img
            alt="title"
            src="/kv-title.png"
            className="d-block mr-auto ml-auto max-w-full xl:max-w-2xl pt-2"
          />
          <img
            alt="title-2"
            src="/title-2.png"
            className="d-block mr-auto ml-auto max-w-full xl:max-w-2xl pt-2"
          />
          <Countdown
            className="mr-auto ml-auto justify-center"
            endDate={eventDate ? eventDate.startTime : new Date().toString()}
          />
          <KvRules />
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

      {isInEvent && (
        <div className="text-center pb-10 pr-5">
          <Button onClick={() => console.log("123")} className=" md:text-2xl">
            Đăng Ký
          </Button>
        </div>
      )}

      <Audio
        src="SOUND/KV chờ/videogameloop_29s_145bpm_LOOP.wav"
        className="fixed bottom-5 right-5"
      />
    </div>
  );
};

export default Kv;
