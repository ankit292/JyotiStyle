import React from "react";
import person1 from "./../../dummy/jyotiDi.jpg";
import person2 from "./../../dummy/jyotiDi.jpg";
import person3 from "./../../dummy/jyotiDi.jpg";
import person4 from "./../../dummy/jyotiDi.jpg";
import TeamLink from "./TeamLink";

export default function OurTeam() {

  
  let TeamData = [
    {
      figure: person1,
      teamnName: "Sarah james",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optionihil distinctio natus doloremque id tempore repellendus atque",
      links: <TeamLink urlTo1='111' urlTo2='222' urlTo3='333'/>,
    },
    {
      figure: person2,
      teamnName: "MARTA SMITH",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optionihil distinctio natus doloremque id tempore repellendus atque",
      links: <TeamLink urlTo1='444' urlTo2='555' urlTo3='666'/>,
    },
    {
      figure: person3,
      teamnName: "Nicole Johnson",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optionihil distinctio natus doloremque id tempore repellendus atque",
      links: <TeamLink urlTo1='777' urlTo2='888' urlTo3='999'/>,
    },
    {
      figure: person4,
      teamnName: "Alicia Brown",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optionihil distinctio natus doloremque id tempore repellendus atque",
      links: <TeamLink urlTo1='000' urlTo2='000' urlTo3='000'/>,
    },
  ];

  let TeamDataPrint = TeamData.map((val, ind) => {

    return (
      <div className="col-md-3" key={ind}>
        <div className="team">
          <figure className="team-image">
            <img src={val.figure} alt="arrow" />
          </figure>
          <h3 className="team-name">{val.teamnName}</h3>
          <p>{val.para}</p>
          <div className="social-links">{val.links}</div>
        </div>
      </div>
    );
  });

  return <>{TeamDataPrint}</>;
}
