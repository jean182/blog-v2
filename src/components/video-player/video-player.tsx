import * as React from "react";
import { IVideoPlayerProps } from "./video-player.interfaces";
import { StyledVideoPlayerContainer } from "./video-player.styled";

const defaultTitle = "YouTube video player";

export default function VideoPlayer({
  embedId,
  provider,
  title = defaultTitle,
}: IVideoPlayerProps) {
  const url = React.useMemo(() => {
    switch (provider) {
      case "youtube":
        return `https://www.youtube.com/embed/${embedId}`;
      // TODO: Add more providers
      default:
        return "";
    }
  }, [provider]);
  return (
    <StyledVideoPlayerContainer>
      <iframe
        width="560"
        height="315"
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </StyledVideoPlayerContainer>
  );
}
