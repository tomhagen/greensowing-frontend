import React from "react";
import Head from "next/head";
import Header from "../../components/sharing-components/header";
import DetailNewsBox from "../../components/news/news-detail";
import Footer from "../../components/sharing-components/footer";
import Copyright from "../../components/sharing-components/copyright";
import RegisterButton from "../../components/sharing-components/register";
import { singlePost } from "../../controller/post";
import {
  APP_NAME,
  APP_DESCRIPTION,
  DOMAIN,
  API,
  FACEBOOK_APP_ID
} from "../../config";

const Detail = ({ post, query }) => {
  const head = () => {
    return (
      <Head>
        <title>
          {post.title} - {APP_NAME}
        </title>
        <meta name="description" content={post.mdesc} />
        <link rel="cannonical" href={`${DOMAIN}/news/${query.slug}`} />
        <meta property="og:title" content={`${post.title} - ${APP_NAME}`} />
        <meta property="og:description" content={post.mdesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${DOMAIN}/news/${query.slug}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />
        <meta property="og:image" content={`${API}/post/photo/${post.slug}`} />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:secure_url"
          content={`${API}/post/photo/${post.slug}`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="fb:app_id" content={`${FACEBOOK_APP_ID}`} />
        <meta property="article:section" content="Technology news" />
        <meta property="article:published_time" content={post.createdAt} />
        <meta property="article:updated_time" content={post.updatedAt} />
        <meta name="twitter:description" content={post.mdesc} />
        <meta name="twitter:title" content={post.mtitle} />
        <meta name="twitter:image" content={`${API}/post/photo/${post.slug}`} />
        <link rel="icon" href="/static/images/logo_new.png" sizes="800x800" />
      </Head>
    );
  };
  return (
    <React.Fragment>
      {head()}
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
