'use client'
import categoryApi from "@/api/categoryApi";
import CategoryEditor from "@/components/category/CategoryEditor";
import { useRouter } from "next/navigation";
import { Report } from "notiflix";

const CreateCategoryPage = () => {
  const router = useRouter()

  const onSubmit = (values) => {
    categoryApi.create(values).then(() => {
      Report.success("Successfully!", "Create category successfully", "OK", () => {
        router.push("/dashboard/categories")
      })
    }).catch((error) => {
      Report.failure("Failed!", error.message, "OK")
    })
  }

  return (
    <div className="container mt-4">
      <h4>Create Category</h4>
      <CategoryEditor category={undefined} onSubmit={onSubmit} />
    </div>
  );
}

export default CreateCategoryPage