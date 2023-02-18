import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StageCircle = (props) => {
  const { stage } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette);
  const stageNumber = stage ? stage[0] : null;
  const progressAngle = (stageNumber / 8) * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
          conic-gradient(transparent 0deg ${progressAngle}deg, ${colors.blueAccent[500]} ${progressAngle}deg 360deg),
          ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `40px`,
        height: `40px`
      }}
    >
      <Typography p="10px 14px" color={colors.greenAccent[300]}>
        {stageNumber}
      </Typography>
    </Box>
  );
};

export default StageCircle;
