import React, { useState } from 'react'

export default function About() {

    const [myModeStyle, setmyModeStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: 'none'
    })

    const [btnText, setbtnText] = useState("Dark Mode")


    const ChangeMode = () => {
        if (myModeStyle.color === 'black') {
            setmyModeStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setbtnText("Light Mode")
        }
        else {
            setmyModeStyle({
                color: 'black',
                backgroundColor: 'white',
                border: 'none'
            })
            setbtnText("Dark Mode")
        }
    }

    return (
        <>
            <div className="accordion container" id="accordionExample" style={myModeStyle}>
                <h3 className='mx-3 my-3' >
                    About Us
                </h3>
                <div className="accordion-item" style={myModeStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myModeStyle}>
                            The Easy Way To Convert Text Between Upper Case, Lower Case and Sentence Case
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This easy-to-use Case Conversion Tool is designed to allow you to convert blocks of text into any case, which you can then export to a text file or simply copy and paste back to your own document.

                            So if you have typed a document and accidentally left your caps lock on – don’t panic! Or if you want to make sure that a document has all the right capitalisations, you can now convert it in seconds. Or if you are a marketer and want to capitalise the first letter of each word, then one click will do the trick!

                            Simply copy and paste your text into the text area above and click on the buttons at the bottom to convert it to one of the different cases,
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myModeStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myModeStyle}>
                            Sentence case conversion in Pages
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            A word processing program that is specifically designed for Mac computers is called pages. Here, users are allowed to create documents according to the format that they prefer. However, this application does not have any functionality that allows people the tools they need when they need to change to upper case from lower case.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myModeStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myModeStyle}>
                            Case Converter Programs
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            There is currently lots of software available to convert case. One rule of thumb to remember is that while the original texts read the same when copied and pasted from one word processing document to another, it can be severely altered if the source material has undergone extensive editing. Thus, the corresponding hotkeys are available to allow you to convert case automatically with minimal effort on your part.
                        </div>
                    </div>
                </div>

                <button onClick={ChangeMode} type="button" className="btn btn-dark mx-2 my-2" >
                {btnText}
                </button>
            </div>
        </>
    )
}
