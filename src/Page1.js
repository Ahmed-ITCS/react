import Header from './Header.js';
import Middleteext from './Middleteext.js';
import Imga from './Image.js';
import Dropdown from './Dropdown.js'
import './Page1.css'
const Page1 = ()=>{
  return(
    <div>
    <div class = "page1"><Header /></div>
    <div style = {{display : 'flex'}}><Middleteext />
    <br />
    <br />
    <br />
    <br />
    <p style={{color:'transparent'}}>-----------------------------------------------------------------------------</p>
    <br />
    <br />
    <br />
    <br />
    <Imga />    </div>
    <Dropdown />
    </div>
  )
};
export default Page1;
//style={{ display : 'fixed'}}>
//style={{ backgroundColor:"black"},{height: '335%'}}> 