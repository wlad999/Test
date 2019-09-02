import React from "react";
import styles from "./Posts.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Posts = props => {
  let [currentPage, setCurrentPage] = useState(props.currentPage);
  let [currentArrPosts, {}] = useState([]);

  // useEffect(() => {
  //   setCurrentArrPosts(currentArrPosts);
  // }, [currentArrPosts]);

  let pagesCount;
  let pageSize = 10;
  if (props.posts && props.posts.length > 0) {
    pagesCount = Math.ceil(props.posts.length / pageSize);
  }
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  currentArrPosts = props.posts.filter(
    post => post.id > currentPage * 10 - 10 && post.id <= currentPage * 10
  );
  // let setSelectedPost = p => props.setSelectedPostAC(p);
  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              className={currentPage === p ? styles.selectedPage : styles.page}
              onClick={e => {
                setCurrentPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
        {currentArrPosts.map(Post => {
          return (
            <div
              className={styles.page}
              // onClick={e => {
              //   props.setSelectedPostAC(Post);
              // }}
            >
              <NavLink
                to={"/selectpost"}
                onClick={() => props.setSelectedPostAC(Post)}
              >
                <div>POST ID {Post.id}</div>
                <div>TITLE {Post.title}</div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
