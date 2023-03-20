import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const Click = () => {

    const [text1, setText1] = useState('');
    const textareaRef1 = useRef(null);
    const copyText1 = () => {
        textareaRef1.current.select();
        document.execCommand('copy');
        alert(`Copied`);
    };
    const [text2, setText2] = useState('');
    const textareaRef2 = useRef(null);
    const copyText2 = () => {
        textareaRef2.current.select();
        document.execCommand('copy');
        alert(`Copied`);
    };

    //color....................
    const queryParams = new URLSearchParams(window.location.href);
    //Initial... color
    const shape = queryParams.get('shape');
    const text = queryParams.get('text');
    const frame = queryParams.get('frame');
    //Dial color
    const dialColorB = queryParams.get('dialColorB');
    const dialColorT = queryParams.get('dialColorT');
    const dialColorF = queryParams.get('dialColorF');
    //call color
    const callColorB = queryParams.get('callColorB');
    const callColorT = queryParams.get('callColorT');
    const callColorF = queryParams.get('callColorF');
    //call end
    const callEndColorB = queryParams.get('callEndColorB');
    const callEndColorT = queryParams.get('callEndColorT');
    const callEndColorF = queryParams.get('callEndColorF');
    //shapeButton
    const shapeButton = queryParams.get('shapeButton');
    //DTMF true / false...
    const visible = queryParams.get('visible');
    //DTMF keyboard.......
    const dtmf_position = queryParams.get('DTMF-K');
    //DTMF Input
    const dtmf_time_to_disappear = queryParams.get('selectValueI');
    //font select.........
    const fontSelect = queryParams.get('font');
    // color shape ......
    const callButtonBg = {
        backgroundColor: shape
    }
    const callButtonTc = {
        color: text
    }
    // TextArea...............
    const [value1, setValue1] = useState(`<a href="#" className="float">
    <div id="CallScripts"></div>
    <div id="CallmeWidget"></div>
    </a>`);


    const [value2, setValue2] = useState(`(function() {  
        var script = document.createElement('script');  
        script.src = 'https://sohub.com.bd/click-to-call/loader.js';  
        document.getElementById('CallScripts').appendChild(script);}());
        
    var CallmeWidget;
    var CallmeWidgetFn = function() {
        CallmeWidget = new CallmeWidgetNew("CallmeWidget");
        CallmeWidget.create({
            "widgetId": "kkd8cVk8N21vesXKxvBfBebcUCGtaMy5cv18TT8PJ49eXrGxzt66R7S7kb96GeSmc8v9rthssgau1m3c6GT4gTg2Unesb8zz7c351bcafe4aeb79ac80e811dd16266c",
            "sipId": "1234",
            "domElement": "CallmeWidget"
        }, {
            "shape": "${shapeButton}",
            "language": "en",
            "width": "0",
            "dtmf": ${visible},
            "dtmf_position": "${dtmf_position}",
            "dtmf_time_to_disappear": "${dtmf_time_to_disappear}",
            "font": "${fontSelect}",
            "color_call": "${text}",
            "color_bg_call": "${shape}",
            "color_border_call": "${frame}",
            "color_connection": "${dialColorT}",
            "color_bg_connection": "${dialColorB}",
            "color_border_connection": "${dialColorF}",
            "color_calling": "${callColorT}",
            "color_border_calling": "${callColorB}",
            "color_bg_calling":"${callColorF}",
            "color_ended": "${callEndColorT}",
            "color_bg_ended": "${callEndColorB}",
            "color_border_ended": "${callEndColorF}"
        });
    };
    if (window.addEventListener) {
        window.addEventListener('load', CallmeWidgetFn, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', CallmeWidgetFn);
    }`);

    return (
        <div>
            <div>
            </div>
            <div>
                <h1 className='text-3xl text-center m-8'><strong>Click To Call</strong></h1>
                <p className='text-xl  rounded bg-emerald-300 p-5'>Call button was created successfully. To install the Call button on the website, follow the installation instructions on this page.</p>

                <div>
                    <div className="text-xl font-medium">
                        <h1 className='text-2xl text-bold my-8'>Step 1. Add the code to load the required libraries</h1>
                    </div>
                    <div>
                        <p className='mx-8'>Insert the library load code at the very bottom of the website page, before the BODY closing tag.</p>
                        <br /><br />
                        <div className='flex bg-orange-50 justify-between'>
                            <textarea
                                style={{ color: "black", outline: "0px none transparent" }}
                                readOnly='readonly'
                                className='p-5 m-8 bg-orange-50 border-hidden max-w-full'
                                name="postContent"
                                ref={textareaRef1} onChange={(e) => setText1(e.target.value)}
                                defaultValue={value1}
                                rows={5}
                                cols={120}
                            />
                            <button type="submit" className='text-xl text-orange-500 m-6 text-center text-justify' style={{ height: "50px" }} onClick={copyText1}>copy</button>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="text-xl font-medium">
                        <h1 className='text-2xl text-bold my-8'>Step 2. Add the button code to the page</h1>
                    </div>
                    <div>
                        <p className='m-8'>Insert the code into the page of the website where the "Call us" button should be placed.</p>
                        <p className=' text-b mx-8'>Your call button code:</p>
                        <br /><br />
                        <div className='flex bg-orange-50 justify-between'>
                            <textarea
                                style={{ color: "black", outline: "0px none transparent" }}
                                readOnly='readonly'
                                className='p-5 m-8 bg-orange-50 border-hidden max-w-full'
                                name="postContent"
                                ref={textareaRef2} onChange={(e) => setText2(e.target.value)}
                                defaultValue={value2}
                                rows={42}
                                cols={120}

                            />
                            <button type="submit" className='text-xl m-6 text-orange-500 text-center text-justify' style={{ height: "50px" }} onClick={copyText2}>copy</button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div>
                <h1 className='text-xl mx-8'>Your Call Button</h1>
                <button className="flex gap-4 items-center justify-center bg-teal-400 mx-8 my-2" id='callButton' style={callButtonBg}>
                    <span><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"></path> <path opacity="0.4" d="M15 5.97021L17 7.97021L21 3.97021" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </span>
                    <span className='text-white text-2xl' id='colorChange' style={callButtonTc}>Call Us</span>
                </button>
            </div>
        </div>
    );
};

export default Click;