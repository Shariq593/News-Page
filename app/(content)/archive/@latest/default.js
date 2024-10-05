import NewsList from "@/components/news-List";
import { getLatestNews } from "@/lib/news"

export default async function DefaultNews(){
    const latestNews = getLatestNews();
    return <>
        <h1>Latest News</h1>
        <NewsList news={latestNews}/>
    </>

}