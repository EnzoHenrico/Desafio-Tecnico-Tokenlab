import './App.css';
import './components/style/body.components.css';
// import Header from './components/header';
// import Hero from './components/hero';
// import Signin from './components/signin';
// import Signup from './components/signup';

import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Link to='/home'>Home</Link>
      <Link to='/signin'>Login</Link>
      <Link to='/signup'>Register</Link>
    </div>
  );
};

{/* <Route path='/login'>
            <Signin />
        </Route>
        <Route path='/register'>
            <Signup />
        </Route>
        <Route path='/home'>
            <Header />
            <Hero /> 
        </Route> */}

export default App;