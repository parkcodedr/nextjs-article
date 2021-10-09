import Head from 'next/head'
import { server } from '../config/index';
import ArticleList from '../components/ArticleList';

import styles from '../styles/Layout.module.css'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Infinity | Home</title>
      </Head>
      <ArticleList articles={articles} />

    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  console.log(server);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
