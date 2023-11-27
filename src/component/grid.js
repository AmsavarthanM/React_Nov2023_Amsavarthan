import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './de.css';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function BasicGrid() {
  return (
   
    <div style={{marginTop:'20px',display:'flex',flexDirection:'row',flexFlow:'row wrap',justifyContent:'space-evenly'}}>
            <div><a href='#'> <img style={{width:'220px',height:'270px'}} src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/Living-room-185x180-1.png'/></a></div>
            <div><a href='#'> <img style={{width:'220px',height:'270px'}} src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/bathroom-185x180-1.png'/></a></div>
            <div><a href='#'> <img style={{width:'220px',height:'270px'}} src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/Tiling-Work-185x180-1.png'/></a></div>
            <div><a href='#'> <img style={{width:'220px',height:'270px'}} src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/Full-home-185x180-1.png'/></a></div>
      </div>
      // {/* <div>
      // <h2 style={{textAlign:'center'}}>Our Services in Renovation</h2>
      // </div> */}
   
    // {/* <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid xs={3}>
    //       <div>
    //         <h4 style={{marginLeft:"120px"}}>Living Room</h4>
            
    //       </div>
          
    //     </Grid>
    //     <Grid xs={3}>
    //       <div>
    //         <h4 style={{marginLeft:"130px"}}>Bathroom</h4>
    //             <img  style={{borderRadius:20,height:"250px",width:"250px",marginLeft:"60px"}}className="ABC" src={require("./images/a2.png")} alt="img1"/>

    //       </div>
    //     </Grid>
    //     <Grid xs={3}>
    //       <div>
    //         <h4 style={{marginLeft:"150px"}}>Tiling </h4>
    //         <img  style={{borderRadius:20,height:"250px",width:"250px",marginLeft:"60px"}}className="ABC" src={require("./images/a4.png")} alt="img1"/>

    //       </div>
    //     </Grid>
    //     <Grid xs={3}>
    //       <div>
    //         <h4 style={{marginLeft:"130px"}}>Bedroom</h4>
    //         <img  style={{borderRadius:20,height:"250px",width:"250px",marginLeft:"60px"}}className="ABC" src={require("./images/a3.png")} alt="img1"/>

    //       </div>
    //     </Grid>
        
    //   </Grid>
    //   <br></br>
    //   <br></br>
    //   <br></br>
    //   <br></br>
    //   <Grid container spacing={2} >
    //     <Grid xs={4}>
    //       <div>
    //         <h4 style={{marginLeft:"300px"}}>Fabrication</h4>
    //         <img  style={{borderRadius:20,height:"250px",width:"250px",marginLeft:"230px"}} className="ABC" src={require("./images/a5.png")} alt="img1"/>
    //       </div>
          
    //     </Grid>
    //     <Grid xs={4}>
    //       <div>
    //         <h4 style={{marginLeft:"210px"}}>Kitchen</h4>
    //             <img  style={{borderRadius:20,height:"250px",width:"250px",marginLeft:"130px"}}className="ABC" src={require("./images/a6.png")} alt="img1"/>

    //       </div>
    //     </Grid>
    //     <Grid xs={4}>
    //       <div>
    //         <h4 style={{marginLeft:"60px"}}>Room Extension</h4>
    //         <img  style={{borderRadius:20,height:"250px",width:"250px",marginRight:"270px"}}className="ABC" src={require("./images/a7.png")} alt="img1"/>

    //       </div>
    //     </Grid>

    //   </Grid> */}
    // {/* </Box> */}
  );
}
