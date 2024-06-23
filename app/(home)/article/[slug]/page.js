import api from "@/api/api"
import ArticleDetail from "@/components/article/ArticleDetail"
import NotFound from "@/components/layouts/NotFound"

const getData = async (slug) => {
  try {
    const response = await api.get(`article/${slug}`)
    return response
  } catch (error) {
  }
  return undefined
}

const ArticleDetailPage = async ({ params: { slug } }) => {
  const article = await getData(slug)

  if (!article) {
    return <NotFound />
  }

  return <ArticleDetail article={article} />
}

export default ArticleDetailPage;