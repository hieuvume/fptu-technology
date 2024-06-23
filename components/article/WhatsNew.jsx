"use client";

import articleApi from "@/api/articleApi";
import categoryApi from "@/api/categoryApi";
import { useState } from "react";
import useSWR from "swr";
import NewArticle from "./NewArticle";

const WhatsNew = () => {
  const { data: categories, isLoading } = useSWR("/api/categories", () =>
    categoryApi.getAll()
  );
  const [currentCategory, setCurrentCategory] = useState(null);

  const { data: articles, articleLoading } = useSWR(
    `/api/articles/${currentCategory}`,
    () => {
      if (currentCategory) {
        return categoryApi.getArticles(currentCategory);
      }
      return articleApi.getAll();
    }
  );

  return (
    <section className="whats-news-area pt-50 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row d-flex justify-content-between">
              <div className="col-lg-2 col-md-3">
                <div className="section-tittle mb-30">
                  <h3>Whats New</h3>
                </div>
              </div>
              <div className="col-lg-10 col-md-9">
                <div className="properties__button">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <span
                        className={`nav-item nav-link cursor-pointer ${
                          currentCategory === null ? "active" : ""
                        }`}
                        onClick={() => setCurrentCategory(null)}
                      >
                        All
                      </span>
                      {categories?.map((category) => (
                        <a
                          key={category._id}
                          className={`nav-item nav-link cursor-pointer ${
                            currentCategory === category._id ? "active" : ""
                          }`}
                          onClick={() => setCurrentCategory(category._id)}
                        >
                          {category.categoryName}
                        </a>
                      ))}
                      {isLoading && (
                        <a className="nav-item nav-link cursor-pointer">
                          Loading...
                        </a>
                      )}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active">
                    <div className="whats-news-caption">
                      <div className="row">
                        {articleLoading && (
                          <div className="text-center">Loading...</div>
                        )}
                        {articles?.map((article) => (
                          <NewArticle index={article._id} article={article} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Nav Card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
