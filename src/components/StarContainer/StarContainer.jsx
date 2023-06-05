import star from "../../assets/images/star.png";

export default function StarContainer({ rating }) {
  return (
    <div className="stars-container">
      {[...Array(5)].map((el, index) => (
        <img
        alt="star"
          key={index}
          src={star}
          style={{
            filter: index < rating ? "grayscale(0%)" : "grayscale(90%)",
          }}
        />
      ))}
    </div>
  );
}
