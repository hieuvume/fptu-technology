'use client';
import articlesApi from "@/api/articlesApi";
import ArticlesCreate from "@/components/article/ArticlesCreate";
import { useRouter } from "next/navigation";
import { Report } from "notiflix";

const CreateArticlesPage = () => {
  const router = useRouter()
  const onSubmit = (formData) => {
    articlesApi.create(formData).then(() => {
      Report.success("Thành công!", "Đã tạo bài viết thành công", "OK", () => {
        router.push('/dashboard/articles')
      });
    }).catch((error) => {
      Report.failure("Thất bại!", error.message, "OK");
    });
  };

  return (
    <div className="container mt-4">
      <h4>Tạo bài viết</h4>
      <ArticlesEditor articles={{
      }} onSubmit={onSubmit} />
    </div>
  );
};

export default CreateArticlesPage;
