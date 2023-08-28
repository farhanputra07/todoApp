import classes from './Header.module.css';
const Header = () => {
  return (
    <nav className={classes.navbar}>
      <h3 className={classes.navbar__title}>
        GET THINGS DONE
        <span>TOMORROW</span>
        TODAY!
      </h3>
    </nav>
  );
};

export default Header;
