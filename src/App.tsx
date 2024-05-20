import "./index.css";
import SideBar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";
import Button from "components/Button/SecondaryButton";
import PrimaryButton from "components/Button/PrimaryButton";
import { mdiPlus } from "@mdi/js";
import SecondaryButton from "components/Button/SecondaryButton";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import Login from "./Pages/Login/Login";
import { BreadcrumbItem } from "components/Header/Breadcrumb/Breadcrumb";

const breadcrumbs: BreadcrumbItem[] = [
  { text: "Projects name", isDropdown: true, shouldAddDivider: false },
  // { text: "hi" },
];

// https://github.com/pmndrs/zustand
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="h-17">
        <Header
          breadcrumbs={breadcrumbs}
          user={{ username: "dana israeli", thumbnail: 2 }}
        />
      </div>

      <div className="w-full h-full flex">
        <SideBar />
        <div className="grow h-full min-w-0 bg-cover bg-no-repeat bg-login-pattern">
          <div className="h-full bg-mono/basic-15 bg-opacity-90">
            <div className="flex gap-4">
              {/* <PrimaryButton
                text="Add new project"
                icon={mdiPlus}
                className="max-w-max"
                onClick={() => setShowModal(!showModal)}
              />

              <SecondaryButton
                text="Add new project"
                icon={mdiPlus}
                className="max-w-max"
              /> */}

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
    </div>
    // <Login />
  );
}

export default App;
