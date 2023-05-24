import styles from "@/styles/Home.module.css";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Articles from "@/components/Users";

//This component is going to be rendered in the server (pre-rendering)
export default function Home({ articles }) {
  return (
    <PageLayout title="News App - Home">
      <section className={styles.container}>
        <h1>Leverage amplify and next js</h1>
      </section>
    </PageLayout>
  );
}
