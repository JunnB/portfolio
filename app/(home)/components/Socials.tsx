import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/junior-bernard-15b96053/",
  },
  {
    icon: FaGithub,
    href: "https://github.com/JunnB",
  },
];

type SocialsProps = {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.href} className={iconStyles} target="_blank">
          <social.icon/>
        </Link>
      ))}
    </div>
  )
}

export default Socials