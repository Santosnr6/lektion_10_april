import NavItem from '../navItem/NavItem';
import './navigation.css';

function Navigation({ direction }) {
    const navItems = [
        {
            page : 'Pokédex',
            path : '/',
        }, {
            page : 'Team Generator',
            path : '/teamGen'
        }, {
            page : 'Search Pokémon',
            path : '/search'
        }
        // 'Pokédex',
        // 'Team Generator',
        // 'Search Pokémons'
    ];

  return (
    <nav>
        <ul
            // style={{ flexDirection : direction }}
            className={ "navigation-list " + direction}
        >
            {
                navItems.map((navItem, index) => {
                    return <NavItem 
                               title={ navItem.page }
                               path={ navItem.path }
                               key={ index } 
                           />
                })
            }
        </ul>
    </nav>
  )
}

export default Navigation;
