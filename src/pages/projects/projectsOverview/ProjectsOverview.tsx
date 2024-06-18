/// <reference types="vite-plugin-svgr/client" />
import Typography from "@/components/typography/Typography";
import Container from "@/components/container/Container";
import React, { useState } from "react";
import Pagination from "@components/pagination/Pagination";
import DisplayGrid from "@components/display/displayGrid/DisplayGrid";
import DisplayList from "@components/display/displayList/DisplayList";
import DisplayBar from "@components/display/displayBar/DisplayBar";
import AddProjectModal from "@components/projects/project/addProjectModal/AddProjectModal";
import Spinner from "@components/spinner/Spinner";
import ProjectCard from "@components/projects/project/card/ProjectCard";
import ProjectRow from "@components/projects/project/row/ProjectRow";
import NoProjects from "@components/projects/project/noProjects/NoProjects";
import { useProjects } from "@hooks/projects/useProjects";
import { PROJECTS_PAGE_SIZE } from "@common/consts";

const ProjectsOverview: React.FC = React.memo(() => {
  const [isDisplayGrid, setDisplayGrid] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentAmount,
    isPlaceholderData,
    projects,
    isSuccess,
    isLoading,
    setSearch,
  } = useProjects();

  const ProjectDisplay = isDisplayGrid ? DisplayGrid : DisplayList;
  const ProjectComponent = isDisplayGrid ? ProjectCard : ProjectRow;

  return (
    <Container>
      <div className="mt-10 text-mono/basic-1 mx-10 w-full flex flex-col">
        <div className="max-h-1/4">
          <Typography variant="headline-xl">Projects Overview</Typography>
          <DisplayBar
            success={isSuccess}
            isDisplayGrid={isDisplayGrid}
            setShowModal={setShowModal}
            setDisplayGrid={setDisplayGrid}
            setSearch={setSearch}
            button="Add new project"
          />
        </div>
        {isLoading ? (
          <Spinner />
        ) : isSuccess && projects.length > 0 ? (
          <>
            <div className="flex justify-center custom-scroll overflow-y-scroll grow-0 max-h-[65%] h-[65%] min-h-[65%]">
              <ProjectDisplay>
                {projects.map((name, i) => (
                  <ProjectComponent
                    key={i}
                    name={name}
                    anaf="anaf name"
                    mador="mador name"
                  />
                ))}
              </ProjectDisplay>
            </div>
            <div className="flex items-center justify-between h-[10%]">
              <Typography variant="body-sm" className="text-mono/basic-4">
                Shows {currentAmount} of {totalPages}
              </Typography>
              <Pagination
                currentPage={currentPage}
                totalCount={totalPages}
                pageSize={PROJECTS_PAGE_SIZE}
                onPageChange={setCurrentPage}
                isPlaceholderData={isPlaceholderData}
              />
            </div>
          </>
        ) : (
          <NoProjects
            setShowModal={setShowModal}
            className="max-h-[65%] h-[65%] min-h-[65%]"
          />
        )}
      </div>
      {showModal && <AddProjectModal setShowModal={setShowModal} />}
    </Container>
  );
});

export default ProjectsOverview;
