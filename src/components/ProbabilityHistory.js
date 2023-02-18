import { Box, Typography } from "@mui/material";
import History from "./History";

function ProbabilityHistory(props) {
  const { row } = props;
  if (row != null && row.probabilityHistory != null) {
    row.probabilityHistory.sort((a, b) => {
      return a.daysAgo - b.daysAgo;
    });

    return (
      <Box
        sx={{
          overflowY: "auto"
        }}
      >
        {row.probabilityHistory
          ? Object.values(row.probabilityHistory).map((instance, index) => (
              <History
                key={index}
                daysAgo={instance.daysAgo}
                repProb={instance.repProb}
                pilytixProb={instance.pilytixProb}
              />
            ))
          : null}
      </Box>
    );
  } else {
    return (
      <Box>
        <Typography>No available history</Typography>
      </Box>
    );
  }
}

export default ProbabilityHistory;

{
  /* */
}
