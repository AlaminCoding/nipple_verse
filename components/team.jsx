import { teamData } from "../data/teamData";
import Image from "next/image";
const Team = () => {
  return (
    <section className="team">
      <h2 className="heading">Team</h2>
      <div className="team-row">
        {teamData.map((element, index) => (
          <div className="team-img" key={index}>
            <Image src={element} alt="" />
          </div>
        ))}
      </div>
      <div className="team-btn">
        <button>Show All</button>
      </div>
    </section>
  );
};

export default Team;
