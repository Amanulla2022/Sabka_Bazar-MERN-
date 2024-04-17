import React, { useEffect, useState } from "react";
import offers from "../../../json/offers";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import "./Banners.scss";

const Banners = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  const goToOffer = (idx) => {
    setCurrentOffer(idx);
  };

  const nextOffer = () => {
    setCurrentOffer((prevIdx) =>
      prevIdx === offers.length - 1 ? 0 : prevIdx + 1
    );
  };

  const prevOffer = () => {
    setCurrentOffer((prevIdx) =>
      prevIdx === offers.length - 1 ? 0 : prevIdx - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextOffer();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentOffer]);

  return (
    <>
      <div className="banner-container">
        <div className="banner-img">
          <img
            src={offers[currentOffer].bannerImageUrl}
            alt={offers[currentOffer].bannerImageAlt}
          />
        </div>
        <div className="banner-btns">
          <button
            className="btn-prev"
            onClick={prevOffer}
            disabled={currentOffer === 0}
          >
            <GrLinkPrevious />
          </button>
          <button
            className="btn-next"
            onClick={nextOffer}
            disabled={currentOffer === offers.length - 1}
          >
            <GrLinkNext />
          </button>
        </div>
      </div>
      <div className="banner-radio">
        {offers.map((offer, index) => (
          <input
            key={offer.id}
            type="radio"
            name="offer"
            checked={index === currentOffer}
            onChange={() => goToOffer(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Banners;
