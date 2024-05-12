import "./App.css";
import SideBar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";
import Button from "components/Button/Button";
import PrimaryButton from "components/Button/PrimaryButton";
import { mdiPlus } from "@mdi/js";
import SecondaryButton from "components/Button/Button";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import Login from "./Pages/Login";

// https://github.com/pmndrs/zustand
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="h-16">
        <Header projectName="project name" application="application name" />
      </div>

      <div className="w-full h-full flex">
        <SideBar />
        <div className="bg-neutral-800 grow min-w-0 bg-mono/basic-15">
          <div className="flex gap-4">
            <PrimaryButton
              text="Add new project"
              icon={mdiPlus}
              className="max-w-max"
              onClick={() => setShowModal(!showModal)}
            />

            <SecondaryButton
              text="Add new project"
              icon={mdiPlus}
              className="max-w-max"
            />

            {showModal && (
              <Modal
                setShowModal={setShowModal}
                children={<div className="bg-black w-20">hi</div>}
              />
            )}
          </div>
        </div>
      </div>
    </div>
    // <Login />
  );
}

export default App;
