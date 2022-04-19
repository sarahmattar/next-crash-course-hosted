const dev = process.env.NODE_ENV !== 'production'
const baseUrl = dev ? process.env.BASE_URL : process.env.NEXT_PUBLIC_BASE_URL

// apparently it is better to abstract away API calls using fetch() rather than call them in getStaticPaths and getStaticProps

export const getAllArticles = async () => {
  const res = await fetch(`${baseUrl}/api/articles`)

  if (res.status !== 200) throw String(`Invalid server response: ${res.status} ${res.statusText}`)

  const data = await res.json()
  return data
}

export const getEachArticle = async id => {
  const res = await fetch(`${baseUrl}/api/articles/${id}`)

  if (res.status !== 200) throw String(`Invalid server response: ${res.status} ${res.statusText}`)

  const data = await res.json()
  return data
}
