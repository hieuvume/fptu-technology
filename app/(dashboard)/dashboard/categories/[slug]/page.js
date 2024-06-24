'use client'
import categoryApi from "@/api/categoryApi"
import CategoryEditor from "@/components/category/CategoryEditor"
import { Report } from "notiflix"
import useSWR from "swr"

const CategoryEditPage = ({ params: { slug } }) => {
  const { data, isLoading } = useSWR(`/categories/${slug}`, () => categoryApi.getById(slug))

  const onSubmit = (values) => {
    categoryApi.update({ id: data._id, ...values }).then(() => {
      Report.success("Successfully!", "User updated successfully", "OK")
    }).catch((error) => {
      Report.failure("Failed!", error.message, "OK")
    })
  }

  return (
    <div className="container mt-4">
      <h4>Edit Category {slug}</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CategoryEditor category={data} onSubmit={onSubmit} />
      )}
    </div>
  )
}

export default CategoryEditPage