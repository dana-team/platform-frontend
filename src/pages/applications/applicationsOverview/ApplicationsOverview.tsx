import { useApplications } from "@hooks/applications/useApplications";
import React, { useState } from "react";
import Container from "@/components/container/Container";
import Typography from "@components/typography/Typography";
import DisplayGrid from "@components/display/displayGrid/DisplayGrid";
import DisplayList from "@components/display/displayList/DisplayList";
import DisplayBar from "@components/display/displayBar/DisplayBar";
import Spinner from "@components/spinner/Spinner";
import CappCard from "@components/applications/application/card/CappCard";
import CappRow from "@components/applications/application/row/CappRow";
import Pagination from "@components/pagination/Pagination";
import { PROJECTS_PAGE_SIZE } from "@common/consts";
import Plus from "@/assets/plus.svg?react";
import NoSearchResults from "@components/projects/noSearchResults/NoSearchResults";
import NoApplication from "@components/applications/noApplications/NoApplication";
import Button from "@components/button/Button";
import { Link } from "@tanstack/react-router";

type ApplicationsOverviewProps = {
  projectName: string;
};

const ApplicationsOverview = React.memo(
  ({ projectName }: ApplicationsOverviewProps) => {
    const [isDisplayGrid, setDisplayGrid] = useState(true);

    const {
      currentPage,
      setCurrentPage,
      totalCount,
      currentAmount,
      isPlaceholderData,
      capps,
      isSuccess,
      isLoading,
      setSearch,
      search,
    } = useApplications();

    const ProjectDisplay = isDisplayGrid ? DisplayGrid : DisplayList;
    const ProjectComponent = isDisplayGrid ? CappCard : CappRow;

    const hasApps = isSuccess && currentAmount > 0;
    const noSearchResultsFound = !hasApps && search !== "";
    return (
      <Container>
        <div className="mt-10 text-mono/basic-1 mx-10 w-full flex flex-col">
          <div className="max-h-1/4">
            <Typography variant="headline-xs" className="text-mono/basic-4">
              {projectName}
            </Typography>
            <Typography variant="headline-xl">Overview</Typography>
            <DisplayBar
              success={isSuccess}
              isDisplayGrid={isDisplayGrid}
              setDisplayGrid={setDisplayGrid}
              setSearch={setSearch}
              button={
                <Link to={`/projects/${projectName}/create-application`}>
                  <Button
                    variant="primary"
                    icon={<Plus />}
                    className="max-h-min truncate"
                  >
                    Add new application
                  </Button>
                </Link>
              }
            />
          </div>
          {isLoading ? (
            <Spinner />
          ) : hasApps ? (
            <>
              <div className="flex justify-center custom-scroll overflow-y-scroll grow-0 max-h-[65%] h-[65%] min-h-[65%]">
                <ProjectDisplay>
                  {capps.map((capp, i) => (
                    <ProjectComponent
                      key={i}
                      cappName={capp.capp.metadata.name}
                      projectName={projectName}
                      cappSource={capp.capp.source}
                      deployment={capp.capp.deployment}
                    />
                  ))}
                </ProjectDisplay>
              </div>
              <div className="flex items-center justify-between h-[10%]">
                <Typography variant="body-sm" className="text-mono/basic-4">
                  Showing {currentAmount} of {totalCount}
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
            <NoApplication
              projectName={projectName}
              className="max-h-[65%] h-[65%] min-h-[65%]"
            />
          )}
        </div>
      </Container>
    );
  }
);

export default ApplicationsOverview;
