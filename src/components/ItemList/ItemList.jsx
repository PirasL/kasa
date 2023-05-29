import "./ItemList.css";
import data from "../../assets/data.json";
import Item from "../Item/Item";

export default function ItemList() {
  return (
    <section className="item-list">
      {data.map((el, id) => {
        return <Item key={id} {...el} />;
      })}
    </section>
  );
}
