import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
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
    </div>
  );
};

export default Footer;
