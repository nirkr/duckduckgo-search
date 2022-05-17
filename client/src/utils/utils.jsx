import {Box} from '@mui/material';

/**
 * 
 * @param {*} label 
 * @param {*} value 
 * @returns the text with the colored words in it.
 */
export const formatLabel = (label, value) => {
    if (!value) {
      return label;
    }
    return (<Box >
      { label.split(value)
        .reduce((prev, current, i) => {
          if (!i) {
            return [current];
          }
          return prev.concat(<Box key={value + current} sx={{backgroundColor: 'yellow'}} display='inline'>{ value } </Box>, current);
        }, [])
      }
    </Box>);
  };