import Head from "next/head";
import indexStyle from "../styles/Index.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trainee Profiles</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={indexStyle.divIndex}>
        <h1 className={indexStyle.indexh1}>NexT LeVel</h1>
        <p className={indexStyle.indexp}>
          Because, what's Inside, get's a Count...!!!{" "}
        </p>
      </div>
    </div>
  );
}
