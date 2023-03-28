import React, { useEffect, useState } from "react";
import {Helmet} from "react-helmet";
import "../styles/clients.scss";
import buggieGarages from "../images/clients/buggie-garages.png";
import shreejicureclinic from "../images/clients/shreeji-cure-clinic.png";
import thevfxcompany from "../images/clients/tvc.png";

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(0);

  const clients = [
    {
      name: "Buggie Garages",
      review:
        "Axire team is nice and well trained. They handle the assignment very professionally. Team is awesome with result oriented. Hope we should go longer together. Wish you good luck guy’s !!",
      image: buggieGarages,
      person: "Santanu Sharma",
    },
    {
      name: "The VFX Company",
      review:
        "Development side of Axire team is professional and process of doing project is very smooth. As far as, Our website is running so well without any bugs. We liked to work with you guys and exited to working on further projects in future. All the best!!",
      image: thevfxcompany,
      person: "Priyank",
    },
    {
      name: "Shreeji Cure Clinic",
      review:
        "Axire turned my clinic website's dream into reality, proud of what they have done for us. The Axire team has great understanding of client ideas and completely satisfied with the work. We are very thankful.",
      image: shreejicureclinic,
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
    <div className="clients-content">
      <Helmet>
          <title>Clients - Axire</title>
          <meta name="title" content="Clients"></meta>
          <meta name="description" content="We are making our family bigger everyday become part of environment. Hoping you are in our next empty tile."></meta>
          <meta name="robots" content="index,nofollow"></meta>
      </Helmet>
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
            <img src={clients[0]?.image} alt="ClientIcon" />
          </div>
          <div
            onClick={() => setSelectedClient(1)}
            className={
              selectedClient === 1
                ? "client-box selected-client-box"
                : "client-box"
            }
          >
            <img src={clients[1]?.image} alt="ClientIcon" />
          </div>
        </div>
        <div className="client-part client-part-review-1">
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
            <img src={clients[2]?.image} alt="ClientIcon" />
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
        <div className="client-part client-part-review-2">
          <p className="review">{clients[selectedClient]?.review}</p>
          <p className="reviewer">
            {clients[selectedClient]?.person} :{" "}
            <span style={{ color: "#AEAEAE" }}>
              {clients[selectedClient]?.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
