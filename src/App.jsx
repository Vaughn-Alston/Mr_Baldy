import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DataCard from "./dataCard";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import mainMusicAsset from './assets/audio/mainMusic.wav';

function App() {


  


  const playBuzz = () => {

  const audio = new Audio(mainMusicAsset);

  audio.loop = true; // Set the volume to 10%
  audio.play();
};




// This line of code will fetch the API from the link 
// Then the next line of code will then take that response which is a raw json data file and make it readable
//Then the next line will take that read able data and setfunFact, then we will grab the fact from the data object
// The bottom line will catch any errors
  const searchDogFunFact = () => {
    fetch(`https://dogapi.dog/api/v1/facts?number=2`)
      .then((response) => (response.json()))
      // add data to state
      .then((data) => setfunFact(data.facts))
      
      // this error function is pretty standard so I will leave this here
      .catch((error) => console.error(error));
  };
  // add a log to check your state






  return (

    <>
     


{/* Above the button I want to put a search bar that will hold the user type response */}


<Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="fullWidth" id="fullWidth" />
</Box>





   {/* Here I Will create the UI That will act as a tablet for the user to input there response */}







     <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
    >
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>







    </ButtonGroup>



<div>   



<img src="src/assets/images/App.jsx.jpeg" alt="Description" />

</div>




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