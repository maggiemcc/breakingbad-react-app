import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";


const CharacterCard = (props) => {
  let imageStyle = {
    height: "auto",
    width: "93%",
    maxWidth: "150px",
    overflow: "hidden",
    borderWidth: 5,
    border: "3px solid white",
    borderRadius: 5,
    padding: 0,
    margin: 0,
  };

  const [favorite, setFavorite] = React.useState(false);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    props.addToFavoritesFunction(props.character);
  };

  const handleInfoClick = () => {
    console.log("thanks for clicking!");
    props.modalFunction(props.character);
  };


  // const characterImage = {
  //   textAlign: "left",
  //   borderBottom: "1px solid gray",
  //   padding: "2%",
  //   width: "auto",
  // };


  return (
    <Card
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        m: 2,
        bgcolor: "darkBlue",
        "&:hover": {
          borderRadius: 4,
          bgcolor: "darkRed",
        },
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontWeight: "bold" }}
          color="primary.contrastText"
          typography="h6"
          gutterBottom
        >
          {props.character.name} <br></br>
        </Typography>
        <div>
        {/* <div> */}
          <div style={{ margin: "auto" }}>
            <img style={imageStyle} src={props.character.img} alt="poster" />

            <div
              style={{
                display: "flex",
                margin: "0 auto",
                padding: 0,
                height: 40,
                lineHeight: 40,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "2.5",
                  paddingRight: "0.3%",
                }}
                color="primary.contrastText"
                typography="h6"
              >
                ID: {props.character.char_id}
              </Typography>
              <CardActions>
                <IconButton
                  sx={{ p: 0, m: 0, color: favorite ? "#F00" : "#fff" }}
                  onClick={handleFavoriteClick}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  sx={{ p: 0, m: 0, color: "white" }}
                  onClick={handleInfoClick}
                >
                  <InfoIcon />
                </IconButton>
              </CardActions>
              
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
