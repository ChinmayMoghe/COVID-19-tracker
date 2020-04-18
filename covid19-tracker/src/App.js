import React from 'react';
import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css'
class App extends React.Component {
  render() {
    return (
      <div className ={styles.container}>
        <h1>Covid19-Tracker</h1>
        <Cards/>
        <CountryPicker/>
        <Charts/>
      </div>
    );
  }
}

export default App;
