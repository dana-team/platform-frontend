/// <reference types="vite-plugin-svgr/client" />
import CloseIcon from "@/assets/x-close.svg?react";
import React from "react";
import Typography from "@/components/typography/Typography";
import Modal from "@components/modal/Modal";
import Input from "@components/form/input/Input";
import Select from "@components/form/select/Select";
import Button from "@components/button/Button";
import { usePostProject } from "@hooks/projects/usePostProject";
import Spinner from "@components/spinner/Spinner";
import { useHierarchies } from "@hooks/hierarchies/useHierarchies";

type AddProjectModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddProjectModal = React.memo(({ setShowModal }: AddProjectModalProps) => {
  const {
    register,
    handleSubmit,
    formErrors,
    onSubmit,
    isLoading,
    isSuccess,
    error,
  } = usePostProject();

  React.useEffect(() => {
    if (isSuccess) {
      setShowModal(false);
    }
  }, [isSuccess, setShowModal]);

  const {
    hierarchies,
    error: hierarchiesError,
    isLoading: isLoadingHierarchies,
  } = useHierarchies();
  console.log(hierarchiesError ? "error here" : "not here");

  return (
    <Modal darkenBackground={true}>
      {isLoading ? (
        <div className="bg-mono/basic-12 border border-mono/basic-10 h-85 w-150 flex flex-col py-8 px-10 rounded-md">
          <Spinner />
        </div>
      ) : !error ? (
        <div className="flex flex-col items-center justify-center relative">
          <CloseIcon
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setShowModal((prev) => !prev)}
          />
          <div className="bg-mono/basic-12 border border-mono/basic-10 h-85 w-150 flex flex-col py-8 px-10 rounded-md">
            <Typography
              variant="headline-lg"
              className="text-mono/basic-1 gap-2 mb-5 h-8"
            >
              Create a new project
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                {...register("name", {
                  required: "project name is required",
                })}
                error={formErrors.name?.message as string}
                label="Project name*"
                autoComplete="off"
                placeholder="Insert project name..."
              />
              {isLoadingHierarchies ? (
                <div className="w-full h-20 mb-2 justify-center flex items-center">
                  <Spinner />
                </div>
              ) : hierarchiesError ? (
                <Typography
                  variant="body-lg"
                  className="text-velvet/basic-5 h-16 border-mono/basic-11 bg-mono/basic-13 rounded-md border flex justify-center items-center"
                >
                  Failed to load hierarchies. Please try again later.
                </Typography>
              ) : (
                <Select
                  {...register("hierarchy", {
                    required: "hierarchy is required",
                  })}
                  label="Hierarchy*"
                  options={hierarchies}
                  placeholder="Insert"
                  error={formErrors.hierarchy?.message as string}
                />
              )}

              <div className="flex items-center justify-between pt-3 h-13">
                <Button
                  variant="primary"
                  className="w-[140px]"
                  onClick={handleSubmit(onSubmit)}
                >
                  Create project
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  Close
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center relative">
          <CloseIcon
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setShowModal((prev) => !prev)}
          />
          <div className="bg-mono/basic-12 border items-center justify-center border-mono/basic-10 h-85 w-150 flex flex-col py-8 px-10 rounded-md">
            <Typography
              variant="headline-lg"
              className={`text-velvet/basic-5 mb-1 pt-0.75 h-5 ${
                error ? "" : "opacity-0"
              }`}
            >
              {error}
            </Typography>
          </div>
        </div>
      )}
    </Modal>
  );
});

export default AddProjectModal;
