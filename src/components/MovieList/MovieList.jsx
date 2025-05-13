import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';


function MovieList() {
    const INITIAL_DATA = [
        {
            id: 0,
            rating: 324,
            poster: '/public/posters/1.svg',
            title: 'Black Widow',
            isFav: false
        },
        {
            id: 1,
            rating: 124,
            poster: '/public/posters/2.svg',
            title: 'Shang Chi',
            isFav: false
        },
        {
            id: 2,
            rating: 235,
            poster: '/public/posters/3.svg',
            title: 'Loki',
            isFav: false
        },
        {
            id: 3,
            rating: 123,
            poster: '/public/posters/4.svg',
            title: 'How I Met Your Mother',
            isFav: false
        },
        {
            id: 4,
            rating: 8125,
            poster: '/public/posters/5.svg',
            title: 'Money Heist',
            isFav: true
        },
        {
            id: 5,
            rating: 123,
            poster: '/public/posters/6.svg',
            title: 'Friends',
            isFav: false
        },
        {
            id: 6,
            rating: 12,
            poster: '/public/posters/7.svg',
            title: 'The Big Bang Theory',
            isFav: false
        },
        {
            id: 7,
            rating: 456,
            poster: '/public/posters/8.svg',
            title: 'Two And a Half Men',
            isFav: false
        }
    ]

    return (
        <div>
            {INITIAL_DATA.map((elem) => {
                return <MovieCard key={elem.id} rating={elem.rating} poster={elem.poster} title={elem.title} isFav={elem.isFav} />
            })}
        </div>
    )
}

export default MovieList
