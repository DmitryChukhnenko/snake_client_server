import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Game">Play</Link>
          </li>
          <li>
            <Link to="/Secret">Secret</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};


export default Navbar;