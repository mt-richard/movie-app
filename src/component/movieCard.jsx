
const MovieCard = (props) => {
    const { data } = props;
    return(
        <div className="rounded mb-2 md:mb-0 md:w-1/5 bg-gray-800">
            <div className="w-full">
                <img src={data.Poster} alt="" className="w-full h-60 md:h-96 rounded-t object-cover"/>
            </div>
            <div className="items-center text-left px-3 text-gray-200 py-2">
                <h3 className="font-bold md:text-xl pb-3">{data.Title}</h3>
                <p className="text-gray-400">{data.Year}</p>
            </div>
        </div>
    )
}

export default MovieCard;