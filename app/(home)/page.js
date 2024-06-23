import LargeTrendingArticle from "@/components/article/LargeTrendingArticle";
import MediumTrendingArticle from "@/components/article/MediumTrendingArticle";
import SmallTrendingArticle from "@/components/article/SmallTrendingArticle";
import WhatsNew from "@/components/article/WhatsNew";

export default function Home() {
  return (
    <>
      <div className="trending-area fix">
        <div className="container">
          <div className="trending-main">
            <div className="row">
              <div className="col-lg-12">
                <div className="trending-tittle">
                  <strong>Trending now</strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <LargeTrendingArticle
                  article={{
                    title: "EU cybersecurity label should not discriminate against Big Tech, European groups say",
                    thumbnail: "https://www.reuters.com/resizer/v2/AQTCI5XECJP4FK4Q7NZ2J6NUMY.jpg?auth=85d3477a5631d8d906908300ee5e32b9eaf25f5704d137ac4df176b6d598a674&width=1200&quality=80",
                    slug: 'eu-cybersecurity-label-should-not-discriminate-against-big-tech-european-groups-say'
                  }}
                />
                <div className="trending-bottom">
                  <div className="row">
                    <MediumTrendingArticle
                      article={{
                        title: "Apple, Meta set to face EU charges under landmark tech rules, sources say",
                        thumbnail: "https://www.reuters.com/resizer/v2/O5S6J6VSSVJEZDC6S2OWGNMLUU.jpg?auth=fce38e2d89f35b6797146f02c2c0c4b93a498243e53411e1f19ce8b5d92385bd&width=480&quality=80",
                        slug: 'eu-cybersecurity-label-should-not-discriminate-against-big-tech-european-groups-say'
                      }}
                    />
                    <MediumTrendingArticle
                      article={{
                        title: "Meta pauses AI models launch in Europe due to Irish request",
                        thumbnail: "https://www.reuters.com/resizer/v2/FSOHGUGAJVLYDANHRCMNH5R4SU.jpg?auth=69bf39445133594fd197404cfa7ba6f64f5ecf4bbfc201c4c828c2145f385f21&width=480&quality=80",
                        slug: 'eu-cybersecurity-label-should-not-discriminate-against-big-tech-european-groups-say'
                      }}
                    />
                    <MediumTrendingArticle
                      article={{
                        title: "New York recovers $50 mln for defrauded Gemini Earn crypto investors",
                        thumbnail: "https://www.reuters.com/resizer/v2/4RPQ35PNJNNI5FLDK524XL6E4E.jpg?auth=c16ba0d8a4c7b4feeb5cc3de39d9291c9688a0f63f1f3930e7029540b049621b&width=480&quality=80",
                        slug: 'eu-cybersecurity-label-should-not-discriminate-against-big-tech-european-groups-say'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <SmallTrendingArticle
                  article={{
                    title: "ByteDance confirms layoff plan at its Indonesian unit",
                    thumbnail: "https://www.reuters.com/resizer/v2/X5NMHNLFONME5J6PX57MUQJM3Q.jpg?auth=1993c4e6c2e381a9e32163f8a65b086887b704816b62639bf422d38f1b6e6f50&width=120&quality=80",
                    slug: 'eu-cybersecurity-label-should-not-discriminate-against-big-tech-european-groups-say'
                  }}
                />
                <SmallTrendingArticle
                  article={{
                    title: "ByteDance confirms layoff plan at its Indonesian unit",
                    thumbnail: "https://www.reuters.com/resizer/v2/X5NMHNLFONME5J6PX57MUQJM3Q.jpg?auth=1993c4e6c2e381a9e32163f8a65b086887b704816b62639bf422d38f1b6e6f50&width=120&quality=80",
                    slug: 'eu-cybersecurity-label-should-not-discriminate-against-big-tech-european-groups-say'
                  }}
                />
                <SmallTrendingArticle
                  article={{
                    title: "ByteDance confirms layoff plan at its Indonesian unit",
                    thumbnail: "https://www.reuters.com/resizer/v2/X5NMHNLFONME5J6PX57MUQJM3Q.jpg?auth=1993c4e6c2e381a9e32163f8a65b086887b704816b62639bf422d38f1b6e6f50&width=120&quality=80",
                    slug: 'eu-cybersecurity-label-should-not-discriminate-against-big-tech-european-groups-say'
                  }}
                />
                <SmallTrendingArticle
                  article={{
                    title: "ByteDance confirms layoff plan at its Indonesian unit",
                    thumbnail: "https://www.reuters.com/resizer/v2/X5NMHNLFONME5J6PX57MUQJM3Q.jpg?auth=1993c4e6c2e381a9e32163f8a65b086887b704816b62639bf422d38f1b6e6f50&width=120&quality=80",
                    slug: 'eu-cybersecurity-label-should-not-discriminate-against-big-tech-european-groups-say'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsNew />
    </>

  );
}
