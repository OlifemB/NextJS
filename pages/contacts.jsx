import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>

      <Navbar />

      <div id="posts" className={`container`}>
        <div className={`row`}>
          <h1>Contacts</h1>
        </div>
      </div>
    </>
  );
}
