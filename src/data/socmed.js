/**
 * © Copyright by Deo Subarno (Kochan.php | kochan4php)
 * Don't edit this code!
 */

import { BsGithub, BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { MdWork } from "react-icons/md";

const Socmed = [
  {
    text: "Github",
    path: "",
    btncolor: "hover:brightness-90 bg-[#3D4451] hover:bg-[#3D4451]",
    Icon: BsGithub,
  },
  {
    text: "Instagram",
    path: "",
    btncolor:
      "hover:brightness-90 bg-gradient-to-r from-violet-600 via-pink-600 to-orange-600",
    Icon: BsInstagram,
  },
  {
    text: "WhatsApp",
    path: "",
    btncolor: "hover:brightness-90 bg-[#28B13D] hover:bg-[#28B13D]",
    Icon: BsWhatsapp,
  },
  {
    text: "LinkedIn",
    path: "",
    btncolor:
      " hover:brightness-90 bg-gradient-to-tl from-purple-800 via-purple-600 to-purple-400 bg-size-200 bg-pos-0 ",
    Icon: BsLinkedin,
  },
  {
    text: "Portfolio",
    path: "/",
    btncolor:
      " hover:brightness-90 transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100",
    Icon: MdWork,
  },
];

export default Socmed;
