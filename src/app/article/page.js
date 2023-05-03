"use client";
import { useSearchParams } from "next/navigation";
import "./index.scss";
const Page = () => {
  // const slug = searchParams;
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const urlToImage = searchParams.get("urlToImage");
  const description = searchParams.get("description");
  return (
    <article className="article-page">
      <h1>{title}</h1>
      <img src={urlToImage} alt={title} />
      <p className="description">{description}</p>
    </article>
  );
};
export default Page;

