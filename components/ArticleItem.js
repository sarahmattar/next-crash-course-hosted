import React from 'react'
import Link from 'next/link'
import articleStyles from '../styles/Articles.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link
      href="/article/[id]"
      as={`/article/${article.id}`}
      legacyBehavior
    >
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr; </h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
