import MenuItem from "./MenuItem";
import { Link } from "@tanstack/react-router";
import Typography from "@components/typography/Typography";

type LinkMenuItemProps = {
  to: string;
  title: string;
};
const LinkMenuItem = ({ to, title }: LinkMenuItemProps) => (
  <MenuItem>
    <Link to={to}>
      <Typography
        as="p"
        variant="body-md"
        className="text-mono/basic-4 capitalize "
      >
        {title}
      </Typography>
    </Link>
  </MenuItem>
);
export default LinkMenuItem;
