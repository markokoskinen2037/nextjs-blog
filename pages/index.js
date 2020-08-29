import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Kummallinen asia</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        Sit consequat pariatur reprehenderit reprehenderit incididunt incididunt
        cupidatat dolore incididunt. Officia do velit adipisicing duis
        adipisicing. Exercitation velit consequat amet minim Lorem ad cillum
        occaecat pariatur fugiat est nulla aliquip. Non tempor sit pariatur enim
        officia. Enim et aute ipsum officia ex ullamco ex. Laborum sunt aliqua
        culpa adipisicing Lorem mollit enim incididunt eu.
      </section>
      <br />
      <section className={utilStyles.headingMd}>
        Ullamco reprehenderit exercitation nulla enim occaecat ad ullamco dolore
        veniam. Aliquip commodo deserunt ex Lorem occaecat minim Lorem nostrud
        proident. Est ad irure quis officia est cillum duis minim. Lorem
        consectetur enim sunt dolor qui consequat tempor labore ea velit
        eiusmod.
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
