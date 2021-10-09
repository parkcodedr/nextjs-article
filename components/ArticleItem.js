import articlesStyle from '../styles/Article.module.css';
import Link from 'next/Link';

const ArticleItem = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`} key={article.id}>
            <a className={articlesStyle.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
