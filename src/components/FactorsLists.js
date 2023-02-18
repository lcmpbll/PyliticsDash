import { useState } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { RxTriangleRight, RxTriangleDown } from "react-icons/rx";
export default function FactorsLists(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette);
  const { row, type } = props;
  if (row != null && row.pilytixFactorsIncreasingWin != null) {
    if (type === "positive") {
      return (
        <Box
          sx={{
            overflowY: "auto"
          }}
        >
          {row.pilytixFactorsIncreasingWin
            ? Object.values(
                row.pilytixFactorsIncreasingWin
              ).map((instance, index) => (
                <Factor
                  key={index}
                  name={instance.name}
                  message={instance.message}
                  weight={instance.weight}
                />
              ))
            : null}
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            overflowY: "auto"
          }}
        >
          {row.pilytixFactorsDecreasingWin
            ? Object.values(row.pilytixFactorsDecreasingWin).map(
                (instance, index) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "2px",
                      color: `${colors.redAccent[400]}`
                    }}
                  >
                    <Factor
                      key={index}
                      name={instance.name}
                      message={instance.message}
                      weight={instance.weight}
                    />
                  </Box>
                )
              )
            : null}
        </Box>
      );
    }
  }
}

function Factor(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette);
  const { name, message, weight } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ".5fr 1fr",
          width: "90vw",
          border: `2px solid ${colors.blueAccent[400]}`
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: ".2fr 1fr"
          }}
        >
          {isExpanded ? <RxTriangleDown /> : <RxTriangleRight />}
          <Typography>{name}</Typography>
        </Box>
        <Typography>{message}</Typography>
      </Box>
      {isExpanded ? (
        <Box
          sx={{
            display: "flex",
            // gridTemplateRow: '1fr',
            padding: "3px",
            justifyContet: "space-between",
            width: "100vw",
            border: `2px solid ${colors.blueAccent[400]}`
          }}
        >
          <Typography alignSelf="center"> Weight: {weight.value}</Typography>
          <Typography margin="auto">
            Description: {weight.description}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}
