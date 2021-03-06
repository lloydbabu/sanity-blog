import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Posts from '../components/Posts'
import {sanityClient, urlFor} from '../sanity'

interface Props{
  posts: [Post];
}

const Home = ({posts}: Props) => {
  console.log(posts);
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Posts posts={posts}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[
    _type == "post"
  ]{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  },
  description,
  mainImage
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props:{
      posts
    }
  }
}

export default Home
