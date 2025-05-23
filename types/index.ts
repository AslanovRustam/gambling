import { StaticImageData } from "next/image";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IItem {
  id: string;
  name: string;
  text: string;
  url?: string;
  image?: string | StaticImageData;
  code?: string;
  company?: string;
}
export interface ICase {
  id: string;
  name: string;
  text?: string;
  images: string[] | StaticImageData[];
}

export interface INavMenu {
  name: string;
  id: string;
}
