import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook} from "react-icons/fa";


const socials = [
    {icon: <FaGithub/>, path:"https://github.com/thisalchandupa"},
    {icon: <FaLinkedin/>, path:"https://www.linkedin.com/in/thisal-chandupa/"},
    {icon: <FaInstagram/>, path:"https://www.instagram.com/thisal_chandupa/"},
    {icon: <FaFacebook/>, path:"https://web.facebook.com/thisal.chandupa/"},
]

const Social = ({containerStyles, iconStyles}) => {
  return  <div className={containerStyles}>
    {socials.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    })}
  </div>
};

export default Social