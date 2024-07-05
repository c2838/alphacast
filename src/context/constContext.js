import { createContext } from 'react';

const castItems = [
  { id: 1, name: "通勤清單", icon: "🚌" },
  { id: 2, name: "學習清單", icon: "📚" },
  { id: 3, name: "睡前清單", icon: "💤" },
  { id: 4, name: "我的Podcast", icon: "🏘️" },
  { id: 5, name: "已收藏", icon: "❤️" },
];

export const NavCastListContext = createContext(castItems)