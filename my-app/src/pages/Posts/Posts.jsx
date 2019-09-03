import React from "react";
import styles from "./Posts.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Posts = props => {
  let [currentPage, setCurrentPage] = useState(props.currentPage);

  props.currentPageAC(currentPage);
  let pagesCount;
  let pageSize = 10;
  if (props.posts && props.posts.length > 0) {
    pagesCount = Math.ceil(props.posts.length / pageSize);
  }
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let currentArrPosts = props.posts.filter(
    post => post.id > currentPage * 10 - 10 && post.id <= currentPage * 10
  );

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
            <div className={styles.page}>
              <NavLink
                className={styles.nav}
                to={"/selectpost"}
                onClick={() => props.setSelectedPostAC(Post)}
              >
                <div className={styles.text}>POST ID {Post.id}</div>
                <div className={styles.text}>TITLE {Post.title}</div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
