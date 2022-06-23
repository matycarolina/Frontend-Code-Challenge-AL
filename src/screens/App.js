import { List, Typography } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SearchIcon from '@mui/icons-material/Search';
import "../style/App.css";
import { AddCar } from "./AddCar";
import { CirculateOrNot } from "./CirculateOrNot";

function App() {
  return (
    <>
      <header>
        <h1>Bienvenido!</h1>
        <Typography>Que desea hacer?</Typography>
      </header>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <DirectionsCarIcon />
              </ListItemIcon>
              <ListItemText primary="Ingreso de información de auto" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Consulta si un vehículo registrado puede circular" />
            </ListItemButton>
          </ListItem>
        </List>
      {/* <ol>
          <li>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                <AddCar />;
              }}
            >
              Ingreso de información de auto
            </Link>
          </li>
          <li>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                <CirculateOrNot />;
              }}
            >
              Consulta si un vehículo registrado puede circular
            </Link>
          </li>
        </ol> */}
    </>
  );
}

export default App;
