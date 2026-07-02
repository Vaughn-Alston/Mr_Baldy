import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DataCard from "./dataCard";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import mainMusicAsset from './assets/audio/mainMusic.wav';
import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';




const myAPIkey = import.meta.env.DINO_API_KEY;

function App() {
  //   const playBuzz = () => {

  //   const audio = new Audio(mainMusicAsset);

  //   audio.loop = true; // Set the volume to 10%
  //   audio.play();
  // };

  //  This will be the API key that I will be using to get the data from the API

  const selectedCategory = 'love'; // Replace with the desired category

  // API Ninjas doesnt not allow you to pass the api key in the URL so I will have to pass it in the header of the fetch request
  // const baseURL = `https://api.api-ninjas.com/v2/randomquotes?categories==${selectedCategory}`;

  const [data, setData] = useState([]);

  useEffect(() => {

  fetch(`https://api.api-ninjas.com/v2/randomquotes?categories=${selectedCategory}`,
    {
      method: 'GET',
      headers: {
        'X-Api-Key':'ilfaf1OxzW6pvhSH1cQ3KbYFix0nECtgRTpoR3o0'
      }
    })
    .then((response) => response.json())
    .then((result) => {


      const quote = result.map(({quote}) => quote);
      console.log(quote);
      setData(quote);
    })
    .catch(error => console.log("error", error));

  }, []);










console.log(data);
return (
  <>
    {/* Above the button I want to put a search bar that will hold the user type response */}
    
    {/* Here I Will create the UI That will act as a tablet for the user to input there response */}
  
    <div>
      <img src="src/assets/images/App.jsx.jpeg" alt="Description" />

      <Typography variant="h6" component="div" gutterBottom>
       
      </Typography>
      





      {/* Here I will put the cards that will hold the text */}
       <Card sx={{ maxWidth: 345 }}>
    
      <CardContent>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {data}
        </Typography>
      </CardContent>
      
    </Card>

       
      
    

   



    </div>
<Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="fullWidth" id="fullWidth" />
</Box>



  <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
    >
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </ButtonGroup>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
      </ButtonGroup>

      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
      </ButtonGroup>


      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <Button>0</Button>
        <Button>Clear</Button>

      </ButtonGroup>

      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <Button>Backspace</Button>
      </ButtonGroup>
    </>
  );
}
export default App;