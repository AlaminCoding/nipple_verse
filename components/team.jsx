import { teamData } from "../data/teamData";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
const Team = () => {
  return (
    <section className="team" id="team">
      <h2 className="heading">Team</h2>
      <Row className="team-row">
        {teamData.map((element, index) => (
          <Col lg={2} xs={4} key={index}>
            <div className="team-img">
              <Image src={element} alt="" />
            </div>
          </Col>
        ))}
      </Row>
      <div className="team-btn">
        <button>Show All</button>
      </div>
    </section>
  );
};

export default Team;
