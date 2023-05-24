import React from "react";
import Image from "next/image";
import Link from "next/link";

const Users = ({ users }) => {
  if (users.lenght === 0) {
    return <p>There are no articles</p>;
  }
  const usersList = users.map((user) => (
    <article key={user.id}>
      {/* {article.urlToImage && (
        <Image
          height={700}
          width={700}
          src={article.urlToImage}
          alt={article.title}
        />
      )} */}
      <h2>
        <Image
          src={`https://api.dicebear.com/6.x/lorelei/png?seed=${user.username}`}
          width={100}
          height={100}
          alt={`Profile image of ${user.name}`}
        />
        {user.name}
      </h2>
      <p>{user.company.name}</p>
      <p>{user.email}</p>

      <Link href={`/user/${user.id}`}>See more</Link>
      <hr />
    </article>
  ));

  return <>{usersList}</>;
};

export default Users;
