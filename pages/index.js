import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github Jobs API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://user-images.githubusercontent.com/36589645/108876414-311fcd00-7624-11eb-8aad-deead053ca86.png"
        width={800}
        height={400}
      />
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Use{" "}
        <a
          href="https://github-api-abhagsain.vercel.app/api/positions"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          this URL
        </a>{" "}
        to get the data
      </p>
      <div
        style={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <p>
          Supports everything that the{" "}
          <a
            href="https://jobs.github.com/api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            Main API
          </a>{" "}
          supports. Thanks to{" "}
          <a
            href="https://nextjs.org/docs/api-routes/introduction"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            Next.js API Routes
          </a>
          {" ♥"}
        </p>
      </div>
    </div>
  );
}
