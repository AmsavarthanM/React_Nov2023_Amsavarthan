
import NavScrollExample from './component/nav';

import Footer from './component/footer';
import './component/de.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
export function Home()
{
 return(
    <div>
   <NavScrollExample/>
   <div>
    <img style={{height:'600px',border:'1px solid black',marginTop:'50px'}} className='gg' src={require('./component/images/n3.jpg')}/>
    <br></br>
    <h3 className='f2' style={{textAlign:'center',marginTop:'30px'}}>Our Services in <span className='f2' style={{color:'#DB2E43'}}>Renovation</span></h3>

    <div style={{marginTop:'20px',display:'flex',flexDirection:'row',flexFlow:"row wrap",justifyContent:'space-evenly'}}>

            <div><img className='but'style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}} href='#' alt='#i' src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/Living-room-185x180-1.png'/>
            <h4 className='f2' style={{marginLeft:'45px',marginTop:'12px'}}><i>Living Room</i></h4>
            </div>

            <div><img className='but'style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}}href='#' alt='#i'src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/bathroom-185x180-1.png'/>
            <h4 className='f2' style={{marginLeft:'55px',marginTop:'12px'}}><span style={{color:'#DB2E43'}}>Bath Room</span></h4>
            </div>

            <div><img className='but'style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}} href='#' alt='#i'src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/Tiling-Work-185x180-1.png'/>
            <h4 className='f2' style={{marginLeft:'70px',marginTop:'12px'}} >Tiling</h4>
            </div>

            <div><img className='but'style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}}href='#' alt='#i' src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/Full-home-185x180-1.png'/>
            <h4 className='f2' style={{marginLeft:'60px',marginTop:'12px'}}><span style={{color:'#DB2E43'}}>Bed Room</span></h4>
            </div>

            
            </div>
            <br></br>
            <br></br>
    <div style={{marginTop:'20px',display:'flex',flexDirection:'row',flexFlow:"row wrap",justifyContent:'space-evenly'}}>
            <div ><img className='but' style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}} href='#' alt='#i' src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/Fabrication-185x180-1.png'/>
            <h4 className='f2' style={{marginLeft:'50px',marginTop:'12px'}}><span style={{color:'#DB2E43'}}>Fabrication</span></h4>
            </div>

            <div><img className='but'style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}} href='#' alt='#i'src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/kitchen-185x180-1.png'/>
            <h4 className='f2' style={{marginLeft:'65px',marginTop:'12px'}}>Kitchen</h4>
            </div>

            <div><img className='but' style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}}href='#' alt='#i' src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/extension-185x180-1.png'/>
            <h4 className='f2' style={{marginLeft:'24px',marginTop:'12px'}} ><span style={{color:'#DB2E43'}}>Room Extension</span></h4>
            </div>

            <div><img className='but'style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}} href='#' alt='#i'src='https://www.nobroker.in/prophub/wp-content/uploads/2022/03/seppage-185x180-1.png'/>
            <h4 className='f2' style={{marginLeft:'40px',marginTop:'12px'}}>Seepage Work</h4>
            </div>
            </div>
   </div>
  <br></br>
  <br></br>
  <div style={{border:'1px solid black'}}>
        <h5 style={{textAlign:'center',marginTop:'20px'}}><i>Get your Services <span style={{color:'#fd3753'}}>at door step</span> </i></h5>
        <br></br>
        <form style={{display:'flex',alignContent:'center',justifyContent:'center'}}>
                <input type='text' placeholder="Name"/>&nbsp;
                <input maxLength={10} type='phone' placeholder='Phone Number'/>&nbsp;
                
              
               
        </form>
        <br></br>
        <form style={{display:'flex',alignContent:'center',justifyContent:'center'}}>
              
                <select>
                        <option value hidden>Select City</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
               
        </form>
  <br></br>
  <span className='di'>
        <img style={{textAlign:'center'}} src='https://www.nobroker.in/prophub/wp-content/uploads/2023/09/icons8-phone.gif' alt='#'/>
  <h5 style={{textAlign:'center'}}>Toll Free No:<a>+91 9876543210</a></h5>
  </span>
  <br></br>
  </div>
    
    <div style={{border:'1px solid red',marginTop:'70px'}}>
        <br></br>
        <h3 style={{textAlign:'center'}}>Why we?</h3>
        
        <div style={{marginTop:'20px',display:'flex',flexDirection:'row',flexFlow:"row wrap",justifyContent:'space-evenly'}}>


            <div><img style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}}href='#' alt='#i'src='https://www.nobroker.in/prophub/wp-content/uploads/2022/02/inhouse-expert.png'/>
            <h4 className='f2' style={{marginLeft:'32px',marginTop:'12px'}}><span style={{color:'#DB2E43'}}>Star Rated Experts</span></h4>
            </div>

            <div><img style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}} href='#' alt='#i'src='https://www.nobroker.in/prophub/wp-content/uploads/2022/02/cost-transaparency.png'/>
            <h4 className='f2' style={{marginLeft:'70px',marginTop:'12px'}} >Cost Efficient</h4>
            </div>

            <div><img style={{width:'320px',height:'260px',border:'2px solid black',borderRadius:'50px'}}href='#' alt='#i' src='https://www.nobroker.in/prophub/wp-content/uploads/2022/02/warranty.png'/>
            <h4 className='f2' style={{marginLeft:'110px',marginTop:'12px'}}><span style={{color:'#DB2E43'}}>Warranty</span></h4>
            </div>

            
            </div>

    </div>

   <Footer/>
    </div>
 )
}