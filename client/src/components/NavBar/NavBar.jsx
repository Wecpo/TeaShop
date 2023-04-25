import styles from "./NavBar.module.css";

const NavBar = () => {
     return (
          <nav className={styles.NavBar}>
               <div>
                    <ul className={styles.crumb}>
                         <li>Главная</li>
                         <li>Профиль</li>
                         <li>Корзина</li>
                    </ul>
               </div>
          </nav>
     );
};

export default NavBar;