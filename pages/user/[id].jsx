import React from "react";
import Image from "next/image";
import style from "@/styles/User.module.css";
import PageLayout from "@/components/PageLayout";

const Article = ({ user }) => {
  return (
    <PageLayout>
      <div className={style.user}>
        <h1>{user.name}</h1>
        <Image
          src={`https://api.dicebear.com/6.x/lorelei/png?seed=${user.username}`}
          width={400}
          height={400}
          alt={`Profile image of ${user.name}`}
        />
        <h2>{user.email}</h2>
        <h3>{user.website}</h3>
        <ul>
          <li>{user.address.street}</li>
          <li>{user.address.zipcode}</li>
        </ul>
        <ul>
          <li>{user.company.name}</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const paths = users.map((user, idx) => ({
    params: { id: user.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  // Get the paths we want to pre-render based on posts

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { props: { user } };
}

export default Article;
