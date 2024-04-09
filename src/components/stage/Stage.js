import React from "react";
import "../stage/Stage.css";
import stage1 from "../../assets/images/stage1.png";
import stage2 from "../../assets/images/stage2.png";
import stage3 from "../../assets/images/stage3.png";
import line from "../../assets/images/line.png";
const Stage = () => {
  const stage = [
    {
      image: stage1,
      id: "s-1",
      title: "Предложение от продавца",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    },
    {
      image: stage2,
      id: "s-2",
      title: "Доставка",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    },
    {
      image: stage3,
      id: "s-3",
      title: "Установка у клиента",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    },
  ];
  return (
    <div className="stage">
      <div className="container">
        <div className="stage_contents">
          <h2>Этапы поставки </h2>
          <div className="stage_cards">
            {stage?.map((el, inx) => (
              <div key={inx} className="stage_card">
                <img src={el.image} alt="card" />
                <div className="stage_texts">
                  <h3>{el.title}</h3>
                  <img src={line} alt="line" />
                  <p>{el.lorem}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
