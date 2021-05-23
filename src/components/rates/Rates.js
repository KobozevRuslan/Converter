import React from 'react';
import styled from 'styled-components'
import {Table as MuiTable} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {useDispatch, useSelector} from "react-redux";
import {changeCurrency} from "../../store/actions/app";
import {useHistory} from "react-router";

const Row = styled(({ isActive, ...otherProps}) => <TableRow {...otherProps} />)`
  transition: all .3s ease;
  background: ${({isActive}) => isActive ? '#d1d1d1' : '#fff'};
  &:hover {
    cursor: pointer;
    background: #f1f1f1;
  }
`;

const Table = styled(MuiTable)`
  max-width: 300px;
`;

const Rates = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const data = useSelector(state => state.app.data);
  const currency = useSelector(state => state.app.currency);

  const onCurrencyChange = (val) => {
    dispatch(changeCurrency(val))
    history.push('/exchange')
  }

  return (
    <div>
      <h4>Choose your currency from the list below</h4>
        <Table size="small" aria-label="Exchange rates">
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell>Buy</TableCell>
              <TableCell>Sell</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <Row key={row._id} onClick={() => onCurrencyChange(row.curr)} isActive={row.curr === currency}>
                <TableCell component="th" scope="row">{row.curr}</TableCell>
                <TableCell>{row.buy}</TableCell>
                <TableCell>{row.sell}</TableCell>
              </Row>
            ))}
          </TableBody>
        </Table>
    </div>
  );
};

export default Rates
