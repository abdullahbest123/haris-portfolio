import React from "react";

const experienceContent = [
  {
    year: "   2023 - Present",
    position: "UI/UX Designer",
    compnayName: "Web Stacking",
    details: `Currently I am UI/UX Designer at Web Stacking. using MERN Stack Technology for the webstite development`,
  },
  {
    year: "2019 - 2022",
    position: "NFT Artist",
    compnayName: "Pro NFT Maker",
    details: `Making NFT is Fun. Creating NFT is my art`,
  },
  // {
  //   year: "2018 - 2019",
  //   position: "Consultant",
  //   compnayName: "Videohive",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
