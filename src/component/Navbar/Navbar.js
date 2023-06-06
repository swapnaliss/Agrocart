import { useEffect, useState, useRef } from "react";
import { Navbar, Container, FormControl, Nav, Dropdown, Badge, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { ACTION_TYPE } from "../../utils";
import { BsFillCartFill, BsHeartFill } from 'react-icons/bs'
// import "./Navbar.css";

export default function NavbarCard() {
  const { token } = useAuth();
  const { cart, wishlist, dataDispatch, setLoader, drawer, setDrawer } = useData();
  const navigate = useNavigate();
  let timer = useRef();
  const [input, setInput] = useState("");

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      dataDispatch({
        type: ACTION_TYPE.SEARCH,
        payload: input,
      });
      setLoader(true);
      setTimeout(() => setLoader(false), 500);
      if (input.trim().length > 0) {
        navigate("/product");
      }
    }, 500);
  }, [input]);

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/" > Agro-Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder='Search a Product'
            className='m-auto'
            type="search"
            name="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
              <BsFillCartFill color="white" fontSize="25px" style={{ marginRight: 20 }} onClick={() => navigate("/cart")} />
          </Dropdown>
          <Button variant="link" className="nav-link" onClick={() => navigate("/wishlist")}>
            <BsHeartFill color="white" fontSize="25px" style={{ marginRight: 20 }} />
          </Button>
          <Button variant="primary" onClick={() => navigate("/user_profile")}>{token ? "User Profile" : "Sign In"}</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
