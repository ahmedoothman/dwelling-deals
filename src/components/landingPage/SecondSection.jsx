import MultiActionAreaCard from "./SecondSectionMui";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
function SecondSection() {
    return (
        <>
        <Box sx={{ width: '100%', textAlign: "center", marginTop: { xs: '4%', md:'3%'} }}>
          <Typography variant="h4" sx={{ fontWeight: "500", color: "#201E43" }}>
            See how Trulia can help
          </Typography> 
      </Box> 
        <MultiActionAreaCard/>
        </>
    )
}

export default SecondSection;
