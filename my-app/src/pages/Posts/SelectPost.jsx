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
    console.log("PROPS", this.props);
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.main}>
          <h3>TITLE: {this.props.selectedPost.title}</h3>
          <div>
            <h3>USER ID: {this.props.selectedPost.userId}</h3>
          </div>
          <div>
            <h3>POST: {this.props.selectedPost.body}</h3>
          </div>
          <div>COMENTS:</div>
          {this.props.coments.map(com => (
            <div>
              <div>NAME: {com.name}</div>
              <div className={styles.com}>{com.body}</div>
            </div>
          ))}
        </div>
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
