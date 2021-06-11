import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className={`container`}>
        <Link href="/">Back</Link>
        <form>
          <label htmlFor="login">
            <input type="text" id="login" placeholder="login" />
          </label>

          <label htmlFor="password">
            <input type="password" id="password" placeholder="password" />
          </label>
        </form>
      </div>
    </>
  );
}
