import { useState } from "react";
import { acData } from "../data/acData";
const Faq = () => {
  const [selected, setSelected] = useState(0);
  const openAccordion = (index) => {
    setSelected(index);
  };
  return (
    <section className="faq" id="faq">
      <img src="/right-mask.png" className="faq-right-mask" alt="" />
      <img src="/blocks.png" alt="" className="faq-block-img" />
      <h2 className="heading">Frequently Asked Questions</h2>
      <div className="line"></div>
      <div className="accordion">
        {acData.map((element, index) => (
          <div className="ac-box" key={index}>
            <div className="ac-head" onClick={() => openAccordion(index)}>
              <h2>{element.ques}</h2>
              <img
                src="/arrow.png"
                alt=""
                className={selected === index ? "img-rotate" : null}
              />
            </div>
            <div
              className={
                selected === index ? "ac-body ac-body-open" : "ac-body"
              }
            >
              <p>{element.ans}</p>
            </div>
            <div
              className={
                selected === index ? "ac-layer ac-layer-open" : "ac-layer"
              }
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
