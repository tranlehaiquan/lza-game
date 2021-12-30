import React, { useEffect, useRef, useState } from "react";
import { VolumeUpIcon, VolumeOffIcon } from "@heroicons/react/solid";

interface Props {
  className?: string;
  src: string;
}

const Audio: React.FC<Props> = ({ className, src }) => {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef) {
      if (audioRef.current?.paused) {
        setMuted(true);
      } else {
        setMuted(!!audioRef.current?.muted);
      }
    }
  }, []);

  const toggle = () => {
    audioRef.current?.play();

    setMuted(!muted);
  };

  return (
    <div className={className}>
      <button onClick={toggle}>
        {!muted ? (
          <VolumeUpIcon className="h-7 w-7 text-white" />
        ) : (
          <VolumeOffIcon className="h-7 w-7 text-white" />
        )}
      </button>
      <audio loop muted={muted} autoPlay ref={audioRef}>
        <source
          src={src || "SOUND/KV chờ/videogameloop_29s_145bpm_LOOP.wav"}
          type="audio/wav"
        />
      </audio>
    </div>
  );
};

export default Audio;
