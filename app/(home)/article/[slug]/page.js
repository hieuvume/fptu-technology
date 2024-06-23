import api from "@/api/api"
import articleApi from "@/api/articleApi"
import ArticleDetail from "@/components/article/ArticleDetail"
import NotFound from "@/components/layouts/NotFound"

const getData = async (slug) => {
  try {
    const response = await articleApi.getBySlug(slug)
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