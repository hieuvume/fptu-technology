'use client'
import articlesApi from "@/api/articlesApi"
import ArticlesEditor from "@/components/article/ArticlesEditor"
import { Report } from "notiflix"
import useSWR from "swr"

const ArticlesEditPage = ({ params: { slug } }) => {
  const { data, isLoading } = useSWR(`/artiles/${slug}`, () => articlesApi.getById(slug))

  const onSubmit = (values) => {
    articlesApi.update({ id: data._id, ...values }).then(() => {
      Report.success("Successfully!", "Articles updated successfully", "OK")
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
        <ArticlesEditor articles={data} onSubmit={onSubmit} />
      )}
    </div>
  )
}

export default ArticlesEditPage