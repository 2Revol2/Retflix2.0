import { GiStarsStack, GiVampireCape, GiShamblingZombie, GiNuclearBomb, GiMagicHat } from "react-icons/gi";
import { WiStars } from "react-icons/wi";
import { MdMenuBook, MdFamilyRestroom } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import { FaTv } from "react-icons/fa6";
import { RoutePath } from "@/shared/constants/route";
import type { SidebarItemType } from "../types/types";

export const NavbarSection: SidebarItemType[] = [
  {
    title: "films",
    url: RoutePath.films,
    icon: <BiMoviePlay />,
  },
  {
    title: "serials",
    url: RoutePath.serials,
    icon: <FaTv />,
  },
  {
    title: "cartoons",
    url: RoutePath.cartoons,
    icon: <GiMagicHat />,
  },
];

export const NavbarCategories: SidebarItemType[] = [
  {
    title: "popular_films",
    url: RoutePath.popular_films,
    icon: <GiStarsStack />,
  },
  {
    title: "popular_serials",
    url: RoutePath.poppular_serials,
    icon: <BiCameraMovie />,
  },
  {
    title: "top_250",
    url: RoutePath.top_250,
    icon: <WiStars />,
  },
  {
    title: "vampire",
    url: RoutePath.vampire,
    icon: <GiVampireCape />,
  },
  {
    title: "comics",
    url: RoutePath.comics,
    icon: <MdMenuBook />,
  },
  {
    title: "family",
    url: RoutePath.family,
    icon: <MdFamilyRestroom />,
  },
  {
    title: "romantic",
    url: RoutePath.romantic,
    icon: <FaHeart />,
  },
  {
    title: "zombie",
    url: RoutePath.zombie,
    icon: <GiShamblingZombie />,
  },
  {
    title: "catastrophe",
    url: RoutePath.catastrophe,
    icon: <GiNuclearBomb />,
  },
];
