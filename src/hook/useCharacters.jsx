import {reqCharacters} from "../service/characters"
import { useEffect, useState } from "react"

export const useCharacters = (page) =>{

const [characters, setCharacter] = useState()

  
  useEffect(() => {
      reqCharacters(((page-1)*20)).then((data)=>{
        setCharacter(data.results)
        console.log(data)
      })
  }, [page])

    //retorno del hook
    return{
        characters,
    }
}