"use client";
import Pagination from '@mui/material/Pagination';
import NewsCard from "./components/main/NewsCard";
import { useEffect, useState } from 'react';
import { getNews, NewsResultType } from './utils';
import { useSelector } from 'react-redux';
import NewsListCard from './components/main/NewsListCard';
import CardPopup from './components/main/CardPopup';

export default function Home() {
  const [newsData, setNewsData] = useState<NewsResultType | undefined>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const activeTab = useSelector((state: { listType: { listType: string } }) => state.listType.listType);
  const openForm = useSelector((state: { openForm: { open: boolean } }) => state.openForm.open);
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNews(pageNumber, 6);
        setNewsData(response);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchData();
  }, [pageNumber]);


  return (
    <>
      <main className={`main_container ${(openForm || openPopup) ? "blur-sm" : ""}`}>
        <section className={`${activeTab === "grid" ? "news_grid_container" : "news_list_container"}`}>
          {newsData?.articles?.map((article, index) => {

            const newsCardProps = {
              content: article?.content,
              description: article?.description,
              image: article?.urlToImage,
              date: article?.publishedAt,
              setOpenPopup: setOpenPopup,
            };
            return activeTab === "grid" ? (
              <NewsCard
                key={index}
                {...newsCardProps}
              />
            ) : (
              <NewsListCard
                key={index}
                {...newsCardProps}
              />
            );
          })}
        </section>
        <Pagination
          onChange={(event, page) => setPageNumber(page)}
          sx={{ marginRight: "8px" }}
          count={Math.ceil((newsData?.totalResults || 0) / 6)}
          hidePrevButton
        />
      </main>
      {
        openForm &&
        <div className='absolute h-screen w-screen bg-gray-900 opacity-50'></div>
      }
      {
        openPopup &&
        <CardPopup openPopup={openPopup} setOpenPopup={setOpenPopup}/>
      }
    </>
  );
}