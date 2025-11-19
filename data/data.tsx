import Placeholder from "@/assets/image/placeholder.png";
import Surf2Sawa from "@/assets/image/Surf2Sawa.png";
import Chatbot from "@/assets/image/Chatbot.jpg";
import Travel from "@/assets/image/Travel.png";
import MMO from "@/assets/image/MMO.png";
import Surf2Sawa1 from "@/assets/image/Surf2Sawa/Surf2Sawa1.png";
import Surf2Sawa2 from "@/assets/image/Surf2Sawa/Surf2Sawa2.png";
import Surf2Sawa3 from "@/assets/image/Surf2Sawa/Surf2Sawa3.png";
import Surf2Sawa4 from "@/assets/image/Surf2Sawa/Surf2Sawa4.png";
import Chatbot1 from "@/assets/image/Chatbot/Chatbot1.png";
import Travel1 from "@/assets/image/Travel/Travel1.png";
import Travel2 from "@/assets/image/Travel/Travel2.png";
import MMO1 from "@/assets/image/MMO/MMO1.png";
import MMO2 from "@/assets/image/MMO/MMO2.png";
const SwiperData = [
  {
    id: 1,
    title: "Surf2Sawa",
    image: Surf2Sawa,
    description: "Public Website of S2S",
    link: "/Surf2Sawa",
  },
  {
    id: 2,
    title: "S2S Chatbot",
    image: Chatbot,
    description: "Chatbot for Prepaid users",
    link: "/Chatbot",
  },
  {
    id: 3,
    title: "Travel Guide",
    image: Travel,
    description: "Travel Guide with Google Maps",
    link: "/travel-guide",
  },
  {
    id: 4,
    title: "MMO Daily",
    image: MMO,
    description: "Website Design 4",
    link: "/mmo-daily",
  },
];

const ProjectData = [
  {
    id: 1,
    title: "Surf2Sawa",
    slug: "Surf2Sawa",
    images: [Surf2Sawa1, Surf2Sawa2, Surf2Sawa3, Surf2Sawa4],
    description: "Website for Surf2Sawa created with Vue and SCSS.",
    link: "https://surf2sawa.com/?source=surf2sawa",
  },
  {
    id: 2,
    title: "S2S Chatbot",
    slug: "Chatbot",
    images: [Chatbot1],
    description:
      "Chatbot for Surf2Sawa Subscribers created with Websocket and Tailwind.",
    link: "https://chat.s2s.ph/",
  },
  {
    id: 3,
    title: "Travel Guide",
    slug: "travel-guide",
    images: [Travel1, Travel2],
    description:
      "A Travel Guide which allows user to view tourist attractions in their intended destination. Built with Google Maps API, Travel Advisor API, and React.",
    link: "https://travel-guide-hcoa.vercel.app/",
  },
  {
    id: 4,
    title: "MMO Daily",
    slug: "mmo-daily",
    images: [MMO1, MMO2],
    description:
      "A Website created with the MMO Bomb API and inspired by Steam interface.",
    link: "https://mmo-daily.vercel.app/",
  },
];

export { SwiperData, ProjectData };
