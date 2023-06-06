import "./RoomSlider.css";
import arrow from "../../assets/images/arrow.png";
import { useState } from "react";

export default function RoomHero({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function changeSlide(e) {
    let offset = e.currentTarget.dataset.offset === "next" ? 1 : -1;
    let index = currentIndex;
    let newIndex = () => {
      if (index + offset < 0) {
        return pictures.length - 1;
      } else if (index + offset >= pictures.length) {
        return 0;
      } else {
        return index + offset;
      }
    };
    setCurrentIndex(newIndex);
  }

  return (
    <div className="room-slider">
      <img src={pictures[currentIndex]} className="room-hero" alt="slider" />
      <div
      style={{display: pictures.length === 1 ? "none" : "" }}
        className="arrow arrow-left"
        onClick={changeSlide}
        data-offset="prev"
      >
        <img src={arrow}  alt="right nav arrow"/>
        
      </div>
      <div
      style={{display: pictures.length === 1 ? "none" : "" }}
        className="arrow arrow-right"
        onClick={changeSlide}
        data-offset="next"
      >
        <img src={arrow} alt="left nav arrow"/>
      </div><div className="compteur">{`${currentIndex + 1}/${pictures.length}`}</div>
    </div>
  );
}
