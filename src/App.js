import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from 'react-router';

import HelloWorld from './labs/a6/hello-world';
import Labs from './labs/index.js';
import Tuiter from './tuiter/index.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route index
                 element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
          <Route path="/tuiter"
                 element={<Tuiter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
