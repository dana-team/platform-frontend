import Icon from "@mdi/react";
import Typography from "components/Typography/Typography";

type PrimaryButtonProps = {
  className?: string;
  text: string;
  icon?: string;
  onClick: any;
};

const PrimaryButton = ({
  className,
  text,
  icon,
  onClick,
}: PrimaryButtonProps) => (
  <div
    onClick={onClick}
    className={`flex items-center justify-center px-5 py-2.5 border border-green/basic-7 bg-green/basic-6 rounded-md text-mono/basic-16 ${className}`}
  >
    {icon && <Typography children={<Icon path={icon} size={1} />} />}
    <Typography children={text} className="font-sans pl-1" />
  </div>
);

export default PrimaryButton;
