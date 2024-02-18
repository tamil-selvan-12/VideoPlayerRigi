import React,{ useState } from 'react';
import styled from './App.module.scss';
import { PlayList } from './components/Playlist/Playlist.tsx';
import {VideoPlayer} from './components/VideoPlayer/VideoPlayer.tsx';
import mediaInfo from './mediaData.json';
import {mediaDataType} from './CommonInterface.ts'

export function App() {
  const [media,setMedia] = useState<mediaDataType[]>(mediaInfo.categories[0].videos);
  const [activeMedia,setActiveMedia] = useState<mediaDataType>(mediaInfo.categories[0].videos[0])
  return (
    <div className={styled["App"]}>
      <div className={styled["header"]}>
        Video Player
      </div>
      <div className={styled['main-Container']}>
        <div className={styled['videoPlayer-Container']}>
          <VideoPlayer mediaData={activeMedia}/>
        </div>
        <div className={styled['playList-Container']}>
          <PlayList mediaData={media} setMediaData = {setMedia} setActiveMedia = {setActiveMedia}/>
        </div>
      </div>
    </div>
  );
}

