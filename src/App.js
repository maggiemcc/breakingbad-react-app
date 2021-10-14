import "./App.css";
import CharacterContainer from "./components/CharacterContainer";
import Box from "@mui/material/Box";
import { BreakingBadContextProvider } from "./contexts/BreakingBadContext";

const App = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div className="App">
      <div style={{ maxWidth: 1200, margin: "auto" }}>
        <div
          style={{
            border: "2px solid white",
            padding: "2% 0",
            background: "black",
          }}
        >
          <div style={{ display: "block", justifyContent: "center"}}>
            <div>
            <h1>Breaking Bad</h1>
            </div>
            <div style={{margin: "auto 0"}}>
            </div>
          </div>

          <BreakingBadContextProvider>
          <CharacterContainer sx={{ m: "auto", width: "auto" }} />
          </BreakingBadContextProvider>
          
        </div>
        <div>
          <h5 style={{ color: "white", margin: 0, padding: "4%" }}>
            DGM3790 {bull} © Maggie McCausland {bull} 2021
          </h5>
        </div>
      </div>
    </div>
  );
};

export default App;
