"use client";
import useSWR from "swr";
import CommentForm from "./CommentForm";
import articleApi from "@/api/articleApi";
import SocialShare from "./SocialShare";
import Link from "next/link";
import RelatedArticle from "./RelatedArticle";

const ArticleDetail = ({ article }) => {
  const { data, isLoading } = useSWR(`/articles/related/${article.slug}`, () =>
    articleApi.getRelatedArticles(article.slug)
  );

  return (
    <main>
      <div className="about-area">
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-9">
              <div className="about-right mb-10">
                <div className="section-tittle mb-10">
                  <h3>{article.title}</h3>
                </div>
                <div className="about-img">
                  <img src={article.thumbnail} />
                </div>
                <div className="about-prea pt-20">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
                <SocialShare />
              </div>
              <CommentForm article_id={article?._id} />
            </div>
            <div className="col-lg-3">
              <div className="section-tittle mb-40">
                <h3>Related Articles</h3>
              </div>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                data?.map((relatedArticle, index) => (
                  <RelatedArticle article={relatedArticle} key={index} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetail;
