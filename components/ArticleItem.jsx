import { Col, Row } from "react-bootstrap";
import styles from "../styles/ArticleItem.module.css";
export default function ArticleItem({ article, md, lg, isMain }) {
  const goToArticle = () => {
    window.location.href = article.url;
  };

  return (
    <Col
      md={md ? md : "6"}
      lg={lg ? "auto" : "4"}
      className={isMain && styles.main}
    >
      <br />
      <div className={isMain && styles.main}>
        {article.urlToImage ? (
          <div className={styles.imgContainer} onClick={goToArticle}>
            <img src={article.urlToImage} className={styles.img} />
          </div>
        ) : (
          <div className={styles.imgContainer} onClick={goToArticle}>
            <img
              src={
                "https://thumbs.dreamstime.com/b/breaking-news-illustration-text-label-speech-bubble-96248365.jpg"
              }
              className={styles.img}
            />
          </div>
        )}
        <div className={isMain && styles.mainContent}>
          {isMain ? (
            <h1 className={styles.h1} onClick={goToArticle}>
              {article.title}
            </h1>
          ) : (
            <h2 className={styles.h2} onClick={goToArticle}>
              {article.title}
            </h2>
          )}
          <p className={styles.p} onClick={goToArticle}>
            {article.description}
          </p>
        </div>
      </div>
    </Col>
  );
}
