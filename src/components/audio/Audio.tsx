import React, { useEffect, useRef } from "react";
import { VolumeUpIcon, VolumeOffIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  turnOffSound,
  turnOnSound,
} from "../../store/settingSlice/settingSlice";

interface Props {
  className?: string;
  src: string;
}

const Audio: React.FC<Props> = ({ className, src }) => {
  const { isMuted } = useSelector((state: RootState) => state.setting);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef) {
      if (audioRef.current?.paused) {
      } else {
        dispatch(turnOffSound());
      }
    }
  }, []);

  const toggle = () => {
    audioRef.current?.play();
    if (isMuted) {
      dispatch(turnOnSound());
    } else {
      dispatch(turnOffSound());
    }
  };

  return (
    <div className={className}>
      <button onClick={toggle}>
        {!isMuted ? (
          <VolumeUpIcon className="h-7 w-7 text-white" />
        ) : (
          <VolumeOffIcon className="h-7 w-7 text-white" />
        )}
      </button>
      <audio loop muted={isMuted} autoPlay ref={audioRef}>
        <source
          src={src || "SOUND/KV chờ/videogameloop_29s_145bpm_LOOP.wav"}
          type="audio/wav"
        />
      </audio>
    </div>
  );
};

export default Audio;
