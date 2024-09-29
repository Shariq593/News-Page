import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import NewsList from "@/components/news-List";

export default function newsPage() {
  return (
    <>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
