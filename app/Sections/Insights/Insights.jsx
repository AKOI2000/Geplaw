import Image from "next/image";
import "./Insights.scss";

function Insights() {
  return (
    <section id="section-insights">
      <div className="page-heading">
        <h2>The business landscape changes. Understanding the law matters.</h2>

        <p>
          Regulatory developments, emerging technologies and shifting commercial
          realities continue to shape how organisations operate.
        </p>

        <p>
          Our insights examine legal developments and industry issues relevant
          to businesses, investors and institutions.
        </p>
      </div>

      <div className="insights-list">
        {insights.map((insight) => (
          <div key={insight.id} className="insights-item">
            <div className="img-box">
              <Image
                src={insight.imgUrl}
                alt={insight.imgAlt}
                width={700}
                height={500}
              />
            </div>

            <div className="insights-item-content">
              <h5>{insight.title}</h5>
              <p>{insight.excerpt}</p>

              <a href="" className="link black">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Insights;

const insights = [
  {
    id: 1,
    title: "Regulatory shifts in the energy sector: what businesses must know",
    excerpt:
      "Recent regulatory reforms are reshaping energy contracts and project financing — our guide highlights compliance steps and commercial considerations.",
    imgUrl:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Stack of law books on a shelf",
    date: "2026-09-20",
  },
  {
    id: 2,
    title: "Cross-border M&A: mitigating regulatory risk",
    excerpt:
      "Cross-border transactions require careful regulatory mapping. We outline practical steps to reduce antitrust and foreign investment exposure.",
    imgUrl:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Businesspeople shaking hands over a contract",
    date: "2026-08-11",
  },
  {
    id: 3,
    title: "Dispute resolution trends: arbitration vs litigation",
    excerpt:
      "Choosing the right dispute forum affects timelines, costs and confidentiality. We compare arbitration and litigation for commercial disputes.",
    imgUrl:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Empty courtroom with wooden benches",
    date: "2026-07-02",
  },
  {
    id: 4,
    title: "Contract drafting: avoiding common commercial pitfalls",
    excerpt:
      "Well-drafted contracts reduce future disputes. We share drafting tips that protect commercial outcomes and manage liability.",
    imgUrl:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Close-up of a gavel and legal documents",
    date: "2026-06-15",
  },
  {
    id: 5,
    title: "Data protection in transactions: key clauses to include",
    excerpt:
      "With increased data regulation, transactional documents must address data transfers, security and breach response. Here’s a checklist.",
    imgUrl:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Person reviewing a contract on a laptop",
    date: "2026-05-10",
  },
  {
    id: 6,
    title: "Corporate governance: strengthening board oversight",
    excerpt:
      "Good governance supports resilience and investor confidence. We outline board practices for modern corporate oversight.",
    imgUrl:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Corporate team meeting in a boardroom",
    date: "2026-04-01",
  },
];
