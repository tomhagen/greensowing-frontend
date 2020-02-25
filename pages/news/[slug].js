import React from "react";
import Header from "../../components/sharing-components/header";
import DetailNewsBox from "../../components/news/news-detail";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";
import { singlePost } from "../../controller/post";

const Detail = ({ post, query }) => {
  return (
    <React.Fragment>
      <Header />
      <DetailNewsBox detailNews={post} />
      <Footer />
      <Copyright />
      <RegisterButton />
    </React.Fragment>
  );
};

Detail.getInitialProps = ({ query }) => {
  return singlePost(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { post: data, query };
    }
  });
};

export default Detail;
