import * as React from "react";
// import { characters } from "../data/characters";
import CharacterCard from "./CharacterCard";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./FilmCard.css";
import Typography from "@mui/material/Typography";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from "@mui/material/CardActions";


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
  border: "1px solid gray",
  borderRadius: "8px",
  padding: "2%",
  width: "auto",
};

const characterInfoStyle = {
  margin: 0,
  padding: "2% 0",
  display: "block",
  paddingRight: "2.5%",
  width: "auto",
  fontSize: "14px",
};

const favoriteStyle = {
  marginBottom: "2%",
  padding: "2% 0px 4% 0px",
  color: "white",
  borderRight: "none",
  borderLeft: "none",
  borderBottom: "3px solid white",
  width: "100%",
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
  const breakingBadData =  useBreakingBadContext();

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

  const [showMore, setShowMore] = React.useState(false);
  const toggleShowMoreHandler = () => {
    setShowMore(prevShowMore => !prevShowMore);
  }
  return (
    <Box id="containerLayout">
      <div
        style={{
          marginTop: "2%",
          color: "black",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h4>Character Status:</h4>
        <h4 style={{ color: "darkGreen", padding: "0 2%" }}>Alive</h4>
        <h4 style={{ color: "darkRed" }}>Dead/Presumed Dead</h4>
      </div>

      <div style={favoriteStyle}>
        <div style={{}}>
        <h3 style={{ margin: "0 0 2% 0", padding: 0, textDecoration: "underline", display: "flex", flexWrap: "wrap", justifyContent: "center", }}>
          Favorite Characters

          <CardActions
             style={{ padding: 0, margin: 0 }}

          >
          <IconButton
             style={{padding: 0, margin: 0, color: "white" }}
             onClick={toggleShowMoreHandler}
          >
            <ExpandMoreIcon/>
          </IconButton>
          </CardActions>
        </h3>
        </div>

        {showMore && (
          <div>
            {favorites.map((characterId) => {
              return (
                <div
                  key={characterId}
                  style={{
                    padding: "0 5%",
                  }}
                >
                  <p
                    style={{
                      margin: "1% 0",
                      fontFamily: "courier",
                      fontWeight: "bold",
                    }}
                  >
                    {bull}
                    {characterId}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {breakingBadData.characters.map((character) => {
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
                <div
                  style={characterInfoContainerStyle}
                  key={character.char_id}
                >
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      borderBottom: "1px solid gray",
                    }}
                  >
                    {character.name}{" "}
                  </Typography>

                  <div style={{ textAlign: "left" }}>
                    <p style={characterInfoStyle}>
                      {bull} <b>Born:</b> {character.birthday}
                    </p>
                    <p style={characterInfoStyle}>
                      {bull} <b>Nickname:</b> {character.nickname}
                    </p>
                    <p style={characterInfoStyle}>
                      {bull} <b>Portrayed By:</b> {character.portrayed}
                    </p>
                    <p style={characterInfoStyle}>
                      {bull} <b>Occupation:</b> {character.occupation[0]},{" "}
                      {character.occupation[1]}
                    </p>
                    <p style={characterInfoStyle}>
                      {bull} <b>Status:</b> {character.status}
                    </p>
                  </div>
                </div>
              );
            })}
          </Box>
        </Modal>
      </div>
    </Box>
  );
};

export default CharacterContainer;
