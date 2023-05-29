import Tag from "../Tag/Tag";
import "./RoomContent.css";
import Collapsible from "../Collapsible/Collapsible";
import StarContainer from "../StarContainer/StarContainer";

export default function RoomContent({ ...data }) {
  const name = data.host.name.split(" ");
  return (
    <>
      <div className="room-info">
        <div className="l">
          <h1 className="room-title">{data.title}</h1>
          <p className="room-location">{data.location}</p>
          <div className="room-tag-container">
            {data.tags.map((el, index) => {
              return <Tag key={index} content={el} />;
            })}
          </div>
        </div>
        <div className="r">
          <div className="profile">
            <h4 className="profile-name">
              {name[0]}
              <br />
              {name[1]}
            </h4>
            <img
              className="profile-pic"
              src={data.host.picture}
              alt="room owner"
            />
          </div>
          <StarContainer rating={data.rating} />
        </div>
      </div>
      <div className="collapsible-container">
        <Collapsible title="Description" content={data.description} />
        <Collapsible
          title="Équipements"
          content={data.equipments.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
        />
      </div>
    </>
  );
}
