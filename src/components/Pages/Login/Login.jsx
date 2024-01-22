import React from "react";
import ButtonUsage from "../../ButtonUsage";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import image1 from '/Users/kusalranasinghe/Work Folder/Macarons Digital/sort-out-react/src/static/images/loginImage.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function Login(){
    return (
        <Container maxWidth="" sx={{bgcolor: '#1A76D2', height: '100vh'}}>
            <Container maxWidth="xl" sx={{paddingTop: '20vh'}}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '100%', bgcolor: '#fff', borderRadius: '10px'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={2}>
                        <Grid xs={7}>
                            <div>
                                <img src={image1} alt="" width="500px" style={{paddingLeft: '20%'}}/>
                            </div>
                        </Grid>
                        <Grid xs={4}
                              sx={{
                                  bgcolor: '#fff', borderRadius: '10px', textAlign: 'center', padding: '3%', pb: '0',
                              }}
                        >
                            <div>
                                <Typography variant="h3" gutterBottom
                                            sx={{
                                                color: '#1A76D2', textAlign: 'center', fontWeight: 'bold',
                                            }}
                                >
                                    Welcome to <br></br>BillWise9
                                </Typography>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Username" variant="outlined"/>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Password" variant="outlined"/>
                            </div>
                            <div>
                                <Button variant="contained"
                                        sx={{
                                            m: 1, width: '100%', p: 1, textAlign: 'right', fontWeight: 'bold',
                                        }}
                                >Log In</Button>
                            </div>
                            <div>
                                <Button variant="text"
                                        sx={{
                                            m: 1, width: '100%', p: 1, textAlign: 'right', fontWeight: 'bold',
                                        }}
                                >Forgot Password</Button>
                            </div>
                            <div>
                                <Button variant="contained" color="warning"
                                        sx={{
                                            m: 1, width: '100%', p: 1, textAlign: 'right', fontWeight: 'bold',
                                        }}
                                >Admin Login</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Container>

    );
}


export default Login;