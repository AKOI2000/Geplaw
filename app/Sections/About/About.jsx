import Image from "next/image";
import "./About.scss";

function About() {
  return (
    <section id="section-about">
      <div className="about-text">
        <h2>
          The law doesn't exist in isolation. Neither do the decisions it
          shapes.
        </h2>
        <div className="">
          <p>
            Every transaction has commercial implications. Every regulatory
            decision carries consequences. And every dispute demands an
            understanding of what is at stake.
          </p>

          <p>
            At George Etomi & Partners, we bring legal knowledge and commercial
            perspective together to help clients navigate complex matters within
            Nigeria's evolving business environment.
          </p>

          <p>
            Established in Lagos in 1984, the firm has grown to serve clients
            across multiple sectors, with offices in Lagos, Abuja and Port
            Harcourt.
          </p>

          <a href="" className="btn full-accent">Discover GEPLAW</a>
        </div>
      </div>

      <div className="img-box">
        <Image
          src="/GEPLAW-team-pic.jpg"
          alt=""
          width={1080}
          height={776}
          quality={100}
          // size="100vw"
        />
      </div>
    </section>
  );
}

export default About;
