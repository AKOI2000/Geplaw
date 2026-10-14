import "./Expertise.scss";

function Expertise() {
  return (
    <section id="section-expertise">
      <div className="page-heading">
        {/* <h2>Complex matters call for more than a standard answer.</h2>
        <p>
          Our practice brings together legal expertise across transactions,
          regulation, disputes and industry-specific challenges. We advise
          clients on the issues that affect how they operate, invest and grow.
        </p> */}

        <h2>What do people contact us with</h2>
      </div>

      <div className="expertise-list">
        {expertises.map((expertise) => (
          <div className="expertise-item" key={expertise.id}>
            <div className="">
              {" "}
              <h4>{expertise.title}</h4>
              <p>{expertise.desc}</p>
            </div>

            <a href="" className="btn full-accent">
              Explore more
            </a>
          </div>
        ))}
      </div>

      <div className="btn-box">
        <a href="" className="link white">View All Practice Areas</a>
      </div>
    </section>
  );
}

export default Expertise;

const expertises = [
  {
    id: 1,
    title: "Corporate & Commercial",
    desc: "From company structuring and restructuring to mergers, acquisitions and transaction advisory, we support the legal foundations of business.",
  },
  {
    id: 2,
    title: "Energy & Natural Resources",
    desc: "Legal advice across oil and gas, power, renewable energy and environmental matters in a sector shaped by complex commercial and regulatory demands.",
  },
  {
    id: 3,
    title: "Banking & Capital Markets",
    desc: "Advice on financing, capital markets and commercial transactions for financial institutions, investors and other market participants.",
  },
  {
    id: 4,
    title: "Infrastructure Projects",
    desc: "Legal support for construction, infrastructure development and public-private partnership arrangements.",
  },
  {
    id: 5,
    title: "Digital Infrastructure & Data Protection",
    desc: "Representation and advice in commercial disputes, litigation, arbitration and mediation, with attention to the issues and interests at stake.",
  },
  {
    id: 6,
    title: "Corporate & Commercial",
    desc: "Guidance on digital assets, privacy, data protection and the regulatory considerations accompanying technological change.",
  },
];
