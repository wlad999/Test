import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Posts.module.css";
import { getComentsThunk } from "../../redux/reducers/postsReducer";
import { connect } from "react-redux";
// import { useState, useEffect } from "react";

class SelectPost extends React.Component {
  //   let [currentPage, setCurrentPage] = useState(props.currentPage);
  //   let [currentArrPosts, {}] = useState([]);
  state = {};

  componentDidMount() {
    this.props.getComentsThunk(this.props.selectedPost.id);
  }

  render() {
    console.log("PROPS", this.props.coments);
    return (
      <div>
        <Header />
        <div>TITLE {this.props.selectedPost.title}</div>
        <div>USER ID {this.props.selectedPost.userId}</div>
        {this.props.coments.map(com => (
          <div className={styles.com}>{com.body}</div>
        ))}
        <Footer />
      </div>
    );
  }
}

const MSTP = state => ({
  selectedPost: state.postsPage.selectedPost,
  coments: state.postsPage.coments
});

export default connect(
  MSTP,
  { getComentsThunk }
)(SelectPost);
