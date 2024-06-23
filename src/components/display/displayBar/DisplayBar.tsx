/// <reference types="vite-plugin-svgr/client" />
import Plus from "@/assets/plus.svg?react";
import Grid from "@/assets/grid.svg?react";
import Union from "@/assets/union.svg?react";
import Rectangle from "@/assets/rectangle2.svg?react";
import React from "react";
import SearchBox from "@components/searchBox/SearchBox";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Typography from "@components/typography/Typography";
import { useSearchProjects } from "@hooks/search/useSearch";
import Button from "@components/button/Button";

type DisplayBarProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setDisplayGrid: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isDisplayGrid: boolean;
  success: boolean;
  button: string;
};

const DisplayBar = React.memo(
  ({
    setDisplayGrid,
    setShowModal,
    isDisplayGrid,
    success,
    setSearch,
    button,
  }: DisplayBarProps) => {
    const onSearch: SubmitHandler<FieldValues> = async ({ search }) =>
      setSearch(search);

    const { register, handleSubmit } = useSearchProjects(onSearch);

    return (
      <div className="flex flex-row flex-nowrap w-full my-6">
        <form onSubmit={handleSubmit(onSearch)} className="grow items-center">
          <SearchBox
            disabled={!success}
            {...register("search")}
            autoComplete="search"
            placeholder="Search repositories and applications..."
          />
        </form>
        <div className=" flex items-center">
          <Typography className="px-3">
            <Rectangle />
          </Typography>
          <div onClick={() => setDisplayGrid(true)}>
            <Typography
              className={`rounded-l-lg p-2.25 border-y border-l border-mono/basic-11 cursor-pointer ${isDisplayGrid ? "text-mono/basic-1 bg-mono/basic-9" : "text-mono/basic-8 bg-mono/basic-13"}`}
            >
              <Grid />
            </Typography>
          </div>
          <div onClick={() => setDisplayGrid(false)}>
            <Typography
              className={`rounded-r-lg p-2.5 border border-mono/basic-11 cursor-pointer ${!isDisplayGrid ? "text-mono/basic-1 bg-mono/basic-9" : "text-mono/basic-8 bg-mono/basic-13"}`}
            >
              <Union />
            </Typography>
          </div>
          <Typography className="px-3">
            <Rectangle />
          </Typography>
          <Button
            variant="primary"
            icon={<Plus />}
            className="max-h-min truncate"
            onClick={() => setShowModal((prev) => !prev)}
          >
            {button}
          </Button>
        </div>
      </div>
    );
  }
);

export default DisplayBar;
