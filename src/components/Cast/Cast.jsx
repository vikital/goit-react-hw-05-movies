import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { fetchActorMovies } from "apiMovies/fetchMovies"
export const Cast = () => {
    const {id} = useParams()
    const [catsArry,setCatsArry] = useState([])
    const actorMovies = async id => {
        const response = await fetchActorMovies(id)
        return response
    }
    useEffect(() => {
        actorMovies(id).then(response => {
            setCatsArry(response.data.cast)
        })
         // eslint-disable-next-line
    },[])
    try{
    return(
        <>
        <ul>
        {catsArry.map((e,i )=> {
           return( <li key={i}>
                <img src={`https://image.tmdb.org/t/p/w300${e.profile_path}`} alt="" />
                <h3>{e.name}</h3>
                <p>{e.character}</p>
            </li>)
        })}
        </ul>
        </>
    )}catch{
        return
    }
}