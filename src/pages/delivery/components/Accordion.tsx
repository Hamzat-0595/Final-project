import { useState } from "react";
import "./Accordion.scss";
import { Button } from "../../../components/Button/Button";
interface IAccordion {
  title: string;
  text: string;
}

const Accordion = ({ title, text }: IAccordion) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)} className="delivery__collapsible">
        {title}
        <div
          className={`delivery__boot delivery__boot${open ? "-active" : ""}`}
        ></div>
      </Button>
      <div className={`delivery__content${open ? "-active" : ""}`}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Accordion;
