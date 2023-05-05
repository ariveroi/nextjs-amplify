import React from "react";
import Image from "next/image";
import Link from "next/link";

const Articles = ({ articles }) => {
  if (articles.lenght === 0) {
    return <p>There are no articles</p>;
  }
  return articles.map((article, idx) => (
    <article key={article.url}>
      {article.urlToImage && (
        <Image
          height={700}
          width={700}
          src={article.urlToImage}
          alt={article.title}
        />
      )}
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{article.description}</p>
      <Link href={`/article/${idx}`}>See more</Link>
      <hr />
    </article>
  ));
};

export default Articles;
