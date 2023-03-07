// import PropTypes from "prop-types";

// function MovieComponent({ coverImg, title, summary, genres }) {
//   return (
//     <div>
//       <img src={coverImg} alt={title} />
//       <h2>{title}</h2>
//       <p>{summary}</p>
//       <ul>
//         {genres.map((g) => (
//           <li key={g}>{g}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// MovieComponent.PropTypes = {
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(ProTypes.string).isRequired,
// };

// export default MovieComponent;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieComponent({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieComponent.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieComponent;
