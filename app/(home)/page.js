'use client'

import React, { useEffect, useState } from "react";
import articleApi from "@/api/articleApi";
import LargeTrendingArticle from "@/components/article/LargeTrendingArticle";
import MediumTrendingArticle from "@/components/article/MediumTrendingArticle";
import SmallNewArticle from "@/components/article/SmallNewArticles";
import WhatsNew from "@/components/article/WhatsNew";
import useSWR from "swr";

export default function Home() {
  const { data, error } = useSWR('/articles/list/trending', () => articleApi.getTrendingList());
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(data.small.length / 3));
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;

  return (
    <>
      <div className="trending-area fix">
        <div className="container">
          <div className="trending-main">
            <div className="row mt-5">
              <div className="col-lg-8">
                {isLoading && (
                  <div className="loading-spinner">
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
                {!isLoading && data?.large && (
                  <LargeTrendingArticle
                    article={data.large}
                  />
                )}
                <div className="trending-bottom">
                  <div className="row">
                    {!isLoading && data?.medium?.map((article, index) => (
                      <MediumTrendingArticle
                        key={index}
                        article={article}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {!isLoading && data?.small.length > 0 && (
                  <div className="small-new-article-slider">
                    {Array.from({ length: Math.ceil(data.small.length / 3) }).map((_, slideIndex) => (
                      <div key={slideIndex} className={`slide ${slideIndex === currentSlide ? "active" : "inactive"}`}>
                        {data.small.slice(slideIndex * 3, slideIndex * 3 + 3).map((article, index) => (
                          <SmallNewArticle
                            key={index}
                            article={article}
                            isVisible={slideIndex === currentSlide}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsNew />
    </>
  );
}
