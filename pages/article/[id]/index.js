import { server } from '../../../config';
import Link from 'next/Link';
import { useRouter } from 'next/router';

const Article = ({ article }) => {
    const router = useRouter();
    const { id } = router.query;
    console.log(article);
    return (
        <div>
            <>
                <h1> {article.title}</h1>
                <p>{article.body}</p>
                <br />
                <Link href="/">Go Back</Link>
            </>
        </div>
    )
}

export default Article;

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }));
    return {
        paths,
        fallback: false
    }
}
