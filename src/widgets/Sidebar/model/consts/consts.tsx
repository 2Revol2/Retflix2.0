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
    title: "FILM",
    url: RoutePath.films,
    icon: <BiMoviePlay />,
  },
  {
    title: "TV_SERIES",
    url: RoutePath.serials,
    icon: <FaTv />,
  },
  {
    title: "CARTOONS",
    url: RoutePath.cartoons,
    icon: <GiMagicHat />,
  },
];

export const NavbarCategories: SidebarItemType[] = [
  {
    title: "TOP_POPULAR_MOVIES",
    url: RoutePath.popular_films,
    icon: <GiStarsStack />,
  },
  {
    title: "POPULAR_SERIES",
    url: RoutePath.poppular_serials,
    icon: <BiCameraMovie />,
  },
  {
    title: "TOP_250_MOVIES",
    url: RoutePath.top_250,
    icon: <WiStars />,
  },
  {
    title: "VAMPIRE_THEME",
    url: RoutePath.vampire,
    icon: <GiVampireCape />,
  },
  {
    title: "COMICS_THEME",
    url: RoutePath.comics,
    icon: <MdMenuBook />,
  },
  {
    title: "FAMILY",
    url: RoutePath.family,
    icon: <MdFamilyRestroom />,
  },
  {
    title: "LOVE_THEME",
    url: RoutePath.romantic,
    icon: <FaHeart />,
  },
  {
    title: "ZOMBIE_THEME",
    url: RoutePath.zombie,
    icon: <GiShamblingZombie />,
  },
  {
    title: "CATASTROPHE_THEME",
    url: RoutePath.catastrophe,
    icon: <GiNuclearBomb />,
  },
];
