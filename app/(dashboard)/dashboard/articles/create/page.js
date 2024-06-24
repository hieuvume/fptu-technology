'use client';
import articlesApi from "@/api/articlesApi";
import ArticlesEditor from "@/components/article/ArticlesEditor";
import { Report } from "notiflix";

const CreateArticlesPage = () => {

  const onSubmit = (values) => {
    articlesApi.create(values).then(() => {
      Report.success("Thành công!", "Đã tạo bài viết thành công", "OK");
    }).catch((error) => {
      Report.failure("Thất bại!", error.message, "OK");
    });
  };

  return (
    <div className="container mt-4">
      <h4>Tạo bài viết</h4>
      <ArticlesEditor article={undefined} onSubmit={onSubmit} />
    </div>
  );
};

export default CreateArticlesPage;
