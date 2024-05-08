import { Outlet, useRouterState } from "@tanstack/react-router";
import BackgroundContainer from "@/components/container/Container";
import Sidebar from "@/components/sidebar/Sidebar";

const Project: React.FC = () => {
  const router = useRouterState();
  return (
    <>
      <Sidebar currentPath={router.location.pathname} />
      <BackgroundContainer>
        <Outlet />
      </BackgroundContainer>
    </>
  );
};

export default Project;
