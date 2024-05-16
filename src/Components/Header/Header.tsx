import Typography from "components/Typography/Typography";

type HeaderProps = {
  projectName: string;
  application?: string;
};

const Header = ({ projectName, application }: HeaderProps) => (
  <div className="w-full text-left bg-mono/basic-16 font-normal h-full justify-center place-content-center gap-4 text-base pl-6">
    <nav aria-label="breadcrumb">
      <div className="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 font-extralight">
        <Typography
          className={` transition-all duration-300 text-secondary opacity-80 pr-3`}
          children={"RCS Platform"}
        />
        <div className="flex cursor-pointer items-center font-sans text-base font-extralight leading-normal antialiased transition-colors duration-100 text-mono/basic-4 bg-mono/basic-14 rounded-full py-2.25">
          <div className="group flex items-center pr-5 pl-4 gap-4">
            <Typography
              children={projectName}
              className="group-hover:text-white transition-all duration-300"
            />
            {/* <Typography
                  children={
                    <Icon
                      path={mdiTriangleSmallDown}
                      size={0.7}
                      className="group-hover:text-white transition-all duration-300"
                    />
                  }
                /> */}
          </div>

          {/* <Icon
                path={mdiMinus}
                rotate={90}
                size={1}
                className=" hover:text-white"
              />
              <Typography
                children={application}
                className="hover:text-white transition-all duration-300"
              /> */}
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
