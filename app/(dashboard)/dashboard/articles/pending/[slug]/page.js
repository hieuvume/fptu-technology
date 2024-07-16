'use client'
import articlesApi from "@/api/articlesApi"
import ArticlesEditor from "@/components/article/ArticlesEditor"
import { useRouter } from "next/navigation"
import { Report } from "notiflix"
import useSWR from "swr"

const ArticlesEditPage = ({ params: { slug } }) => {
  const router = useRouter()
  const { data, isLoading } = useSWR(`/artiles/${slug}`, () => articlesApi.getById(slug))

  const onSubmit = (values) => {
    articlesApi.update({ id: data._id, ...values }).then(() => {
      Report.success("Successfully!", "Articles updated successfully", "OK")
    }).catch((error) => {
      Report.failure("Failed!", error.message, "OK")
    })
  }

  const onReview = (state) => {
    articlesApi.reviewArticle(data._id, state).then(() => {
      Report.success("Successfully!", "Articles updated successfully", "OK", () => router.push("/dashboard/articles/pending"))
    }).catch((error) => {
      Report.failure("Failed!", error.message, "OK")
    })
  }

  return (
    <div className="container mt-4">
      <h4>Edit Articles {slug}</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ArticlesEditor articles={data} onSubmit={onSubmit} isReview onReview={onReview} />
      )}
    </div>
  )
}

export default ArticlesEditPage