import Article from "../article/Article";
const SortingData = ({ api }) => {
  const dataWithOutImage = api.filter((article) => article.urlToImage === null);
  const dataWithImage = api.filter((article) => article.urlToImage !== null);
  const sortedData = [...dataWithImage, ...dataWithOutImage];
  return (
    <>
      {sortedData.map((article) => (
        <Article
          title={article.title}
          description={article.description}
          urlToImage={article.urlToImage}
          publishedAt={article.publishedAt}
          sourceName={article.source.name}
          key={article.title}
          link={article}
        />
      ))}
    </>
  );
};

export default SortingData;
