import React from "react";
import { useState, useEffect } from "react";
import { listPosts, removePosts } from "../../../controller/post";
import moment from "moment";
import { getCookie } from "../../../controller/auth";
import Swal from "sweetalert2";
import Link from "next/link";

const PostRead = () => {
  const [posts, setPosts] = useState([]);
  const token = getCookie("token");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(12);
  const [size, setSize] = useState(12);

  // Get all blogs
  const loadAllBlogsFromEndPoint = (skip, limit) => {
    listPosts(skip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  const loadMoreBlogs = limit => {
    let toSkip = skip + limit;
    listPosts(0, toSkip).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPosts(data);
        setSkip(toSkip);
      }
    });
  };
  // Show all blogs
  const showAllBlogsToScreen = () => {
    return posts.map((post, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td style={{ width: "40%" }}>{post.title}</td>
          <td>{moment(post.createdAt).format("LLL")}</td>

          <td>
            {post.categories && post.categories[0] && post.categories[0].name}
          </td>
          <td>{post.tags && post.tags[0] && post.tags[0].name}</td>
          <td>
            <Link href={`/dashboard-next/posts/${post.slug}`}>
              <a>
                <button className="btn btn-sm btn-warning ml-1">Edit</button>
              </a>
            </Link>

            <a>
              <button
                className="btn btn-sm btn-danger ml-1"
                onClick={() => showMessageDeletePost(post.slug)}
              >
                Delete
              </button>
            </a>
          </td>
        </tr>
      );
    });
  };

  const removeSinglePostFromTable = slug => {
    removePosts(slug, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadAllBlogsFromEndPoint();
      }
    });
  };

  const showMessageDeletePost = slug => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        Swal.fire("Deleted Successfully!", "", "success");
        removeSinglePostFromTable(slug);
      }
    });
  };

  useEffect(() => {
    loadAllBlogsFromEndPoint(0, 12);
  }, []);

  let styles = {
    table: {
      margin: "50px 0 0 0",
      padding: "0 25px",
      overflowY: "scroll",
      height: "600px"
    }
  };
  return (
    <React.Fragment>
      <div className="table-responsive" style={styles.table}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Title</th>
              <th scope="col">Created Date</th>
              <th scope="col">Category</th>
              <th scope="col">Tag</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>{showAllBlogsToScreen()}</tbody>
        </table>
      </div>

      <div
        onClick={loadMoreBlogs}
        style={{
          textAlign: "center",
          color: "red",
          fontSize: "15px",
          fontWeight: "bold",
          marginTop: "10px",
          cursor: "pointer"
        }}
      >
        Load more
      </div>
    </React.Fragment>
  );
};

export default PostRead;
