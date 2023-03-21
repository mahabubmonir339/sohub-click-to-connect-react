import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import initialCall from '../../assets/call-icon/phone-call-icon.png';
import dialCall from '../../assets/call-icon/phone-ringing-icon.png';
import call from '../../assets/call-icon/call-logs-icon.png';
import CallEnd from '../../assets/call-icon/complete-icon.png';
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
        backgroundColor: shape,
        paddingRight: '40px',
        paddingLeft: '40px'
    }
    const callButtonTc = {
        color: text
    }
    //dial
    const dialColorBackground = {
        backgroundColor: dialColorB
    }
    const dialColorText = {
        color: dialColorT
    }
    // call color
    const callColorBackground = {
        backgroundColor: callColorB,
        paddingRight: '50px',
        paddingLeft: '50px'
    }
    const callColorText = {
        color: callColorT
    }
    // call End Color 
    const callEndColorBackground = {
        backgroundColor: callEndColorB,
        paddingRight: '20px',
        paddingLeft: '20px'
    }
    const callEndColorText = {
        color: callEndColorT
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
                <h1 className='text-3xl text-center m-8'><strong>Click To Connect</strong></h1>
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
            <div className='flex gap-2 flex-wrap justify-between'>
                <div>
                    <h1 className='text-xl'>Initial state colors</h1>
                    <button className="rounded-full bg-secondary my-4" id='callButton' style={callButtonBg}>
                        <span className='flex gap-2 items-center justify-center  text-white text-l inline' id='colorChange' style={callButtonTc}> <p><img style={{ height: "25px" }} src={initialCall} alt="" /></p> <p> call Us</p></span>
                    </button>
                </div>
                <div>
                    <h1 className='text-xl'>Dial status colors</h1>
                    <button className="rounded-full bg-secondary my-4" id='callButton' style={dialColorBackground}>
                        <span className='flex gap-2 items-center justify-center  text-white text-l inline' id='colorChange' style={dialColorText}> <p><img style={{ height: "25px" }} src={dialCall} alt="" /></p> <p> Connecting...</p></span>
                    </button>
                </div>
                <div>
                    <h1 className='text-xl'>Call status colors</h1>
                    <button className="rounded-full bg-secondary my-4" id='callButton' style={callColorBackground}>
                        <span className='flex gap-2 items-center justify-center  text-white text-l inline' id='colorChange' style={callColorText}> <p><img style={{ height: "25px" }} src={call} alt="" /></p> <p> 00:00</p></span>
                    </button>
                </div>
                <div>
                    <h1 className='text-xl'>Colors for call end</h1>
                    <button className="rounded-full bg-secondary my-4" id='callButton' style={callEndColorBackground}>
                        <span className='flex gap-2 items-center justify-center  text-white text-l inline' id='colorChange' style={callEndColorText}> <p><img style={{ height: "25px" }} src={CallEnd} alt="" /></p> <p> call Ended</p></span>
                    </button>
                </div>
            </div>
            {/* <div className='flex justify-end'>
                <Link to='https://sohub.com.bd/home/Click_to_connect'><button className="btn btn-sm btn-danger mx-5">Back</button></Link>
            </div> */}
        </div>
    );
};

export default Click;