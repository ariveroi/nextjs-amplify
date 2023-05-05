import React from "react";

const Article = () => {
  return <h1>Esto es un articulo</h1>;
};

// export async function getStaticProps() {
//   const response = await fetch(
//     "https://newsapi.org/v2/top-headlines?country=us&apiKey=e811c660fc6b4eea95893328c1f97ebd&q=Hola"
//   );
//   const { articles } = await response.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// }

export default Article;
