import NewsList from "@/components/news-List";
import { getAllNews } from "@/lib/news";

export default async function newsPage() {
  const news = await  getAllNews()
  
  return (
    <>
      <NewsList news={news} />;
    </>
  );
}
