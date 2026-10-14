import Image from "next/image";
import "./Footer.scss";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-text">
          <Image src={"/logo.jpg"} alt="" height={70} width={58} />
          {/* <h4>Legal counsel for business.</h4> */}
          <p>
            Established in Lagos in 1984, serving clients across diverse sectors
            of the Nigerian economy.
          </p>
        </div>

        <div className="footer-nav">
          <h5>Explore</h5>
          <a href="">The Firm</a>
          <a href="">Practice Areas</a>
          <a href="">Insights</a>
          <a href="">Our People</a>
          <a href="">Contact</a>
        </div>

        <div className="footer-nav">
          <h5>Connect</h5>
          <a href="">LinkedIn</a>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">X(FORMERLY Twitter)</a>
          <a href="">Tiktok</a>
        </div>
      </div>

      <div className="copyright">&copy;2026 GEPLAW · All rights reserved</div>
    </footer>
  );
}

export default Footer;
