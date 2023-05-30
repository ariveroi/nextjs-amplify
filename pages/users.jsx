import styles from "@/styles/Home.module.css";
import PageLayout from "@/components/PageLayout";

export default function About({ users }) {
  return (
    <PageLayout title="News App - Articles" header="Articles">
      <section className={styles.container}>
        <h1>Users section</h1>
      </section>
    </PageLayout>
  );
}
