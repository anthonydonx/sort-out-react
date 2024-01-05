import React from "react";
import ButtonUsage from "../../ButtonUsage";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 10,
    border: '4px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    padding: '10px',
};
const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 60, textAlign: 'center' }} color="text.secondary" gutterBottom>
                16
            </Typography>
            <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                Ongoing Jobs
            </Typography>
        </CardContent>
    </React.Fragment>
);

function Home() {
    return (

      <>
      <div>
          <h2
              sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Helvetica',
                  fontWeight: 700,
                  color: 'inherit',
              }}
          >Dashboard</h2>
          <Divider
              sx={{
                  py: 0,
                  width: '98%',
                  //maxWidth: 360,
                  borderRadius: 0,
                  border: '3px solid',
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                  marginBottom: '20px',
              }}
          />

          <Card variant="outlined" sx={{ width: 300 }} className="redBox">{card}</Card>
          <Card variant="outlined" sx={{ width: 300 }} className="yellowBox">{card}</Card>


          <Box
              component="form"
              sx={{
                  '& > :not(style)': { m: 1, width: '50ch' },
              }}
              noValidate
              autoComplete="off"
          >
          <TextField id="outlined-basic" label="Job Number" variant="outlined" />
          </Box>

      </div>
      </>
    );
}

export default Home;