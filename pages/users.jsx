import styles from "@/styles/Home.module.css";
import PageLayout from "@/components/PageLayout";
import Users from "@/components/Users";

export default function About({ users }) {
  return (
    <PageLayout title="News App - Articles" header="Articles">
      <section className={styles.container}>
        <h1>Users section</h1>
        <Users users={users} />
      </section>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 60,
  };
}
