import "./Program.css";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import user_1 from "./../../assets/image/program/user_1.png";
import user_2 from "./../../assets/image/program/user_2.png";
import user_3 from "./../../assets/image/program/user_3.png";
import user_4 from "./../../assets/image/program/user_4.png";
import user_5 from "./../../assets/image/program/user_5.png";
import user_6 from "./../../assets/image/program/user_6.png";

function Program() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const firstDay = [
    {
      id: 1,
      iamge: user_1,
      date: "8:00 AM",
      place: "labibed",
      title: "Introdution of Desing",
      name: "Yehea shorafa",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      iamge: user_2,
      date: "10:00 AM",
      place: "Remal",
      title: "Desing",
      name: "Mahmoud Ahmed",
      desc: "illo voluptatem alias accusantium quaerat error nulla placeat",
    },
    {
      id: 3,
      iamge: user_3,
      date: "11:00 AM",
      place: "labibed",
      title: "React",
      name: "Eman Mohammed",
      desc: "voluptatibus temporibus ipsam rem, sint officia esse magnam",
    },
    {
      id: 4,
      iamge: user_4,
      date: "12:00 PM",
      place: "New York",
      title: "Vue",
      name: "Yousef Ahmed",
      desc: "Eos mollitia similique obcaecati! In",
    },
  ];

  const secondDay = [
    {
      id: 1,
      iamge: user_5,
      date: "9:00 AM",
      place: "Remal",
      title: "PHP",
      name: "Omer Kahlid",
      desc: "voluptatibus temporibus ipsam rem, sint officia esse magnam",
    },
    {
      id: 1,
      iamge: user_6,
      date: "11:00 AM",
      place: "Laboabed",
      title: "HTML",
      name: "Eman Kahlid",
      desc: "Eos mollitia similique obcaecati! In",
    },
  ];
  const thirdDay = [
    {
      id: 1,
      iamge: user_2,
      date: "7:00 AM",
      place: "Remal",
      title: "Desing",
      name: "Mahmoud Ahmed",
      desc: "illo voluptatem alias accusantium quaerat error nulla placeat",
    },
    {
      id: 2,
      iamge: user_4,
      date: "9:00 AM",
      place: "New York",
      title: "CSS - SASS",
      name: "Yousef Ahmed",
      desc: "Eos mollitia similique obcaecati! In",
    },
    {
      id: 3,
      iamge: user_6,
      date: "10:AM",
      place: "Lababed",
      title: "JS",
      name: "Ahmed Kahlid",
      desc: "Eos mollitia similique obcaecati! In",
    },
  ];

  const firstList = firstDay.map((first) => {
    return (
      <div className="tab-content my-lg-5 my-3" key={first.id}>
        <img src={first.iamge} alt="user" />
        <div className="user-info mx-lg-5 ms-3">
          <div className="date my-3">
            <span className="me-lg-3 me-1">
              <FontAwesomeIcon icon={faClock} className="me-1 icons" />
              {first.date}
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="me-1 icons" />
              {first.place}
            </span>
          </div>
          <h2>{first.title}</h2>
          <h4 className="mb-3">By {first.name}</h4>
          <p>{first.desc}</p>
        </div>
      </div>
    );
  });

  const secondList = secondDay.map((second) => {
    return (
      <div className="tab-content my-lg-5 my-3" key={second.id}>
        <img src={second.iamge} alt="user" />
        <div className="user-info mx-lg-5 mx-2">
          <div className="date my-3">
            <span className="me-3">
              <FontAwesomeIcon icon={faClock} className="me-1 icons" />
              {second.date}
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="me-1 icons" />
              {second.place}
            </span>
          </div>
          <h2>{second.title}</h2>
          <h4 className="mb-3">By {second.name}</h4>
          <p>{second.desc}</p>
        </div>
      </div>
    );
  });

  const thirdList = thirdDay.map((third) => {
    return (
      <div className="tab-content my-lg-5 my-3" key={third.id}>
        <img src={third.iamge} alt="user" />
        <div className="user-info mx-lg-5 mx-2">
          <div className="date my-3">
            <span className="me-3">
              <FontAwesomeIcon icon={faClock} className="me-1 icons" />
              {third.date}
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="me-1 icons" />
              {third.place}
            </span>
          </div>
          <h2>{third.title}</h2>
          <h4 className="mb-3">By {third.name}</h4>
          <p>{third.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="program-section" id="program">
      <div className="container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="First Day" value="one" />
                <Tab label="Seond Day" value="two" />
                <Tab label="Third Day" value="three" />
              </TabList>
            </Box>
            <TabPanel value="one">{firstList}</TabPanel>
            <TabPanel value="two">{secondList}</TabPanel>
            <TabPanel value="three">{thirdList}</TabPanel>
          </TabContext>
        </Box>
      </div>
    </section>
  );
}

export default Program;
