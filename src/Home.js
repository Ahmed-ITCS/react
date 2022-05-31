import './App.css';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';
import Page5 from './Page5.js';
import Page6 from './Page6.js';
const Home = ()=>{
  return(
    <div> 
    <div class = "page1"><Page1 /></div>
    <div class = "page2"><Page2 /></div>
    <Page3 />
    <Page4 />
    <Page5 />
    <div style = {{backGround : 'blue'}}> <Page6 /> </div>
    </div>
  )
};
export default Home;
//style={{ display : 'fixed'}}>