import { ICase, IItem } from "@/types";
import { lazy } from "react";
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
import bobr1 from "../../public/cases/bobr/1.png";
import bobr2 from "../../public/cases/bobr/2.png";
import bobr3 from "../../public/cases/bobr/3.png";
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
import spinline1 from "../../public/cases/spinline/1.png";
import spinline2 from "../../public/cases/spinline/2.png";
import spinline3 from "../../public/cases/spinline/3.png";
import spinline4 from "../../public/cases/spinline/4.png";
import spinline5 from "../../public/cases/spinline/5.png";
import spinline6 from "../../public/cases/spinline/6.png";
import spinline7 from "../../public/cases/spinline/7.png";
import spinline8 from "../../public/cases/spinline/8.png";

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

export const TESTIMONIALS: IItem[] = [
  {
    id: "1",
    name: "HeroUI",
    text: "Room-filling sound, Intelligent assistant. Smart home control. Works seamlessly with iPhone. Check it out",
    image: "avatar.png",
    url: "heroui.org",
    code: "https://www.heroui.com/",
  },
  {
    id: "2",
    name: "HeroUI2",
    text: "Room-filling sound, Intelligent assistant. Smart home control. Works seamlessly with iPhone. Check it out",
    image: "avatar.png",
    url: "heroui.org2",
    code: "https://www.heroui.com/",
  },
  {
    id: "3",
    name: "HeroUI3",
    text: "Room-filling sound, Intelligent assistant. Smart home control. Works seamlessly with iPhone. Check it out",
    image: "avatar.png",
    url: "heroui.org3",
    code: "https://www.heroui.com/",
  },
];

export const CASES: ICase[] = [
  {
    id: "1",
    name: "OkFun – Full Branding & Mascot Development",
    text: "",
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
  {
    id: "2",
    name: "Bobr Casino",
    text: "",
    images: [bobr1, bobr2, bobr3],
  },
  {
    id: "3",
    name: "Cashimo",
    text: "",
    images: [cashimo1, cashimo2, cashimo3, cashimo4, cashimo5, cashimo6],
  },
  {
    id: "4",
    name: "Casino Elite",
    text: "",
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
    name: "Fruits Slot",
    text: "",
    images: [fruits1, fruits2, fruits3, fruits4, fruits5],
  },
  {
    id: "6",
    name: "Mines Slot",
    text: "",
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
    name: "NV Casino",
    text: "",
    images: [nvcasino1, nvcasino2, nvcasino3, nvcasino4, nvcasino5],
  },
  {
    id: "8",
    name: "Playfina",
    text: "",
    images: [playfina1, playfina2, playfina3, playfina4],
  },
  {
    id: "2",
    name: "",
    text: "",
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
  {
    id: "2",
    name: "",
    text: "",
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
  {
    id: "2",
    name: "",
    text: "",
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
];
