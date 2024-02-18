export type mediaDataType = {
    description: string;
    sources: string[];
    subtitle: string;
    thumb: string;
    title: string;
  }

export interface PlaylistProps {
    mediaData: mediaDataType[];
    setMediaData: React.Dispatch<React.SetStateAction<mediaDataType[]>>;
    setActiveMedia: React.Dispatch<React.SetStateAction<mediaDataType>>
}