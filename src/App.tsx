import classes from './App.module.css'

const App = () => {
  return <div className={classes.app}>Hello, <span className={classes.appInternal}>world</span>!</div>;
};

export default App;
