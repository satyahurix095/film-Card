export function Movie({ name, poster, rating, summary }) {

  return (
    <div className="film-container">
      <img src={poster} />
      <div className="title-bar"><h2>{name}</h2> <h3>⭐{rating}</h3></div>
      <p>{summary}</p>
    </div>
  );
}
