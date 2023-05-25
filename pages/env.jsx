import React from "react";
import PageLayout from "@/components/PageLayout";
import styles from "@/styles/Home.module.css";

export default function Env() {
  return (
    <PageLayout title="News App - Env Varibales" header="Env Varibales">
      <section className={styles.container}>{/* <h1>{env}</h1> */}</section>
    </PageLayout>
  );
}

// export async function getServerSideProps() {
//   const env = process.env;
//   console.log(env);
//   return {
//     props: {
//       env: env.NEXT_PUBLIC_ENV_VARIABLE,
//     },
//   };
// }
