import React from "react";
import "../work/Work.css";
import work1 from "../../assets/images/work1.png";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.png";
import line from "../../assets/images/line.png";
const Work = () => {
  const works = [
    {
      image: work1,
      id: "w-1",
      title: "Станки и оборудование",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
      cost: "20 000 руб.",
    },
    {
      image: work2,
      id: "w-2",
      title: "Компоненты и запчасти",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
      cost: "18 000 руб.",
    },
    {
      image: work3,
      id: "w-3",
      title: "Станки и оборудование",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
      cost: "20 000 руб.",
    },
  ];
  return (
    <div className="work">
      <div className="container">
        <div className="work_contents">
          <h2>Выполненные работы</h2>
          <p className="work_paragraph">
            Мы собрали информацию по грузам, которые мы уже доставили. У нас
            специальный подход к каждому виду товаров.
          </p>
          <div className="work_cards">
            {works?.map((el) => (
              <div key={el.id} className="work_card">
                <img src={el.image} alt="card" />
                <div className="work_texts">
                  <h3>{el.title}</h3>
                  <p>{el.lorem}</p>
                  <h4>{el.cost}</h4>
                  <img src={line} alt="line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
