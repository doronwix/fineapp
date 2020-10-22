import React, { useContext, useRef } from 'react';
import {financialContext} from '../providers/DataProvider';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button  } from '@material-ui/core';
import history from '../history';

const useStyles = makeStyles(theme => ({
    Section:{
      display: "flex",

    },
    TextField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    IconButton: {
      marginTop: theme.spacing(3),
    }
  }));


const TextInput = (props) => {
    const classes = useStyles();
    const { name, label, type } = props;
    const {  updateSymbol } = useContext(financialContext);
    const inputEl = useRef(null); 
    const updateCallback = ()=>{
      updateSymbol(inputEl.current.value);
      history.push('/Dashboard')
    }
    return(
        <div className={classes.Section}>
        <label htmlFor={name}>{label}</label>
        <div><TextField
            label="Symbol"
            className={classes.TextField}
            type={type}
            name={name}
            id={name}            
            margin="normal"
            variant="outlined"
            inputRef={inputEl}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                updateCallback()
              }}}
        /></div>

        <div><Button className={classes.IconButton} onClick={updateCallback} >Search</Button></div>
      </div>
  
     
    )
};
export default TextInput;