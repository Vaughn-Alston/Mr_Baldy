import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


// Matrix data type that will hold all the values on keypad
const KEYPAD_ROWS = [

  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['0', 'Submit'],
  ['Backspace', 'Clear']

];


export default function ButtonCard({onKeypress})  {

  return (

<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', mt: 2 }}>
      
      {KEYPAD_ROWS.map((row, rowIndex) => (
        <ButtonGroup key={rowIndex} variant="contained" aria-label="Basic button group">
          {row.map((num) => (
            <Button key={num}
            
            onClick={() => onKeypress(num)} >
              {num}
            </Button>
          ))}
        </ButtonGroup>
      ))}

    </Box>


  );

}





  





