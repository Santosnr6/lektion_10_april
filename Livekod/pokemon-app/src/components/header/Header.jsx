import './header.css';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

function Header() {
  return (
    <header className="page-header">
        <Logo />
        <Navigation direction={ 'flex-row' } />
    </header>
  )
}

export default Header;
