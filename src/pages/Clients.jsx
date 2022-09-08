import React from "react";
import "../styles/clients.scss";

const Clients = () => {
  return (
  <div className="content">
    <div className="clients-area">
      <div className="client-part">
        <h3 class="clients-title">Clients</h3>
        <div className="client-box"></div>
        <div className="client-box"></div>
      </div>
      <div className="client-part">
        <p className="review">sakhbdn c sajkfnsaf asfasfas jaskfsa skjfnskjf jsfbfkjsa safjansfkas</p>
        <p className="reviewer">Man Person-1 : <span>Company-1</span></p>
      </div>
      <div className="client-line">
        <div className="client-box box-hidden"></div>
        <div className="client-box"></div>
        <div className="client-box"></div>
        <div className="client-box"></div>
        <div className="client-box"></div>
      </div>
      <div className="client-line">
        <div className="client-box box-hidden"></div>
        <div className="client-box box-hidden"></div>
        <div className="client-box box-hidden"></div>
        <div className="client-box"></div>
        <div className="client-box"></div>
      </div>
    </div>
  </div>
  );
};

export default Clients;
