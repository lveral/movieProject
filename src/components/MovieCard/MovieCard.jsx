import './MovieCard.css'

function MovieCard({ rating, poster, title, isFav }) {
    return (
        <div className='card'>
            <p className='rating'>{rating}</p>
            <img src={poster} alt="" className='poster' />
            <div className="info">
                <p className='title'>{title}</p>
                {
                    isFav ?
                        <button className='is-fav'>В избранном</button> :
                        <button className='to-fav'>В избранное</button>
                }
            </div>



        </div>
    )
}

export default MovieCard;
