import React from "react";
import { addDays, getISODay } from "date-fns";
import Container from "../../components/container";
import Countdown from "../../components/countdown";
import KvRules from "../../components/kvRules";
import Audio from "../../components/audio";

interface Props {
  className?: string;
}

// follow the getISODay format (7 for Sunday, 1 for Monday)
const dayOfWeekMap = {
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thur: 4,
  Fri: 5,
  Sat: 6,
  Sun: 7,
};

const getDayOfLastWeek = (
  dayOfWeek: keyof typeof dayOfWeekMap,
  fromDate = new Date()
) => {
  const dateFrom = getISODay(fromDate);
  const dateFind = dayOfWeekMap[dayOfWeek];
  let offsetDays = 0;

  if (dateFrom === dateFind) return fromDate;
  if (dateFrom > dateFind) {
    offsetDays = Object.keys(dayOfWeekMap).length - dateFrom + dateFind;
  }
  if (dateFrom < dateFind) {
    offsetDays = dateFind - dateFrom;
  }

  return addDays(fromDate, offsetDays);
};

const Kv: React.FC<Props> = (props) => {
  const nextMonday = getDayOfLastWeek("Mon");

  return (
    <div>
      <Container>
        <div className="text-center">
          <img
            src="/kv-title.png"
            className="d-block mr-auto ml-auto max-w-full"
          />
          <Countdown
            className="max-w-2xl mr-auto ml-auto"
            endDate={nextMonday.toISOString()}
          />
          <KvRules />
        </div>
      </Container>

      <Audio src="SOUND/KV chờ/videogameloop_29s_145bpm_LOOP.wav" className="fixed bottom-5 right-5" />

      <img src="/check-points.png" className="d-block lg:w-9/12 w-4/5" />
    </div>
  );
};

export default Kv;
