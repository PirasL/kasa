import data from "../assets/data.json";

export default function fetchData({ id }) {
  const roomData = data.find((element) => element.id === id);
  return roomData;
}
