import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Posts.module.css";
import { getComentsThunk } from "../../redux/reducers/postsReducer";
import { connect } from "react-redux";

class SelectPost extends React.Component {
  state = {};
  componentDidMount() {
    this.props.getComentsThunk(this.props.selectedPost.id);
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.main}>
          <p>TITLE: {this.props.selectedPost.title}</p>
          <p>USER ID: {this.props.selectedPost.userId}</p>
          <p>POST: {this.props.selectedPost.body}</p>
          <p>COMENTS:</p>
          <div className={styles.list}>
            {this.props.coments.map(com => (
              <div>
                <div>NAME: {com.name}</div>
                <div className={styles.com}>{com.body}</div>
              </div>
            ))}
          </div>
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
