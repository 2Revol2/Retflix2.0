"use client";
import { useEffect, useState } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import axios from "axios";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  className?: string;
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const { className } = props;
  const [scriptHMTL, setScriptHTML] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fullUrl = `${pathname}?${searchParams.toString()}`;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `//js.espanplay.site/get_player?w=610&h=370&type=widget&kp_id=${id}&players=apicollaps,videocdn,hdvb,bazon,alloha,ustore,kodik,trailer&r_id=videoplayers&ani=COLLAPS&ati=&adi=&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru=` +
          fullUrl,
      )
      .then((res) => {
        setScriptHTML(res.data.match(/<iframe.*<\/iframe>/gm)[1]);
      });
  }, [fullUrl, id]);

  return (
    <div
      id="videoplayers"
      dangerouslySetInnerHTML={{ __html: scriptHMTL }}
      className={classNames(s.videoPlayer, {}, [className])}
    ></div>
  );
};
