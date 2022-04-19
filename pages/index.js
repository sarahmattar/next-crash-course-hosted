import ArticleList from '../components/ArticleList'
import { articles as articlesFromDatabase } from '../data'

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

// methods for data fetching

// export const getStaticProps = async () => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts?_limit=6`
// 	);

// 	const articles = await res.json();

// 	return {
// 		props: {
// 			articles,
// 		},
// 	};
// };

export const getStaticProps = () => {
  const articles = articlesFromDatabase
  return {
    props: {
      articles,
    },
  }
}
