import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavCards from "./NavCards";

function News() {
    const [articles, setArticles] = useState([]);
    const { category } = useParams();
    const apiKey = "pub_4699415ee453ce9c23dee8e321523d45275df"; 
    useEffect(() => {
        async function fetchArticles() {
            try {
                const categoryParam = category ? `&category=${category}` : '';
                const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${apiKey}&country=us${categoryParam}`);
                // console.log(response.data);

                if (response.data && response.data.results) {
                    setArticles(response.data.results);
                } else {
                    console.error('No articles found in the response.');
                }
            } catch (error) {
                console.error("Error fetching the news articles: ", error);
                alert("API not found or error fetching data");
            }
        }
        fetchArticles();
    }, [apiKey, category]);

    return (
        <div>
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <NavCards
                        key={index}
                        title={article.title}
                        description={article.description}
                        src={article.image_url}
                        url={article.link}
                    />
                ))
            ) : (
                <p>Loading articles...</p>
            )}
        </div>
    );
}

export default News;
