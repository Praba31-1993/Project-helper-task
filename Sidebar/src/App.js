import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
      <Sidebar />
        <div className="others"> other Pages</div>      
      </div>
      
    </div>
  );
}

export default App;
