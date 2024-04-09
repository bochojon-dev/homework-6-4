import React from "react";
import "../partners/Partners.css";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";
import partner4 from "../../assets/images/partner4.png";
import partner5 from "../../assets/images/partner5.png";
import partner6 from "../../assets/images/partner6.png";
import line from "../../assets/images/line.png";
import instagram from "../../assets/images/instagram.svg";
import vector from "../../assets/images/Vector.svg";
import linkedin from "../../assets/images/linkedin.svg";
import rectangle from "../../assets/images/Rectangle.png";
import truck from "../../assets/images/trucks.png";

const Partners = () => {
  const partners = [
    {
      id: "p-1",
      image: partner1,
      name: "Антон Макаров",
      rank: "Руководитель компании",
    },
    {
      id: "p-2",
      image: partner2,
      name: "Елена Валерьева",
      rank: "Главный бухгалтер",
    },
    {
      id: "p-3",
      image: partner3,
      name: "Иван Аркадьев ",
      rank: "Менеджер по закупкам",
    },
    {
      id: "p-4",
      image: partner4,
      name: "Борис Вавилов",
      rank: "Бухгалтер",
    },
    {
      id: "p-5",
      image: partner5,
      name: "Алина Кравец",
      rank: "Сотрудник отдела кадров",
    },
    {
      id: "p-6",
      image: partner6,
      name: "Виктор Козуб",
      rank: "Менеджер по закупкам",
    },
  ];
  return (
    <div className="partner">
      <div className="container">
        <div className="partner_contents">
          <h2>Сотрудники компании</h2>
          <div className="partner_cards">
            {partners?.map((el) => (
              <div key={el.id} className="partner_card">
                <img src={rectangle} alt="rectangle" />
                <div className="human">
                  <img src={el.image} alt="worker" />
                </div>
                <div className="partner_texts">
                  <h3>{el.name}</h3>
                  <p>{el.rank}</p>
                  <img src={line} alt="line" />
                  <div className="links">
                    <img src={instagram} alt="social media" />
                    <img src={vector} alt="social media" />
                    <img src={linkedin} alt="social media" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="truck">
            <img src={truck} alt="delivery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
