import { Container, Grid } from "@mui/material";
import "./App.css";
import TourCard from "./components/TourCard";

function App() {
  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
