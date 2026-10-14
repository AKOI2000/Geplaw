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
    title: "When business partnerships go wrong: protecting your interests",
    excerpt:
      "Disagreements between business partners can threaten the future of an otherwise successful venture. We explore the legal safeguards, dispute resolution options and contractual provisions that help protect your interests.",
    imgUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Business professionals discussing a commercial agreement",
  },
  {
    title: "Intellectual property: protecting what your business creates",
    excerpt:
      "Your brand, ideas and creative work can be among your most valuable assets. Learn how trademarks, copyrights and other intellectual property rights can help protect your work and strengthen your commercial position.",
    imgUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Person writing notes at a desk",
  },
  {
    title: "Commercial disputes: choosing the right path to resolution",
    excerpt:
      "Not every commercial dispute needs to end in court. We examine the options available to businesses, from negotiation and mediation to arbitration and litigation, and the factors that should guide your decision.",
    imgUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Law books and legal reference materials",
  },
  {
    title: "Employment contracts: the clauses employers should not overlook",
    excerpt:
      "A clear employment contract establishes expectations before problems arise. We highlight important provisions covering responsibilities, remuneration, confidentiality, termination and the protection of business interests.",
    imgUrl:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Colleagues collaborating during a workplace meeting",
  },
  {
    title: "Real estate transactions: conducting due diligence before you buy",
    excerpt:
      "A promising property is only as secure as its underlying title and documentation. Discover why title verification, ownership checks, searches and proper transaction documents are essential before committing to a purchase.",
    imgUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Modern residential property viewed from the exterior",
  },
  {
    title: "Data protection and business risk: building compliance into operations",
    excerpt:
      "How a business collects, stores and uses personal information carries legal and reputational consequences. We consider practical measures for managing data responsibly, reviewing internal processes and reducing compliance risks.",
    imgUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Person working on a laptop in a modern workspace",
  },
];
