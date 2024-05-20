import Icon from "@mdi/react";
import Typography from "components/Typography/Typography";

type SecondaryButtonProps = {
  className?: string;
  text: string;
  icon?: string;
};

const SecondaryButton = ({ className, text, icon }: SecondaryButtonProps) => (
  <div
    className={`flex px-5 py-2.5 border border-green/basic-7 bg-mono/basic-13 rounded-lg text-mono/basic-1 ${className}`}
  >
    {icon && <Typography children={<Icon path={icon} size={1} />} />}
    <Typography children={text} className="font-sans font-medium pl-1" />
  </div>
);

export default SecondaryButton;
