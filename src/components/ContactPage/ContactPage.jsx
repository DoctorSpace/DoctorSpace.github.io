import React from "react";
import HeaderZero from "../HeaderZero/HeaderZero";
import HorizontalRule from "../UI/HorizontalRule/HorizontalRule";
import WhatsApp from "../../images/WhatsApp.svg";
import Instagram from "../../images/Instagram.svg";

const ContactPage = () => {
  return (
    <div>
      <HeaderZero />
      <HorizontalRule />
      <div className="Contact">
        <div className="Contact__block">
          <h2>Контакты</h2>
          <div className="Contact__text">
            <p1>
              Не стесняйтесь звонить нам, если у вас есть какие-либо вопросы,
              нужна консультация или вы хотели бы узнать больше о наших товарах
              и услугах в области восточных танцев.
            </p1>
            <p1>Мы ценим вашу заинтересованность и ждем вашего сообщения</p1>
          </div>

          <div className="Contact__write">
            <p>Напиши нам</p>
            <div itemscope className="Contact__write-messangers">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/79614041462"
              >
                <img
                  itemprop="image"
                  src={WhatsApp}
                  className="Contact__write-messangers-icon"
                  alt="WhatsApp"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/isadora_visage/"
              >
                <img
                  itemprop="image"
                  src={Instagram}
                  className="Contact__write-messangers-icon"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
