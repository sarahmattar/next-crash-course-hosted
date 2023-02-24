import React from 'react'
import Link from 'next/link'
import { articles } from '../../../data'
import Meta from '../../../components/Meta'

const article = ({ article }) => {
  return (
    <>
      <Meta
        title={article.title}
        description={article.excerpt}
      />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  )
}

export const getStaticProps = context => {
  const { id } = context.params
  const filtered = articles.filter(article => article.id === id)
  const article = filtered[0]

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default article
