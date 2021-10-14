import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CharacterCard = (props) => {
  const statusColor = props.character.status === "Alive" ? "darkgreen" : "darkred";

  let imageStyle = {
    height: "auto",
    // width: "auto",
    maxWidth: "190px",
    maxHeight: "180px",
    // maxHeight: "190px",
    // minWidth: "90px",
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
        bgcolor: "darkgray",
        "&:hover": {
          borderRadius: 4,
          bgcolor: statusColor,
        },
      }}
    >
      <CardContent
        sx={{
          padding: "2% 1%",
          margin: "auto",
          height: "100%",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", marginTop: "2%" }}
          color="primary.contrastText"
          typography="h6"
        >
          {props.character.name} <br></br>
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "16px",
          }}
          color="primary.contrastText"
          typography="h6"
          gutterBottom
        >
          ID: {props.character.char_id}
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
