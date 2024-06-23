'use client'
import articleApi from "@/api/articleApi";
import LargeTrendingArticle from "@/components/article/LargeTrendingArticle";
import MediumTrendingArticle from "@/components/article/MediumTrendingArticle";
import SmallTrendingArticle from "@/components/article/SmallTrendingArticle";
import WhatsNew from "@/components/article/WhatsNew";
import useSWR from "swr";

export default function Home() {
  const { data, isLoading } = useSWR('/articles/list/trending', () => articleApi.getTrendingList())

  return (
    <>
      <div className="trending-area fix">
        <div className="container">
          <div className="trending-main">
            <div className="row mt-5">
              <div className="col-lg-8">
                {isLoading && <div>Loading...</div>}
                {data?.large && (
                  <LargeTrendingArticle
                    article={data.large}
                  />
                )}
                <div className="trending-bottom">
                  <div className="row">
                    {data?.medium?.map((article, index) => (
                      <MediumTrendingArticle
                        key={index}
                        article={article}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {data?.small?.map((article, index) => (
                  <SmallTrendingArticle
                    key={index}
                    article={article}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsNew />
    </>

  );
}
