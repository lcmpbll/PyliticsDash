import { Typography, Box } from "@mui/material";

function History(props) {
  const { daysAgo, pilytixProb, repProb } = props;
  return (
    <Box
      sx={{
        textAlign: "center"
      }}
    >
      <Typography>{daysAgo} days ago</Typography>
      <Typography>Pilytix {pilytixProb}</Typography>
      <Typography>Rep {repProb}</Typography>

      <hr />
    </Box>
  );
}
export default History;
