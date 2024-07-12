import { createContext } from 'react';
import favIcon from '../assets/favor-icon.svg'
import coverExample from '../assets/playing-cover-example.jpg'
import channelCover from "../assets/podcast-channel-cover.jpg";
import loginImg_1 from "../assets/loginImg_1.png";
import loginImg_2 from "../assets/loginImg_2.png";
import loginImg_3 from "../assets/loginImg_3.png";

const castCatrgoryItems = [
  { id: 1, name: "通勤清單", icon: "🚌" },
  { id: 2, name: "學習清單", icon: "📚" },
  { id: 3, name: "睡前清單", icon: "💤" },
  { id: 4, name: "我的Podcast", icon: "🏘️" },
  { id: 5, name: "已收藏", icon: "❤️" },
];

const loginInfos = [
  {
    id: 1,
    img: loginImg_1,
    title: "鼓舞人心的故事",
    subTitle: "從非凡的人生故事和成功經歷中獲得靈感",
  },
  {
    id: 2,
    img: loginImg_2,
    title: "輕鬆分類與管理",
    subTitle: "一目了然的分類，讓收藏的 Podcast 保持整潔",
  },
  {
    id: 3,
    img: loginImg_3,
    title: "Spotify 快速同步",
    subTitle: "透過 Spotify 登入，即刻同步您的收藏，隨時隨地收聽",
  },
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
    introduction:
      "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
  },
  {
    id: 2,
    cover: channelCover,
    title: "Siddhartha",
    author: "BBC World Service",
    introduction:
      "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
  },
  {
    id: 3,
    cover: channelCover,
    title: "Siddhartha",
    author: "BBC World Service",
    introduction:
      "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
  },
  {
    id: 4,
    cover: channelCover,
    title: "Siddhartha",
    author: "BBC World Service",
    introduction:
      "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
  },
  {
    id: 5,
    cover: channelCover,
    title: "Siddhartha",
    author: "BBC World Service",
    introduction:
      "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
  },
];

export const NavCastCategoryListContext = createContext(castCatrgoryItems)
export const LoginInfosContext = createContext(loginInfos)
export const PodCastListContext = createContext(podcastList)
export const PodCastCardsContext = createContext(podcastCards)