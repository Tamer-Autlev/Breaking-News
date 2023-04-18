"use client";
import React from "react";
import "./artical.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Article = ({
  sourceName,
  publishedAt,
  urlToImage,
  description,
  title,
  link,
}) => {
  const router = useRouter();
  const urlHandler = () => {
    const queryString = Object.entries(link)
      .map(([key, value]) => `${key}=${value}`)
      .join(`&`);
    const url = `./artical?${queryString}`;
    console.log(url);
    router.push(url);
  };
  const value = {
    sourceName: sourceName,
    publishedAt: publishedAt,
    description: description,
    title: title,
  };
  const str = Object.entries(value).map(([key, value]) => `${key}=${value}`);

  return (
    <article className="article-container">
      <Link
        className="article-link"
        href={{
          pathname: "/article",
          query: {
            sourceName: sourceName,
            publishedAt: publishedAt,
            description: description,
            title: title,
            urlToImage: urlToImage,
          },
        }}
      >
        <img src={urlToImage} alt={title} />
        <div className="article-details">
          <h2>{title}</h2>
          <section>
            <p>{description}</p>
          </section>
          <div className="article-bottom">
            <p>{sourceName}</p>
            <p>{publishedAt}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Article;
