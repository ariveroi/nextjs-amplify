import styles from "@/styles/Home.module.css";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Articles from "@/components/Articles";

//This component is going to be rendered in the server (pre-rendering)
export default function About({ articles }) {
  return (
    <PageLayout title="News App - Articles" header="Articles">
      <section className={styles.container}>
        <Articles articles={articles} />
      </section>
    </PageLayout>
  );
}

//N requests -> executed N times
//For data that changes very very frequently, we use the server side rendering or too much dynamic data
//Always fetching data in the server is much faster than in the client
//This function is going to be executed in the server
// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://newsapi.org/v2/top-headlines?country=us&apiKey=e811c660fc6b4eea95893328c1f97ebd"
//   );
//   const { articles } = await response.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// }

//N requests -> executed 1 time (or at refresing the page)
export async function getStaticProps() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=e811c660fc6b4eea95893328c1f97ebd"
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}
