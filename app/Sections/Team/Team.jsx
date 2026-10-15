import Image from "next/image";
import "./Team.scss";

function Team() {
  return (
    <section id="section-team">
      <h1 className="text">
        <span>This is our team, </span>
        <span>your people, we are stubborn, we are </span>
        <span>talented and we all have our superpower</span>
      </h1>

      <div className="main-team">
        <div className="main-team-member">
          <div className="img-box">
            <Image
              src="/georgeEtomi.jpg"
              alt="alt"
              width={720}
              height={892}
              size="100vw"
            />
          </div>
          <div className="text-box">
            <h5>George Etomi</h5>
            <p>Founding Partner</p>
          </div>
        </div>
        <div className="main-team-member">
          <div className="img-box">
            <Image
              src="/olufemiFadahunsi.jpg"
              alt="alt"
              width={720}
              height={892}
              size="100vw"
            />
          </div>
          <div className="text-box">
            <h5>Olufemi Fadahunsi</h5>
            <p>Managing Partner</p>
          </div>
        </div>
      </div>

      <div className="sub-team">
        {team.map((member) => (
          <div className="team-member" key={member.id}>
            <div className="img-box">
              <Image
                src={member.imgUrl}
                alt={`${member.name} || GEPLAW`}
                width={700}
                height={800}
              />
            </div>
            <div className="text-box">
              <h5>{member.name}</h5>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-box">
        <a href="" className="btn transparent-black">
          Meet Our Team
        </a>
      </div>
    </section>
  );
}

export default Team;

const team = [
  {
    id: 0,
    name: "Abieyuwa Igbinovia",
    role: "Practice Director",
    imgUrl: "/abieyuwaIGbinoviaa.jpg",
  },
  {
    id: 1,
    name: "Tosin Adefope",
    role: "Partner",
    imgUrl: "/tosinAdefope.jpeg",
  },
  {
    id: 2,
    name: "Esohe olajide",
    role: "Partner",
    imgUrl: "/EsoheOlajide.jpeg",
  },
  {
    id: 3,
    name: "Aderiike Aderemi",
    role: "Partner",
    imgUrl: "/AderiikeAderemi.jpg",
  },
];
