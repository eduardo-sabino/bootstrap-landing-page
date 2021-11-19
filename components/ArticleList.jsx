import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles, hasHero }) {
  const firstArticle = articles[0];

  return (
    <Container>
      {hasHero && (
        <Row>
          <ArticleItem article={firstArticle} md="auto" lg="6" isMain={true} />
        </Row>
      )}
      <Row>
        {articles.map(
          (article, index) =>
            index > 0 && <ArticleItem article={article} key={index} />
        )}
      </Row>
    </Container>
  );
}
