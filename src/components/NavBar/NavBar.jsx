import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";

const NavBar = () => {
  const { data, loading } = useCollection("categories");

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Proyecto Final</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            {loading ? null : (
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                {data[0].categories.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index}>
                      <Link to={`/category/${category}`}>{category}</Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
