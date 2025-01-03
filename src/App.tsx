import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem hideBelow={"lg"} area={"aside"} bg={"gold"}>
        Aside
      </GridItem>
      <GridItem area={"main"} bg={"teal"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
