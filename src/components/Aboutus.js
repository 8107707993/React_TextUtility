// import React,{useState} from 'react'

export default function Aboutus(props) {
  
    // const[darkMode,setdarkMode]= useState({
    //     color: 'black',
    //     backgroundColor: 'white'

    // })
    // const [btnText,setBtnText]=useState("Enable Dark Mode ")
    // const [btnColor,setBtnColor]=useState({ 
        
    //     color:'white',
    //     backgroundColor:'black'
    // })

    // let toggelStyle =() =>{
       
    //     if(darkMode.color === 'black'){
    //         setdarkMode({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             // border:'1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //         // setBtnColor({color:'black',backgroundColor:'white',border:'1px solid black'});
    //     }
    //     else{
    //         setdarkMode({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             // border:'1px solid black'
    //         })
    //         setBtnText("Enable Dark Mode");
            // setBtnColor({color:'white',backgroundColor:'black'});
            // }
        // }

    let darkMode ={
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#495057':'#e8edf3'
    }
    return (
<>
    <div className="container" style={darkMode}>
        <h1 className="my-4">Bloger About Us</h1>
        <div className="accordion" style={darkMode} id="accordionExample">
            <div className="accordion-item" style={darkMode}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What Use 
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This Web-App useing to manipulate a text. Forexample you can Remove Extra Spaces, Uppercase to Lowercase,Lowercase to Uppercase, Copy Etc...! 
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={darkMode}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Devloper Ditails
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Copyrigh © by 2021 Sweb Tech. <br/>
                        Devloper name: Subhash Sharma <br/>
                        Address: Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, bhilwara, 311001.<br/>
                        Electronic Address: Sweb@TextUtils.com<br/>
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={darkMode}>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={darkMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Terms and Conditions
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Terms and Conditions Sample Generator
                    Help protect your website and its users with clear and fair website terms and conditions. These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.

                    Making your own terms and conditions for your website is hard, not impossible, to do. It can take a few hours to few days for a person with no legal background to make. But worry no more; we are here to help you out.

                    All you need to do is fill up the blank spaces and then you will receive an email with your personalized terms and conditions.
                    </div>
                </div>
            </div>
            
        </div>
        </div>
       
    
</> 
    )
}
