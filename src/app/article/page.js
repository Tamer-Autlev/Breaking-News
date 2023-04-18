import "./index.scss";
const page = ({ searchParams }) => {
  const slug = searchParams;
  console.log(slug);
  return (
    <article className="article-page">
      <h1>{slug.title}</h1>
      <img src={slug.urlToImage} />
      <p className="description">{slug.description}</p>
    </article>
  );
};
export default page;
