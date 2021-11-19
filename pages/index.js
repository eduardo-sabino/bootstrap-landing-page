import ArticleList from "../components/ArticleList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

export default function Home({ pageNumber, articles }) {
  return (
    <Container>
      <ArticleList articles={articles} hasHero={true}/>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const pageNumber = 1
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=7&apiKey=${process.env.NEWS_KEY}&page=${pageNumber}`
  );
  const apiJson = await apiResponse.json();
  const { articles } = apiJson;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
