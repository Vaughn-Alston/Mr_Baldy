import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import ButtonCard from './ButtonCard'; 
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



const [answer, setAnswer] = useState("");

const handleKeypadPress = (num) => {

  if(num === "Clear") {
    // Clear the text
    setAnswer("");
  }
  if(num === "Submit") {


  }
  if(num === "Backspace") {



  } else {

  setAnswer( answer + String(num));


  }

}




  //  This will be the API key that I will be using to get the data from the API

  const selectedCategory = 'love'; // Replace with the desired category

  // API Ninjas doesnt not allow you to pass the api key in the URL so I will have to pass it in the header of the fetch request
  // const baseURL = `https://api.api-ninjas.com/v2/randomquotes?categories==${selectedCategory}`;

  const [data, setData] = useState([]);



  // DONT TOUCH 
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
      <TextField 
          fullWidth 
        
          id="fullWidth" 
          value={answer} 
          slotProps={{ input: { readOnly: true } }} // Optional: prevents direct typing
        />
</Box>






<ButtonCard onKeypress={handleKeypadPress} />
  






    </>
  );
}
export default App;