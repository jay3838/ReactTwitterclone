import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
