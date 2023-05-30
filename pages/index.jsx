import styles from "@/styles/Home.module.css";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Articles from "@/components/Users";

export default function Home() {
  return (
    <PageLayout title="News App - Home">
      <section className={styles.container}>
        <h1>Leverage amplify and next js</h1>
      </section>
    </PageLayout>
  );
}
