import "./Question.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

function Question() {
  return (
    <section className="question-setion">
      <div className="container" >
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What is Responsive Desing ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, nisi
            non, quasi incidunt, cumque in vitae mollitia explicabo
            necessitatibus numquam quod nobis molestias veritatis doloribus
            veniam ut blanditiis. Minus, quas..
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            What Are Latest UX Development ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, eius
            culpa tenetur voluptatibus ipsam adipisci. Animi quod omnis
            explicabo exercitationem corporis, perferendis expedita vitae fuga
            voluptates rem consequuntur, vel quis!
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            What Things About Social Media Will Be Discussed ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sed architecto, doloribus omnis nihil nobis facilis? Nihil maxime
            veniam aspernatur eius, a aliquam quibusdam provident placeat
            molestiae eaque iusto enim?
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

export default Question;
