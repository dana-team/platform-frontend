import "./App.css";
import SideBar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";

// https://github.com/pmndrs/zustand
function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-16">
        <Header projectName="project name" application="application name" />
      </div>

      <div className="w-full h-full flex">
        <SideBar />
        <div className="bg-neutral-800 grow min-w-0 bg-secondary">try</div>
      </div>
    </div>
  );
}

export default App;
