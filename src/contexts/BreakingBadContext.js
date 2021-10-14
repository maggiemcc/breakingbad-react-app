import * as React from 'react';
import axios from 'axios';

const BreakingBadContext = React.createContext({
  characters: [],
})

export const BreakingBadContextProvider = (props) => {
  const [characters, setCharacters] = React.useState([])

  React.useEffect(() => {
    const fetchCharacters = async () => {
      const breakingBadURL = `/.netlify/functions/breakingBad`

      try {
        const response = await axios.get(breakingBadURL)
        const characters = await response.data
        setCharacters(characters)
      } 
      catch (error) {
        console.log(error)
      }
    }
    fetchCharacters()
  }, [])

  return (
    <BreakingBadContext.Provider value={{
      characters,
    }}>
      {props.children}
    </BreakingBadContext.Provider>
  )
}

export const useBreakingBadContext = () => React.useContext(BreakingBadContext)