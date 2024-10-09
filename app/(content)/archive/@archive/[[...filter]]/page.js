import NewsList from "@/components/news-List";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p> No news for the selected period.</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  console.log(+selectedYear, typeof +selectedYear)
  const availableYears = await getAvailableNewsYears()
  console.log(availableYears);
  
  if (selectedYear && !availableYears.includes(+selectedYear)) {
    throw new Error("Year not Found");
  }
  if (
    selectedMonth &&
    !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)
  ) {
    throw new Error("Invalid Fiter.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
