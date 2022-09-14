import React, { useEffect, useState } from "react";
import "../styles/clients.scss";

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(0);

  const clients = [
    {
      name: "Buggie Garages",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit amet consequatur dolore eligendi quidem aperiam cum incidunt, assumenda aliquam quo, eum laudantium hic accusamus obcaecati. Explicabo dolore doloremque ab atque!",
      image: "buggie-garages.png",
      person: "Santanu",
    },
    {
      name: "The VFX Company",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit amet consequatur dolore eligendi quidem aperiam cum incidunt, assumenda aliquam quo, eum laudantium hic accusamus obcaecati. Explicabo dolore doloremque ab atque!",
      image: "tvc.png",
      person: "Priyank",
    },
    {
      name: "Shreeji Cure Clinic",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit amet consequatur dolore eligendi quidem aperiam cum incidunt, assumenda aliquam quo, eum laudantium hic accusamus obcaecati. Explicabo dolore doloremque ab atque!",
      image: "shreeji-cure-clinic.png",
      person: "Umang Rachhadiya",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(selectedClient);
      console.log(clients.length);
      setSelectedClient((value) => (value + 1) % 3);
    }, 4000);
    return () => {
      clearInterval(interval);
      setSelectedClient(0);
    };
  }, []);

  return (
    <div className="content">
      <div className="clients-area">
        <div className="client-part">
          <h3 className="clients-title">Clients</h3>
          <div
            onClick={() => setSelectedClient(0)}
            className={
              selectedClient === 0
                ? "client-box selected-client-box"
                : "client-box"
            }
          >
            <img src={"clients/" + clients[0]?.image} alt="" />
          </div>
          <div
            onClick={() => setSelectedClient(1)}
            className={
              selectedClient === 1
                ? "client-box selected-client-box"
                : "client-box"
            }
          >
            <img src={"clients/" + clients[1]?.image} alt="" />
          </div>
        </div>
        <div className="client-part">
          <p className="review">{clients[selectedClient]?.review}</p>
          <p className="reviewer">
            {clients[selectedClient]?.person} :{" "}
            <span style={{ color: "#AEAEAE" }}>
              {clients[selectedClient]?.name}
            </span>
          </p>
        </div>
        <div className="client-line">
          <div className="client-box box-hidden"></div>
          <div
            onClick={() => setSelectedClient(2)}
            className={
              selectedClient === 2
                ? "client-box selected-client-box"
                : "client-box"
            }
          >
            <img src={"clients/" + clients[2]?.image} alt="" />
          </div>
          <div className="client-box box-empty"></div>
          <div className="client-box box-empty"></div>
          <div className="client-box box-empty"></div>
        </div>
        <div className="client-line">
          <div className="client-box box-hidden"></div>
          <div className="client-box box-hidden"></div>
          <div className="client-box box-hidden"></div>
          <div className="client-box box-empty"></div>
          <div className="client-box box-empty"></div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
