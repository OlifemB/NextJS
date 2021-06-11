import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";

export default function Home({ items }) {
  return (
    <>
      <Head>
        <title>Main</title>
      </Head>

      <Navbar />

      <div className="container">
        <div className={`row`}>
          <h1>Index</h1>
        </div>
      </div>
    </>
  );
}
