import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle]=useState({
    //      color:'black',
    //     backgroundColor:'white'
    // })
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    let myStyle = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "black" : "white",
    }
    // const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //        setMyStyle({ color:'black',
    //     backgroundColor:'white'
    //        })
    //         setBtnText("Enable Dark Mode")


    //     }

    //  }
    return (

        <div classNameName="container" style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Word Converter is a fast and intuitive web-based text utility tool designed to simplify everyday text editing tasks. Whether you’re a student formatting assignments,
                            a content creator preparing captions, or a developer working with string inputs, this tool provides essential features like case conversion, extra space removal, and real-time word/character statistics—all in one place.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Built with the React.js framework, Word Converter ensures a seamless, responsive experience across all devices. Every action you perform, such as converting to uppercase or lowercase, copying text, or cleaning unnecessary spaces, happens instantly in your browser without page reloads.
                            The live preview and stats section offers immediate feedback, making the tool both interactive and efficient.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            The app is secure, ad-free, and entirely browser-based, meaning your text never leaves your device. It’s hosted on Vercel, allowing for fast global access with minimal load times. Word Converter is ideal for those who want a distraction-free,
                            functional interface that gets the job done quickly—no downloads or sign-ups required.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3"> 
            <button onClick={toggleStyle} type="button" className="btn btn-primary ">{btnText}</button>
            </div> */}
        </div>
    )
}
