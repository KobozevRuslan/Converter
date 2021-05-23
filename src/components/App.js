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
      123123
      {/* <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={ () => <Rates />} />
          <Route exact path="/exchange" render={ () => <Exchange />} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
