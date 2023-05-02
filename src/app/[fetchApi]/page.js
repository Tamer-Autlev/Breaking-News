import { use } from "react";
import SortingData from "../components/sortingData/SortingData";
import "./index.scss";
const getData = async ({ fetchApi }) => {
  try {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${fetchApi}&apiKey=e1f650c216b743b98a1f456eaf07d533`
    );
    const response = data.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};
const page = ({ params }) => {
  const fetchApi = params;
  const data = use(getData(fetchApi));
  return (
    <div className="newsList">
      <SortingData api={data.articles} />
    </div>
  );
};

export default page;
