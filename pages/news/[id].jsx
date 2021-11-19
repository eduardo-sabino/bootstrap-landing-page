import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import ArticleList from "../../components/ArticleList";
import styles from "../../styles/News.module.css";

export default function News({ pageNumber, articles }) {
  const router = useRouter();

  const goToPreviousPage = () => {
    if (pageNumber > 1) router.push(`/news/${pageNumber - 1}`);
  };
  const goToNextPage = () => {
    if (pageNumber < 5) router.push(`/news/${pageNumber + 1}`);
  };
  
  return (
    <Container>
      <ArticleList articles={articles} hasHero={false} />
      <div className={styles.paginator}>
        <div
          className={pageNumber === 1 ? styles.disabled : styles.active}
          onClick={goToPreviousPage}
        >
          Previous
        </div>
        #{pageNumber}
        <div
          className={pageNumber < 5 ? styles.active : styles.disabled }
          onClick={goToNextPage}
        >
          Next
        </div>
        
      </div>
    </Container>
  );
}

export const getServerSideProps = async (context) => {
  const pageNumber = context.query.id;
  if (!pageNumber || pageNumber < 1 || pageNumber > 7)
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
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
