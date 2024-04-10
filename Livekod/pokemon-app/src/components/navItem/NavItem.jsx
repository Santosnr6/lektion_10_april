import './navItem.css';
import { Link } from 'react-router-dom';


function NavItem({ title, path }) {
  return (
    <li className="nav-item">
      <Link to={ path } className="nav-link" >{ title }</Link>
    </li>
  )
}

export default NavItem
