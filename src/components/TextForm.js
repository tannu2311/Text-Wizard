import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const UpperCase = () => {
        let changedText = text.toUpperCase();
        setText(changedText);
        props.processAlert("Text Changed to UpperCase", "success");
    }
    const LowerCase = () => {
        let changedText = text.toLowerCase();
        setText(changedText);
        props.processAlert("Text Changed to LowerCase", "success");
    }

    const ClearText = () => {
        let changedText = "";
        setText(changedText);
        props.processAlert("Text Cleared", "success");
    }
    const handleChangedText = (event) => {
        setText(event.target.value);
        
    }


    const [text, setText] = useState('');

    return (
        <div>
            <div className="mb-3">
                <h3>
                    {props.heading}
                </h3>
                <textarea className="form-control" value={text} onChange={handleChangedText} id="myBox" rows="8"></textarea>
            </div>
            <button disabled = { text.length === 0 } className="btn btn-primary mx-1 my-1" onClick={UpperCase}>
                Convert to UpperCase
            </button>

            <button disabled = { text.length === 0 }  className="btn btn-primary mx-1 my-1" onClick={LowerCase}>
                Convert to LowerCase
            </button>

            <button disabled = { text.length === 0 }  className="btn btn-primary mx-1 my-1" onClick={ClearText}>
                Clear Text
            </button>
            <h3 className='my-3'>
                You Text Summary
            </h3>
            <div>
                {text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters
            </div>
            <div>
            {text.split(/\s+/).filter((element) => {return element.length!==0}).length * 0.008} Minutes Read
            </div>
            <h3 className='my-3'>
                Preview
            </h3>
            <div>
                {text}
            </div>
        </div>
    )
}

TextForm.protoTypes = {
    heading: PropTypes.string.isRequired,
}

TextForm.defaultProps = {
    heading: 'Enter Text to analyse',
}