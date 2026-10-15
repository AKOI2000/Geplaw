import Image from "next/image";
import Header from "../../components/Header/Header";
import "./Hero.scss";

export default function Hero() {
  return (
    <header className="hero">
      <Header />

      <Image src={"/hero-bg.jpg"} alt="GEPLAW" priority fill />
      <div className="overlay"></div>

      <div className="hero__copy">
        {/* <Image
          src={"/logo.jpg"}
          alt=""
          height={80}
          width={68}
        /> */}
        <h6 className="eyebrow">GEORGE ETOMI AND PARTNERS</h6>
        <h1 className="hero__title">
          Behind every major business decision, <br /> there is a legal one.
        </h1>
        <p className="hero__lead">
          From complex transactions to the challenges of a changing regulatory
          landscape, we advise businesses, investors and institutions on the
          legal decisions that shape what comes next.
        </p>
        <div className="hero__cta-box">
          <a className="hero__cta hero__cta-full" href="">
            Speak With Our Team
          </a>
          <a href="" className="hero__cta hero__cta-transparent">
            Explore Our Expertise
          </a>
        </div>
      </div>
    </header>
  );
}
