import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { Star } from "../../../public";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <Image src={Star} alt="star" />
        <div className="footer__center">
          <h1>Contact Me</h1>
          <div className="footer__socials">
            <Link href="/">
              LinkedIn <GoArrowUpRight size={40} />
            </Link>
            <Link href="/">
              Email <GoArrowUpRight size={40} />
            </Link>
            <Link href="/">
              Twitter <GoArrowUpRight size={40} />
            </Link>
          </div>
        </div>
        <Image src={Star} alt="star" />
      </div>
    </div>
  );
};

export default Footer;
