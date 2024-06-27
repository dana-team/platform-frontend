import React, { ReactNode, useCallback, useEffect, useState } from "react";
import ArrowDown from "@/assets/arrow-down.svg?react";
import ArrowUp from "@/assets/arrow-up.svg?react";
import Typography from "@/components/typography/Typography";
import getFirstLetter from "@utils/getFirstLetter";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@hooks/useAuth";
import ColorModal from "../../thumbnailModal/ColorModal";
import { useThumbnail } from "@hooks/thumbnail/useThumbnail";
import { thumbnails } from "../../thumbnailModal/thumbnails";
import Menu from "@components/menu/Menu";
import Divider from "@components/menu/Divider";

type UserPopoverProps = {
  user: string;
};

const UserPopover = React.memo(({ user }: UserPopoverProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showColorModal, setShowColorModal] = useState(false);
  const [currentThumbnail, setCurrentThumbnail] = useState<ReactNode | null>();
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  const ToggleColorModal = () => {
    setShowColorModal(!showColorModal);
    setIsMenuOpen(false);
  };

  const HandleSignOut = () => {
    signOut();
    queryClient.removeQueries();
  };

  const { thumbnail: thumbnailIndex } = useThumbnail();
  const { signOut } = useAuth();
  const queryClient = useQueryClient();
  const getFirstLetterOfUser = useCallback(() => getFirstLetter(user), [user]);

  useEffect(() => {
    setCurrentThumbnail(
      thumbnails.find((thumbnail) => thumbnail.index === thumbnailIndex)?.icon
    );
  }, [thumbnailIndex]);

  return (
    <>
      <div className="place-self-end flex items-center h-full pr-5.5">
        <div className="relative flex justify-center items-center">
          {currentThumbnail}
          <div className="text-white absolute inset-0 flex justify-center items-center">
            {getFirstLetterOfUser().toUpperCase()}
          </div>
        </div>
        <div
          className="group flex items-center cursor-pointer justify-between"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Typography
            variant="body-md"
            className="text-mono/basic-4 pl-3 group-hover-white"
          >
            {user}
          </Typography>
          <Typography className="text-mono/basic-4 group-hover-white">
            {isMenuOpen ? <ArrowUp /> : <ArrowDown />}
          </Typography>
        </div>
        <div ref={setTarget}></div>
        {isMenuOpen && (
          <Menu isOpen={true} target={target} className="mt-3">
            <div
              className="hover:cursor-pointer relative flex justify-start items-center px-[6px] py-[5px] gap-4 hover:bg-mono/basic-13 focus:bg-mono/basic-14 focus:text-mono/basic-1"
              onClick={ToggleColorModal}
            >
              <div className="w-5 h-5 flex justify-center items-center ">
                {currentThumbnail}
              </div>
              <Typography variant="body-md" className="text-mono/basic-4">
                Change color
              </Typography>
            </div>
            <Divider />
            <div
              className="hover:cursor-pointer relative flex justify-start items-center px-[6px] py-[5px] gap-4 hover:bg-mono/basic-13 focus:bg-mono/basic-14 focus:text-mono/basic-1"
              onClick={HandleSignOut}
            >
              <Typography variant="body-md" className="text-mono/basic-4">
                Sign out
              </Typography>
            </div>
          </Menu>
        )}
      </div>
      {showColorModal && <ColorModal setShowModal={setShowColorModal} />}
    </>
  );
});
export default UserPopover;
