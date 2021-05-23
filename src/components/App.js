import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Exchange from "./exchange";
import {useEffect} from "react";
import {fetchData} from "../store/actions/app";
import {useDispatch} from "react-redux";
import {Rates} from "./rates";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={ () => <Rates />} />
          <Route exact path="/exchange" render={ () => <Exchange />} />
          {/*<Redirect to="/" />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
