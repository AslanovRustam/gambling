import { lazy } from "react";

import { ICase, IItem, INavMenu } from "@/types";

import okFun1 from "../../public/cases/okfun/1.png";
import okFun2 from "../../public/cases/okfun/2.png";
import okFun3 from "../../public/cases/okfun/3.png";
import okFun4 from "../../public/cases/okfun/4.png";
import okFun5 from "../../public/cases/okfun/5.png";
import okFun6 from "../../public/cases/okfun/6.png";
import okFun7 from "../../public/cases/okfun/7.png";
import okFun8 from "../../public/cases/okfun/8.png";
import okFun9 from "../../public/cases/okfun/9.png";
import okFun10 from "../../public/cases/okfun/10.png";
import okFun11 from "../../public/cases/okfun/11.png";
import okFun12 from "../../public/cases/okfun/12.png";
import okFun13 from "../../public/cases/okfun/13.png";
// import bobr1 from "../../public/cases/bobr/1.png";
// import bobr2 from "../../public/cases/bobr/2.png";
// import bobr3 from "../../public/cases/bobr/3.png";
import cashimo1 from "../../public/cases/cashimo/1.png";
import cashimo2 from "../../public/cases/cashimo/2.png";
import cashimo3 from "../../public/cases/cashimo/3.png";
import cashimo4 from "../../public/cases/cashimo/4.png";
import cashimo5 from "../../public/cases/cashimo/5.png";
import cashimo6 from "../../public/cases/cashimo/6.png";
import casinoElite1 from "../../public/cases/casinoElite/1.png";
import casinoElite2 from "../../public/cases/casinoElite/2.png";
import casinoElite3 from "../../public/cases/casinoElite/3.png";
import casinoElite4 from "../../public/cases/casinoElite/4.png";
import casinoElite5 from "../../public/cases/casinoElite/5.png";
import casinoElite6 from "../../public/cases/casinoElite/6.png";
import fruits1 from "../../public/cases/fruits/1.png";
import fruits2 from "../../public/cases/fruits/2.png";
import fruits3 from "../../public/cases/fruits/3.png";
import fruits4 from "../../public/cases/fruits/4.png";
import fruits5 from "../../public/cases/fruits/5.png";
import goldMines1 from "../../public/cases/goldMines/1.png";
import goldMines2 from "../../public/cases/goldMines/2.png";
import goldMines3 from "../../public/cases/goldMines/3.png";
import goldMines4 from "../../public/cases/goldMines/4.png";
import goldMines5 from "../../public/cases/goldMines/5.png";
import goldMines6 from "../../public/cases/goldMines/6.png";
import nvcasino1 from "../../public/cases/nvcasino/1.png";
import nvcasino2 from "../../public/cases/nvcasino/2.png";
import nvcasino3 from "../../public/cases/nvcasino/3.png";
import nvcasino4 from "../../public/cases/nvcasino/4.png";
import nvcasino5 from "../../public/cases/nvcasino/5.png";
import playfina1 from "../../public/cases/playfina/1.png";
import playfina2 from "../../public/cases/playfina/2.png";
import playfina3 from "../../public/cases/playfina/3.png";
import playfina4 from "../../public/cases/playfina/4.png";
import r2d1 from "../../public/cases/r2d/1.png";
import r2d2 from "../../public/cases/r2d/2.png";
import r2d3 from "../../public/cases/r2d/3.png";
import r2d4 from "../../public/cases/r2d/4.png";
import slotomen1 from "../../public/cases/slotomen/1.png";
import slotomen2 from "../../public/cases/slotomen/2.png";
import slotomen3 from "../../public/cases/slotomen/3.png";
import slotomen4 from "../../public/cases/slotomen/4.png";
import slotomen5 from "../../public/cases/slotomen/5.png";
import slotomen6 from "../../public/cases/slotomen/6.png";
import slotomen7 from "../../public/cases/slotomen/7.png";
// import spinline1 from "../../public/cases/spinline/1.png";
// import spinline2 from "../../public/cases/spinline/2.png";
// import spinline3 from "../../public/cases/spinline/3.png";
// import spinline4 from "../../public/cases/spinline/4.png";
// import spinline5 from "../../public/cases/spinline/5.png";
// import spinline6 from "../../public/cases/spinline/6.png";
// import spinline7 from "../../public/cases/spinline/7.png";
// import spinline8 from "../../public/cases/spinline/8.png";

export const ICONS = {
  casinochan: lazy(
    async () => import("../../public/icons/clients/casinochan.svg")
  ),
  ggpoker: lazy(async () => import("../../public/icons/clients/GGpoker.svg")),
  cashimo: lazy(async () => import("../../public/icons/clients/cashimo.svg")),
  fairspin: lazy(async () => import("../../public/icons/clients/fs.svg")),
  joker: lazy(async () => import("../../public/icons/clients/joker.svg")),
  kaizen: lazy(async () => import("../../public/icons/clients/kaizen.svg")),
  m88: lazy(async () => import("../../public/icons/clients/m88.svg")),
  megapartners: lazy(
    async () => import("../../public/icons/clients/megapartners.svg")
  ),
  ncasino: lazy(async () => import("../../public/icons/clients/ncasino.svg")),
  okfun: lazy(async () => import("../../public/icons/clients/okfun.svg")),
  pokerdom: lazy(async () => import("../../public/icons/clients/pd.svg")),
  playfina: lazy(async () => import("../../public/icons/clients/playfina.svg")),
  sports: lazy(async () => import("../../public/icons/clients/sports.svg")),
  twin: lazy(async () => import("../../public/icons/clients/twin.svg")),
  weiss: lazy(async () => import("../../public/icons/clients/weis.svg")),
} as const;

export const NAVIGATION_MENU: INavMenu[] = [
  { id: "company", name: "Company" },
  { id: "services", name: "Services" },
  { id: "work", name: "Our Work" },
  { id: "reviews", name: "Reviews" },
];

export const SERVICES: IItem[] = [
  {
    id: "01",
    name: "Creative Production",
    text: "Graphics, motion design, UI/UX, complete visual identity",
  },
  {
    id: "02",
    name: "Custom Teams",
    text: "Dedicated squads tailored to your needs with art direction, PM, tech oversight",
  },
  {
    id: "03",
    name: "Flexible Delivery",
    text: "Pay only for the actual hours used - no idle hires, no wasted budget",
  },
  {
    id: "04",
    name: "Game Assets",
    text: "We design & animate slots and in-game visuals from scratch",
  },
  {
    id: "05",
    name: "AI-Enhanced Workflow",
    text: "Faster delivery, better quality - same time, more brilliant results",
  },
  {
    id: "06",
    name: "NDA & White Label Ready",
    text: "Confidentiality and seamless integration, as an option",
  },
];

export const WORKS: IItem[] = [
  {
    id: "01",
    name: "Deep Dive",
    text: "We analyze your existing materials and propose improvements — starting with your brandbook.",
  },
  {
    id: "02",
    name: "Estimation & Planning",
    text: "Clear ETA, honest consultation, and precise scope.",
  },
  {
    id: "03",
    name: "Step-by-Step Delivery",
    text: "You stay in the loop, and every phase is aligned with your goals.",
  },
  {
    id: "04",
    name: "Team Setup & Optimization",
    text: "We train and tune our team to fit your workflows.",
  },
];

export const CASES: ICase[] = [
  {
    id: "1",
    name: "OkFun – Full Branding & Mascot Development",
    text: "For OkFun, we delivered a full-scale branding package from scratch, crafting a playful and energetic brand identity. Our team developed a unique leopard mascot with multiple outfits, moods, and accessories, bringing versatility and life to the character. We also designed a wide range of merchandise including mugs, bottles, caps, t-shirts, and badges, all reflecting the vibrant spirit of the brand. Additionally, we created an extensive set of sports-themed banners for digital campaigns. To enhance the casino side of the brand, we designed AI-generated human mascots — a man and a woman — tailored specifically for gambling and betting audiences. This project blended creativity, AI technology, and marketing needs into a cohesive, eye-catching universe for OkFun.",
    images: [
      okFun1,
      okFun2,
      okFun3,
      okFun4,
      okFun5,
      okFun6,
      okFun7,
      okFun8,
      okFun9,
      okFun10,
      okFun11,
      okFun12,
      okFun13,
    ],
  },
  // {
  //   id: "2",
  //   name: "Bobr Casino",
  //   text: "For OkFun, we delivered a full-scale branding package from scratch, crafting a playful and energetic brand identity. Our team developed a unique leopard mascot with multiple outfits, moods, and accessories, bringing versatility and life to the character. We also designed a wide range of merchandise including mugs, bottles, caps, t-shirts, and badges, all reflecting the vibrant spirit of the brand. Additionally, we created an extensive set of sports-themed banners for digital campaigns. To enhance the casino side of the brand, we designed AI-generated human mascots — a man and a woman — tailored specifically for gambling and betting audiences. This project blended creativity, AI technology, and marketing needs into a cohesive, eye-catching universe for OkFun.",
  //   images: [bobr1, bobr2, bobr3],
  // },
  {
    id: "3",
    name: "Cashimo – Full-Scale Branding, Characters & Digital Production",
    text: "For Cashimo, we delivered a full creative production—from brand concept to digital ecosystem. We created 30+ unique characters, designed smooth UI/UX, developed a dynamic landing page, 100+ promo banners, and merchandise. Custom icons and interactive elements built a rich, consistent visual world.",
    images: [cashimo1, cashimo2, cashimo3, cashimo4, cashimo5, cashimo6],
  },
  {
    id: "4",
    name: "Casino Elite – Website, Mascots & Marketing Materials",
    text: "For Casino Elite, we crafted a premium digital experience with a sophisticated website and supporting graphics. AI-generated elegant mascots, high-impact banners, email templates, and an interactive advent calendar boosted engagement. Outdoor and digital ads ensured a consistent, luxurious brand presence.",
    images: [
      casinoElite1,
      casinoElite2,
      casinoElite3,
      casinoElite4,
      casinoElite5,
      casinoElite6,
    ],
  },
  {
    id: "5",
    name: "Slot Fruits – Slot Game, Graphics & Animatio",
    text: "For Slot Fruits, we created a fully immersive slot game from concept to final production. Our team designed custom graphics, symbols, backgrounds, and smooth, engaging animations for spins, bonuses, and special effects. We integrated all assets into the client’s UI framework, delivering a vibrant game blending creativity and seamless functionality.",
    images: [fruits1, fruits2, fruits3, fruits4, fruits5],
  },
  {
    id: "6",
    name: "Slot Wild Gold Mine – Slot Game Concept, Graphics & Animation",
    text: "We crafted a complete Wild West gold rush slot game with AI-generated visuals. Our team created detailed symbols, characters, and backgrounds, plus dynamic animations for reels, bonuses, and wins. Every element immerses players in the adventurous world of gold mining and Western legends.",
    images: [
      goldMines1,
      goldMines2,
      goldMines3,
      goldMines4,
      goldMines5,
      goldMines6,
    ],
  },
  {
    id: "7",
    name: "NV Casino - Landings & Visuals Production",
    text: "For NV Casino, we created a full digital journey: a modern website, conversion-focused landing pages, and interactive designs with smooth animations. Using AI, we developed unique characters and visuals. Bold promotional banners complete a vibrant digital ecosystem boosting NV Casino’s online presence.",
    images: [nvcasino1, nvcasino2, nvcasino3, nvcasino4, nvcasino5],
  },
  {
    id: "8",
    name: "Playfina – Website Development, UI Enhancement & AI-Driven Graphics",
    text: "For Playfina, we delivered a full website package—design and development of core elements. We created custom graphics and animated the hero slider for impact, improved UI with polished modals and interactions, and crafted AI-generated icons and slot previews, building a modern, cohesive platform.",
    images: [playfina1, playfina2, playfina3, playfina4],
  },
  {
    id: "9",
    name: "R2D – Web, Mobile & Creative Graphics Development",
    text: "We delivered a full digital package for R2D, designing and developing the main website and optimized mobile version. We created playful branded stickers, a high-impact landing page, and custom UI elements. The project blends bold visuals with smooth functionality, boosting R2D’s presence in the digital space.",
    images: [r2d1, r2d2, r2d3, r2d4],
  },
  {
    id: "10",
    name: "Slotomen – Gamification, Bonus Games & Visual Assets",
    text: "We developed engaging gamification features and visuals, including a fully animated fortune wheel and bonus games to boost retention. Unique characters, in-game icons, progression levels, achievements, and branded stickers create a vibrant, immersive experience with dynamic visuals and interactive mechanics.",
    images: [
      slotomen1,
      slotomen2,
      slotomen3,
      slotomen4,
      slotomen5,
      slotomen6,
      slotomen7,
    ],
  },
  // {
  //   id: "11",
  //   name: "Spinline – Mascot Creation & Promotional Assets",
  //   text: "We developed an iconic superhero squirrel mascot with AI-generated visuals in various poses and outfits. This versatile character drives Spinline’s storytelling across banners, website, bonuses, and promos. We also created quest mechanics using the mascot, crafting a fun, dynamic, and memorable brand identity.",
  //   images: [
  //     spinline1,
  //     spinline2,
  //     spinline3,
  //     spinline4,
  //     spinline5,
  //     spinline6,
  //     spinline7,
  //     spinline8,
  //   ],
  // },
];
export const TESTIMONIALS: IItem[] = [
  {
    id: "1",
    url: "https://clutch.co/profile/clickable-agency#reviews",
    name: "Pierre Decourt",
    company: "Marketing, Casino Elite",
    text: "Clickable Agency has successfully delivered high-quality designs that align perfectly with the client's business needs. The team meets all deadlines and is open to the client's comments and revisions. Moreover, their ability to balance efficiency with fun is highly sought after.",
  },
  {
    id: "2",
    url: "https://clutch.co/profile/clickable-agency#review-22438",
    name: "Kassymzhan",
    company: "CMO, Adal Oiyn (Tennisi.kz)",
    text: "Clickable Agency's high-quality and exquisite advertising solutions helped the company obtain new customers. The team fostered synergy, ensuring a collaborative, effective, and productive partnership. Their professionalism, assistance, and reasonable fee were the highlights of the engagement.",
  },
  {
    id: "3",
    url: "https://clutch.co/profile/clickable-agency#review-74308",
    name: "Alex Hajerdinov",
    company: "Platform Coordinator, Twin",
    text: "Internal feedback lauds the website as modern, professional, and intuitive. Clickable Agency delivered innovative solutions thanks to their experienced work style and market knowledge. They stayed in constant contact throughout the project, and continue to provide advice and support post-launch.",
  },
  {
    id: "4",
    url: "https://clutch.co/profile/clickable-agency#review-158220",
    name: "Andrey Samoilenko",
    company: "Marketing Director, Gaming Company",
    text: "Clickable Agency was able to successfully accomplish their deliverables, ultimately satisfying the needs of their client. The team was highly proactive and communicative, and internal stakeholders were particularly impressed with Clickable Agency's industry expertise.",
  },
  {
    id: "5",
    url: "https://clutch.co/profile/clickable-agency?page=1#review-9883",
    name: "Mike Toth",
    company: "Head of Marketing, YYY Partners",
    text: "Clickable Agency delivered what was needed ahead of schedule — it took them only five days. They ensured a smooth process through a dedicated project manager, who made sure each task was submitted on time and everyone was always on the same page. They were also creative, professional, and reliable.",
  },
  {
    id: "6",
    url: "https://clutch.co/profile/clickable-agency?page=1#review-6856",
    name: "Anonymous",
    company: "Marketing Manager, Pokerdom",
    text: "While the company is unable to share any specific metrics regarding the project, they commend the Clickable Agency team for their quick and effective communication which allowed the project as a whole to find flexible solutions to any issues that arose.",
  },
];
