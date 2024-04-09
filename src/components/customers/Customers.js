import React from "react";
import "../customers/Customers.css";
import custom1 from "../../assets/images/customer1.svg";
import custom2 from "../../assets/images/customer2.svg";
import custom3 from "../../assets/images/customer3.svg";
import custom4 from "../../assets/images/customer4.svg";
import custom5 from "../../assets/images/customer5.svg";
import custom6 from "../../assets/images/customer6.svg";
import custom7 from "../../assets/images/customer7.svg";
import custom8 from "../../assets/images/customer8.svg";
const Customers = () => {
  const customers = [
    {
      id: "c-1",
      image: custom1,
      title: "Росатом",
      type: "Корпорация атомной энергии",
    },
    {
      id: "c-2",
      image: custom2,
      title: "Газпром",
      type: "Энергетическая компания",
    },
    {
      id: "c-3",
      image: custom3,
      title: "Роснефть",
      type: "Нефтегазовая компания",
    },
    {
      id: "c-4",
      image: custom4,
      title: "Роскосмос",
      type: "Корпорация в космической отрасли",
    },
    {
      id: "c-5",
      image: custom5,
      title: "Лукойл",
      type: "Нефтяная компания",
    },
    {
      id: "c-6",
      image: custom6,
      title: "Интер РАО",
      type: "Энергетическая компания",
    },
    {
      id: "c-7",
      image: custom7,
      title: "Ростех",
      type: "Промышленная корпорация",
    },
    {
      id: "c-8",
      image: custom8,
      title: "Банк ВТБ",
      type: "Коммерческий банк",
    },
  ];
  return (
    <div className="customers">
      <div className="container">
        <div className="customer_contents">
          <h2>Нам доверяют</h2>
          <div className="custom_cards">
            {customers?.map((el) => (
              <div key={el.id} className="custom_card">
                <img src={el.image} alt="company" />
                <h3>{el.title}</h3>
                <p>{el.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
