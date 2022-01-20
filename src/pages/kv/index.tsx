import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import Countdown from "../../components/countdown";
import KvRules from "../../components/kvRules";
import Audio from "../../components/audio";
import { getEventConfig } from "../../services/getConfig";
import { STATUS } from "../../constants";
import { EventDate } from "../../interface";
import { isPast } from "date-fns";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
}
const Kv: React.FC<Props> = (props) => {
  const [status, setStatus] = useState(STATUS.idle);
  const [eventDate, setEventDate] = useState<EventDate>();
  let navigate = useNavigate();

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

  const handleRegister = () => {
    navigate("/register");
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

          {isInEvent && (
            <div className="text-center pr-5 mt-4">
              <Button onClick={handleRegister} className=" md:text-2xl">
                Đăng Ký
              </Button>
            </div>
          )}
        </div>
      </Container>

      <div className="lg:block hidden w-full">
        <img src="/Countdown-OK (1).gif" className="mt-2" alt="points" />
      </div>

      <img
        src="/Countdown-mobile-OK.gif"
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
