import React, { useState } from 'react'
import ReactPlayer from "react-player";
import styled from './VideoPlayer.module.scss';
import { mediaDataType } from '../../CommonInterface';

interface VideoPlayerProps {
	mediaData : mediaDataType
};
export const VideoPlayer = ({mediaData}:VideoPlayerProps) => {
  return (
		<div className={styled['videoPlayer']}>
			<ReactPlayer url={[mediaData?.sources?.[0]]} controls
				width="100%"
				height="100%"
				playing
				muted
			/>
		</div>
  );
}


