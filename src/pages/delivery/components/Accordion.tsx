import { useState } from "react";
import "./Accordion.scss";
interface IAccordion {
  title: string;
  text: string;
}

const Accordion = ({ title, text }: IAccordion) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)} className="delivery__collapsible">
        {title}
        <div
          className={`delivery__boot delivery__boot${open ? "-active" : ""}`}
        ></div>
      </button>
      <div className={`delivery__content${open ? "-active" : ""}`}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Accordion;
