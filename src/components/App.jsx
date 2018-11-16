import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

const kegList = [
{
  name: 'Hennessy Richard',
  brand: 'Hennessy',
  price: 4944,
  abv: 20
},
{
  name: 'Belvedere Vodka',
  brand: 'Belvedere Vodka',
  price: 45,
  abv: 15
},
{
  name: 'Bourbon',
  brand: 'Breckenridge',
  price: 450,
  abv: 40 
},
{
  name: 'Courvoisier VS Cognac',
  brand: 'Courvoisier',
  price: 632,
  abv: 23
}
]

function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <KegList {...props} kegList={kegList} />
          )}
        />
        {/* <Route
          path="/producelist"
          render={props => (
            <ProduceList {...props} availableProduce={availableProduce} />
          )}
        /> */}
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
