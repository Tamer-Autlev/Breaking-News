import { use } from "react";
import SortingData from "../sortingData/SortingData";
import "./newsList.scss";
const getData = async () => {
  try {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=general&apiKey=e1f650c216b743b98a1f456eaf07d533`
    );
    const response = data.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};
const NewsList = () => {
  const data = use(getData());

  return (
    <div className="newsList">
      <SortingData api={data.articles} />
    </div>
  );
};

export default NewsList;
