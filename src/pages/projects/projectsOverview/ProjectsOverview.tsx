/// <reference types="vite-plugin-svgr/client" />
import Typography from "@/components/typography/Typography";
import Container from "@/components/container/Container";
import React, { useState } from "react";
import Pagination from "@components/pagination/Pagination";
import DisplayGrid from "@components/display/displayGrid/DisplayGrid";
import DisplayList from "@components/display/displayList/DisplayList";
import DisplayBar from "@components/display/displayBar/DisplayBar";
import AddProjectModal from "@components/projects/addProjectModal/AddProjectModal";
import Spinner from "@components/spinner/Spinner";
import ProjectCard from "@components/projects/project/card/ProjectCard";
import ProjectRow from "@components/projects/project/row/ProjectRow";
import NoProjects from "@components/projects/noProjects/NoProjects";
import { useProjects } from "@hooks/projects/useProjects";
import { PROJECTS_PAGE_SIZE } from "@common/consts";
import NoSearchResults from "@components/projects/noSearchResults/NoSearchResults";
import Button from "@components/button/Button";
import Plus from "@/assets/plus.svg?react";

const ProjectsOverview: React.FC = React.memo(() => {
  const [isDisplayGrid, setDisplayGrid] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const {
    currentPage,
    setCurrentPage,
    totalCount,
    currentAmount,
    isPlaceholderData,
    projects,
    isSuccess,
    isLoading,
    setSearch,
    search,
  } = useProjects();

  const ProjectDisplay = isDisplayGrid ? DisplayGrid : DisplayList;
  const ProjectComponent = isDisplayGrid ? ProjectCard : ProjectRow;

  const hasProjects = isSuccess && currentAmount > 0;
  const noSearchResultsFound = !hasProjects && search !== "";

  return (
    <Container>
      <div className="mt-10 text-mono/basic-1 mx-10 w-full flex flex-col">
        <div className="max-h-1/4">
          <Typography variant="headline-xl">Projects Overview</Typography>
          <DisplayBar
            success={isSuccess}
            isDisplayGrid={isDisplayGrid}
            setDisplayGrid={setDisplayGrid}
            setSearch={setSearch}
            button={
              <Button
                variant="primary"
                icon={<Plus />}
                className="max-h-min truncate"
                onClick={() => setShowModal((prev) => !prev)}
              >
                Add a new project
              </Button>
            }
          />
        </div>
        {isLoading ? (
          <Spinner />
        ) : hasProjects ? (
          <>
            <div className="flex justify-center custom-scroll overflow-y-scroll grow-0 max-h-[65%] h-[65%] min-h-[65%]">
              <ProjectDisplay>
                {projects.map((project, i) => (
                  <ProjectComponent
                    key={i}
                    name={project.name}
                    hierarchy={project.hierarchy}
                  />
                ))}
              </ProjectDisplay>
            </div>
            <div className="flex items-center justify-between h-[10%]">
              <Typography variant="body-sm" className="text-mono/basic-4">
                Shows {currentAmount} of {totalCount}
              </Typography>
              <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={PROJECTS_PAGE_SIZE}
                onPageChange={setCurrentPage}
                isPlaceholderData={isPlaceholderData}
              />
            </div>
          </>
        ) : noSearchResultsFound ? (
          <NoSearchResults
            search={search}
            className="max-h-[65%] h-[65%] min-h-[65%]"
          />
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
