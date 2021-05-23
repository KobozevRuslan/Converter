import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {Button, ButtonGroup, IconButton, Input, Paper, TextField, Typography} from '@material-ui/core';
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp';

const Display = styled.div`
  border-radius: 6px;
  padding: 15px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background: #f8f8f8;
  width: fit-content;
`;
const Exchange = () => {
  const initialLog = {
    RUR: [],
    EUR: [],
    USD: []
  }
  const data = useSelector(state => state.app.data);
  const currency = useSelector(state => state.app.currency);
  const [isSelling, setIsSelling] = useState(true)
  const rates = data.find(item => item.curr === currency);
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [ls, setLs] = useState(JSON.parse(localStorage.getItem('log')) || initialLog);

  const onOperationChange = (flag) => {
    setIsSelling(flag)
    setValue(0)
    setResult(0)
  }

  const onInputChange = (e) => {
    const val = Number(e.target.value);
    setValue(val)
    setResult((isSelling ? val * rates.buy : val * rates.sell).toFixed(2))
  }

  const onExchange = () => {
    const logs = JSON.parse(localStorage.getItem('log')) || initialLog;
    const logItem = `${isSelling ? 'Sell' : 'Buy'} ${value} ${currency}, receive ${result} UAH`
    logs[currency].push(logItem)
    localStorage.setItem('log', JSON.stringify(logs));
    setLs(logs);

  }

  const onClearLog = () => {
    setLs(initialLog);
    localStorage.removeItem('log')
  }

  return (
    <div>
      <Link to="/">
        <IconButton>
          <KeyboardBackspaceSharpIcon />
        </IconButton>
      </Link>
      <ButtonGroup color="primary">
        <Button onClick={() => onOperationChange(true)}>Sell</Button>
        <Button onClick={() => onOperationChange(false)}>Buy</Button>
        <Button onClick={onClearLog} color="secondary">Clear log</Button>
      </ButtonGroup>

      <hr/>
      <Typography variant="h4">{isSelling ? 'Sell' : 'Buy' }-{currency}</Typography>
      <div>
        <div>
          <TextField
            variant="outlined"
            type="number"
            label={`Amount: ${currency}`}
            placeholder={`Amount: ${currency}`}
            value={value ? value : ''}
            onChange={onInputChange}
          />
          <div>
            <Display>You will receive: {result} UAH</Display>
          </div>
          <hr/>
          <Button variant="outlined" onClick={onExchange}>Exchange</Button>
        </div>
      </div>
      <div>
        <Typography variant="subtitle1">Log:</Typography>
        <ul>
          {ls[currency].map((item, i) => <li key={i}>{item}</li>)}
        </ul>

      </div>
    </div>
  );
};

export default Exchange;

