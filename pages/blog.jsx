import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import PostList from "../components/Posts/PostList";
import styled from "styled-components";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Navbar />

      <section id={`blog`}>
        <div className={`container`}>
          <h3>Blog</h3>

          <PostList />
        </div>
      </section>
    </>
  );
}
