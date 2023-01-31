import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [toggle, setToggle] = useState(false);
  const handleChange = () => {
    setToggle(!toggle);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleChange}>
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{toggle && info}</p>
    </article>
  );
};

export default Question;
