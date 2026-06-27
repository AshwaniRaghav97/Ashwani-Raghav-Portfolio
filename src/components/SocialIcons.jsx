import {
 FaGithub,
 FaLinkedin,
 FaInstagram,
 FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { portfolio } from "../data/portfolio";

const SocialIcons = () => {

 return (

<div className="flex gap-6 justify-center mt-8 text-3xl">

<a href={portfolio.github} target="_blank">
<FaGithub />
</a>

<a href={portfolio.linkedin} target="_blank">
<FaLinkedin />
</a>

<a href={portfolio.leetcode} target="_blank">
<SiLeetcode />
</a>

<a href={portfolio.hackerrank} target="_blank">
<FaHackerrank />
</a>

<a href={portfolio.instagram} target="_blank">
<FaInstagram />
</a>

</div>

 )

}

export default SocialIcons;