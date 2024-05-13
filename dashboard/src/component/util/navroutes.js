import { BiSolidCategory } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa6";
import { GiCompanionCube } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export const route = [
    {
        url:'/category',
        label:"Category",
        icon:<BiSolidCategory />
      },

      {
        url:'/news',
        label:"News",
        icon:<FaRegNewspaper />
      },

      {
        url:'/companion',
        label:"Companion",
        icon:<GiCompanionCube />
      },

      {
        url:'/shopproduct',
        label:"Shopproduct",
        icon:<FaBagShopping />
      },

      {
        url:'/user',
        label:"User",
        icon:<FaUser />
      },
]