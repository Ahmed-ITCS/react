import './Page4.css'
import social_links from './social_links.svg'
const Page4 = ()=>{
    return(
        <div>
        <div class = "page4head">
            <p style = {{color : 'transparent'}}>-------------------------------------------</p>
        <h1>Social Media Links</h1>
        </div>
        <div style ={{display : 'flex'}}> 
            <p style ={{color : 'transparent'}}>----------------------------------------------------------------------------------------------------</p>
            <p style ={{fontSize:'30px'}}>Feel Free To Contact Us</p>
        </div>
        <div style ={{display : 'flex'}}>
            <p style = {{color : 'transparent'}}>----------------</p>
        <img src = {social_links} alt = "IMG" /></div>
        <br />
        <br />
        <br />
        <br />
        <div style = {{display : 'flex'}}>
            <p style = {{color : 'transparent'}}>------------------------------------------------------------------------------------------</p>
             <div class = "butt"><p>Get started</p></div>
          </div>
          <br />
          <br />
          <br />
        </div>
    ) 
}

export default Page4;