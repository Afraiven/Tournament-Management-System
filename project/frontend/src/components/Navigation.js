import classes from './Navigation.module.css';

function Navigation() {
    return (
       <div className={classes.js}>
        <ul>
            <li>Zakładka 1</li>
            <li>Zakładka 2</li>
            <li>Zakładka 3</li>
            <li>Zakładka 4</li>
            <li>Zakładka 5</li>
            <li>Zakładka 6</li>
        </ul>
       </div>
    );
}

export default Navigation;
