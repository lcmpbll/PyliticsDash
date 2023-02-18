import { Box, Typography, useTheme } from "@mui/material";
import StarRating from "./components/StarRating";
import StageCircle from "./components/Stage";
import ProbabilityHistory from "./components/ProbabilityHistory";
import FactorsLists from "./components/FactorsLists";
import { ControlCenter } from "./components/ControlCenter";
import { tokens } from "./theme";

export function OpportunityCard(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette);
  const { row, handleClose } = props;
  let stageName = "";
  if (row != null) {
    stageName = row.stage.replace(/[1-9]./g, "");
  }

  return (
    <Box className="popUp">
      <Box
        className="OpportunityCard"
        sx={{
          background: colors.blueAccent[900],
          color: colors.greenAccent[300],
          padding: "10px"
        }}
      >
        <ControlCenter margin="5px" handleClose={handleClose} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            // justifyContent: "spaceBetween"
            width: "content"
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "1fr 1fr 3fr"
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: ".5fr 3fr"
              }}
            >
              <Box padding="30px">
                <Typography variant="h4">{row ? row.oppId : null}</Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateRows: "1fr 1fr",
                  justifyContent: "start",
                  margin: "5px"
                }}
              >
                <Typography variant="h5">
                  {" "}
                  Opportunity: {row ? row.oppName : null}
                </Typography>
                <Typography variant="h5">
                  {" "}
                  Sales Rep: {row ? row.salesRepName : null}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                justifyContent: "start",
                padding: "10px",
                border: `2px solid ${colors.blueAccent[400]}`
              }}
            >
              <Typography variant="h5">Package Details</Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  justifyContent: "start space-between",
                  margin: "8px"
                }}
              >
                <Box
                  sx={{
                    margin: "auto"
                  }}
                >
                  <Typography> Product: {row ? row.product : null}</Typography>
                </Box>
                <Box
                  sx={{
                    margin: "auto",
                    maxWidth: "700px"
                  }}
                >
                  <Typography>
                    {" "}
                    Total price: ${row ? row.amount : null}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography margin="8px">Win Factors</Typography>
                <FactorsLists row={row ? row : null} type="positive" />
              </Box>
              <Box>
                <Typography color={colors.redAccent[400]} margin="8px">
                  Risk Factors
                </Typography>
                <FactorsLists row={row ? row : null} type="risk" />
              </Box>
            </Box>
          </Box>
          {/* //Stats */}
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "1fr 1fr 3fr",
              border: `2px solid ${colors.blueAccent[400]}`,
              padding: "3px",
              justifyContent: "center"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2px"
              }}
            >
              <Typography variant="h4" m="auto" color={colors.greenAccent[300]}>
                Stats
              </Typography>
              <Box
                sx={{
                  justifySelf: "center",
                  margin: "auto"
                }}
              >
                <StageCircle stage={row ? row.stage : null} />
              </Box>
              <Typography variant="p" margin="0px auto">
                {stageName ? stageName : null}
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "8px auto"
              }}
            >
              <Typography
                color={colors.greenAccent[300]}
                variant="h5"
                margin="18px"
              >
                Tier
              </Typography>
              <StarRating rating={row ? row.pilytixTier : null} />
            </Box>
            <Box
              sx={{
                justifyContent: "center"
              }}
            >
              <Typography
                variant="h5"
                color={colors.greenAccent[300]}
                margin="13px"
              >
                Probability
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateRows: "1fr 1fr",
                  justifyContent: "center"
                }}
              >
                <Typography variant="p">Rep Probability</Typography>
                <Typography m="auto">
                  {row ? row.repProbability : null}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateRows: "1fr 1fr",
                  justifyContent: "center"
                }}
              >
                <Typography variant="p">Pylitics Probability</Typography>
                <Typography m="0px auto">
                  {row ? row.pilytixProbability : null}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "300px",
                  overFlowY: "auto"
                }}
              >
                <Typography> Probability History</Typography>
                <br />
                <ProbabilityHistory row={row ? row : null} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
