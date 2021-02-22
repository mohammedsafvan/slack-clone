import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="app_body">
        <Sidebar/>
        {/* React router -> chat secreen */}
      </div>
    </div>
  );
}

export default App;
