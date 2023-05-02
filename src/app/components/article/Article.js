"use client";
import React from "react";
import "./artical.scss";
import Link from "next/link";
const Article = ({
  sourceName,
  publishedAt,
  urlToImage,
  description,
  title,
  link,
}) => {
  

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
