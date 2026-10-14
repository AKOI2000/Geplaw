import "./CTA.scss";

function CTA() {
  return (
    <section id="section-cta">
     <div className="cta-box">
         <div className="">
        <h2>Have a business matter that requires careful legal attention?</h2>
        {/* <p>
          Whether you are navigating a transaction, addressing a regulatory
          challenge or resolving a dispute, start a conversation with our team.
        </p> */}
      </div>
      <div className="btn-box">
        <a href="" className="btn full-white">Contact Our Team</a>
        <a href="" className="btn transparent-white">Explore Our Expertise</a>
      </div>
     </div>
    </section>
  );
}

export default CTA;
