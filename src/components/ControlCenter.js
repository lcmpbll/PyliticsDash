import { Box } from "@mui/material";

export function ControlCenter(props) {
  const { handleClose } = props;
  return (
    <Box className="controlCenter">
      <span className="close-icon" onClick={handleClose}>
        x
      </span>
    </Box>
  );
}
