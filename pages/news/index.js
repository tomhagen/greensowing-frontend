import React from "react";
import Header from "../../components/sharing-components/header";
import NewsIntro from "../../components/news/news-intro";
import MainNews from "../../components/news/news-main";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";
import { useState, useEffect } from "react";
import { listPosts } from "../../controller/post";

const News = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    loadNewsListFromEndPoint(0, 12);
  }, []);

  const loadNewsListFromEndPoint = (skip, limit) => {
    return listPosts(skip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setNewsList(data);
      }
    });
  };
  return (
    <React.Fragment>
      <Header />
      <NewsIntro newsList={newsList} />
      <MainNews />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

export default News;
