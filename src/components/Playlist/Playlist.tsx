import React, { useState } from "react";
import styled from "./Playlist.module.scss";
import { PlaylistProps, mediaDataType } from "../../CommonInterface";

export const PlayList = ({ mediaData,setActiveMedia, setMediaData }: PlaylistProps) => {

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drag = (event,index, value:mediaDataType) => {
    event.dataTransfer.setData("text", JSON.stringify({position: index, value: value}));
  };

  const drop = (event,index) => {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData("text"));
    const removeExisting = mediaData?.filter((value) => (value?.title!== data?.value?.title));
    const changedOrder = [...removeExisting.slice(0,index),
        data?.value, ...removeExisting?.slice(index)
    ]
    setMediaData(changedOrder);
  };
  return (
    <div className={styled["playlist-Container"]}>
      {mediaData.map((data:mediaDataType,index) => (
        <div key = {data?.title} onClick={()=> {setActiveMedia(data)}} className={styled["playlist"]}
          draggable onDrop={(e)=> drop(e,index)} onDragStart={(e) => drag(e,index, data)} onDragOver={allowDrop}
        >
          <div className={styled["video-img"]}>
            <img className={styled["thumbnail-img"]} src={data?.thumb}/>
          </div>
          <div className={styled["video-info"]}>
            <div className={styled["video-title"]}>{data?.title}</div>
            <div className={styled["video-description"]}>{data?.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
