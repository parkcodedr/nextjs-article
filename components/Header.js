import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>Infinity <span>Idea</span></h1>
            <p className={headerStyles.description}>The home of tech solutions, scalable and high performance web application</p>
        </div>
    )
}

export default Header
