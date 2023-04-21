import "./Card.css";

export default function Card({movieData}) {
  

  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <img
          className="movie-card__img"
          src= {movieData.image}
        />
      </div>
      <div className="movie-card__body">
        <h2>
          { movieData.title } <br />
          <span style={{ fontSize: "25px" }}>&#9989;</span>
        </h2>
        <button className="movie-card__btn">เลือก</button>
      </div>
    </div>
  );
}
