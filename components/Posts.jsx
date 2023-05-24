import React from "react";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </Link>
      ))}
    </>
  );
};

export default Posts;
