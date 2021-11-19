import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/NavLink";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Offcanvas, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/TopNav.module.css";

export default function TopNav() {
  return (
    <Navbar className={styles.bg} variant="dark">
      <Container className={styles.container}>
        <Link href="/" passHref>
          <Navbar.Brand>
            Web <span className={styles.span}>News</span>
          </Navbar.Brand>
        </Link>
        <Row className="align-items-end">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <NavLink className={styles.ml}>Home</NavLink>
            </Link>
            <Link href="/news/1" passHref>
              <NavLink className={styles.ml}>News</NavLink>
            </Link>

          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
}
