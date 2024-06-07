import React from "react";

interface PodcastDetailsProps {
  params: {
    podcastId: string;
  };
}

const PodcastDetails: React.FC<PodcastDetailsProps> = ({ params }) => {
  const { podcastId } = params;
  return <div className="text-white-1">PodcastDetails for {podcastId}</div>;
};

export default PodcastDetails;
