import { createContext } from 'react';
import favIcon from '../assets/favor-icon.svg'
import coverExample from '../assets/playing-cover-example.jpg'
import channelCover from "../assets/podcast-channel-cover.jpg";

const castCatrgoryItems = [
  { id: 1, name: "通勤清單", icon: "🚌" },
  { id: 2, name: "學習清單", icon: "📚" },
  { id: 3, name: "睡前清單", icon: "💤" },
  { id: 4, name: "我的Podcast", icon: "🏘️" },
  { id: 5, name: "已收藏", icon: "❤️" },
];

const podcastList = [
  {
    id: 1,
    cover: coverExample,
    title:
      "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
    icon: favIcon,
    introduction:
      "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discove",
    uploadDate: "2023-04-08",
    duration: "1 小時 20 分",
  },
  {
    id: 2,
    cover: coverExample,
    title:
      "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
    icon: favIcon,
    introduction:
      "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discove",
    uploadDate: "2023-04-08",
    duration: "1 小時 20 分",
  },
];

const podcastCards = [
  {
    id: 1,
    cover: channelCover,
    title: "Siddhartha",
    author: "BBC World Service",
  },
  {
    id: 2,
    cover: channelCover,
    title:"Siddhartha",
    author: "BBC World Service",
  },
  {
    id: 3,
    cover: channelCover,
    title:"Siddhartha",
    author: "BBC World Service",
  },
  {
    id: 4,
    cover: channelCover,
    title: "Siddhartha",
    author: "BBC World Service",
  },
  {
    id: 5,
    cover: channelCover,
    title: "Siddhartha",
    author: "BBC World Service",
  },
];

export const NavCastCatrgoryListContext = createContext(castCatrgoryItems)
export const PodCastListContext = createContext(podcastList)
export const PodCastCardsContext = createContext(podcastCards)