import "./Participants.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup , faMicrophone , faClock} from '@fortawesome/free-solid-svg-icons'

function Participants() {
  const items = [
    {
      id: 1,
      icon: faPeopleGroup,
      title: "650 participants",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natusdolorem voluptatem suscipit nonsit vNatusdolorem voluptatem suscipit nonsit",
    },
    {
      id: 2,
      icon: faMicrophone,
      title: "24 programs",
      content:
        "alias aliquam vitae odit quibusdam, voluptatem suscipit nonsit soluta voluptate enim debitis nonsit soluta voluptate enim debitis ",
    },
    {
      id: 3,
      icon: faClock,
      title: "11 Speakers",
      content:
        " voluptatem suscipit non sit soluta voluptate enim debitis obcaecati eligendi itaque obcaecati eligendi itaque. ",
    },
  ];

  const itemList = items.map((item) => {
    return (
      <div key={item.id}>
        <div className="icons_content">
        <FontAwesomeIcon icon={item.icon} className="icon my-3"/>
        </div>
        <div className="content_text">
          <h3 className="title">{item.title}</h3>
          <p className="ms-lg-2 ms-sm-2">{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <section className="participants-section section-y-margin">
      <div className="container">
          <div className="content d-lg-flex d-md-flex d-sm-flex d-block section-y-padding">{itemList}</div>
      </div>
    </section>
  );
}

export default Participants;
