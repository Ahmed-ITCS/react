import './Page3head.css'
import companies from './companies.svg'
const Page3head = ()=>{
    return(
        <div>
        <div class = "page3">
            <p style = {{color:'transparent'}}>---------------------------</p>
            <h1>We have helped more than 1000 companies</h1>
        </div>
        <div style={{display : 'flex'}}>
        <p style = {{color:'transparent'}}>--------------------</p>
        <img src= {companies} alt = "IMG"/>
        </div>
        <br />
        <br />
        <br />
        </div>
    )

}

export default Page3head;