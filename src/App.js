import {Routes, Route} from 'react-router-dom'
import AddTask from "./components/AddTask";
import Home from './components/Home';
import Timer from './components/Timer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import clockReducer from './components/feature/clockReducer';


const store = createStore(clockReducer);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='task-manager' element={<AddTask/>}/>
        <Route path='digital-clock' element={<Provider store={store}><Timer/></Provider>}/>
      </Routes>
    </div>
  );
}

export default App;
