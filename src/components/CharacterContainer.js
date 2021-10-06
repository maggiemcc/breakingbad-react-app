import * as React from "react";
import { characters } from "../data/characters";
import CharacterCard from "./CharacterCard";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./FilmCard.css";
import Typography from "@mui/material/Typography";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const characterInfoContainerStyle = {
  textAlign: "left",
  // borderBottom: "1px solid gray",
  padding: "2%",
  width: "auto",
};

const characterInfoStyle = {
  margin: 0,
  padding: "2% 0",
  // border: "1px solid red",
  // display: "inline",
  display: "block",
  paddingRight: "2.5%",
  width: "auto",
  fontSize: "14px",
};

const favoriteStyle = {
  margin: "2% auto",
  padding: "2% 0px 4% 0",
  color: "white",
  border: "2px solid white",
  borderRadius: "50px / 100px",
  width: "90%",
  maxWidth: "500px",
  minHeight: "130px",
};

const bull = (
  <Box
    component="span"
    style={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </Box>
);


const CharacterContainer = () => {
  const [open, setOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState([]);
  const handleClose = () => setOpen(false);
  const handleOpen = (character) => {
    setOpen(true);
    setModalInfo(() => {
      return [character];
    });
  }


  const [favorites, setFavorites] = React.useState([]);
  const addToFavorites = (character) => {
    console.log(`${character.name} was clicked`);
    if (!favorites.includes(character.name)) {
      setFavorites((prevState) => [...prevState, character.name]);
    } else {
      setFavorites(() => {
        return favorites.filter((item) => item !== character.name);
      });
    }
  };

  return (
    <Box>
      <div style={favoriteStyle}>
        <h3 style={{ margin: "2% 0", textDecoration: "underline" }}>
          {" "}
          My Favorites{" "}
        </h3>

        <div>
          {favorites.map((characterId) => {
            return (
              <div key={characterId} style={{ padding: "0 5%" }}>
                <p
                  style={{
                    margin: "1% 0",
                    fontFamily: "courier",
                    fontWeight: "bold",
                  }}
                >
                  {bull} {characterId}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {characters.map((character) => {
          return (
            <CharacterCard
              key={character.char_id}
              addToFavoritesFunction={addToFavorites}
              modalFunction={handleOpen}
              character={{ ...character }}
              sx={{ margin: "auto" }}
            />
          );
        })}
      </div>

      <div>
  
        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            {modalInfo.map((character) => {
              return (
                <div style={characterInfoContainerStyle} key={character.char_id}>
              <Typography variant="h6" style={{textAlign: 'center', fontWeight: 'normal', borderBottom: "1px solid gray"}}>More About: <b>{character.name}</b> </Typography>

                  <div style={{textAlign: 'center'}}>
                    <p style={characterInfoStyle}>Born: {character.birthday}</p>
                    {/* <div style={{display: "inline", paddingRight: "2%"}}>{bull}</div> */}
                    <p style={characterInfoStyle}>Nickname: {character.nickname}</p>
                    {/* <div style={{display: "inline", paddingRight: "2%"}}>{bull}</div> */}
                    <p style={characterInfoStyle}>Portrayed By: {character.portrayed}</p>
                    {/* <hr></hr> */}
                    {/* <div> */}
                    {/* <h6 style={{margin: "2%",}}>Opening Crawl</h6> */}
                    {/* <p style={characterInfoStyle}>{character.opening_crawl}</p> */}
                    {/* </div> */}
                  </div>
                </div>
              );
            })}
            {/* <a
              href="https://www.starwars.com/films"
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  margin: "2%",
                  padding: "2%",
                  background: "darkRed",
                  color: "white",
                  borderRadius: "20px",
                  "&:hover": {
                    bgcolor: "darkBlue",
                  },
                }}
              >
                Learn More About Star Wars
              </Typography>
            </a> */}
          </Box>
        </Modal>
      </div>
    </Box>
  );
};

export default CharacterContainer;
