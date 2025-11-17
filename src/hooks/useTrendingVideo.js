import { useEffect } from "react"
import { options } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addTrendingVideo } from "../redux/slices/moviesSlice"

const useTrendingVideo = (youtubeId) => {
    const dispatch = useDispatch()

    const fetchTrendingVideo = async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/${youtubeId}/videos`, options)
        const data = await resp.json()
        const filterTrailer = data.results.filter(id => id.type === "Trailer")[0] 
        const showTrailer = filterTrailer ? filterTrailer : data.results[0]
        dispatch(addTrendingVideo({trailer: showTrailer}))
    }

    useEffect(() => {
        fetchTrendingVideo()
    }, [])
}

export default useTrendingVideo