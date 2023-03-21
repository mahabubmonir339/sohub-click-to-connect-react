import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initialCall from '../../assets/call-icon/phone-call-icon.png';
import dialCall from '../../assets/call-icon/phone-ringing-icon.png';
import call from '../../assets/call-icon/call-logs-icon.png';
import CallEnd from '../../assets/call-icon/complete-icon.png';


const Customize_Call_Button = () => {
    // DTMF on/off section
    const [visible, setVisible] = useState(false);
    //................................
    const [checkbox, setcheckbox] = useState(false);
    const [colorCheckboxB, setcolorCheckboxB] = useState(true);
    const [colorCheckboxT, setcolorCheckboxT] = useState(true);
    //Initial... color
    const [currentColor, setcurrentColor] = useState('#298ED6');
    const [currentTextColor, setcurrentTextColor] = useState('#ffffff');
    const [currentFColor, setcurrentFColor] = useState('#B0D6F2');
    //Dial color
    const [dialColorB, setdialColorB] = useState('#913498');
    const [dialColorT, setdialColorT] = useState('#ffffff');
    const [dialColorF, setdialColorF] = useState('#F3D1F5');
    //call color
    const [callColorB, setcallColorB] = useState('#726A5A');
    const [callColorT, setcallColorT] = useState('#ffffff');
    const [callColorF, setcallColorF] = useState('#9C9C9C');
    //call end
    const [callEndColorB, setcallEndColorB] = useState('#F29107');
    const [callEndColorT, setcallEndColorT] = useState('#ffffff');
    const [callEndColorF, setcallEndColorF] = useState('#F9DCB4');
    // Initial Call button style....
    let appStyle = {
        backgroundColor: currentColor,
        paddingRight: '40px',
        paddingLeft: '40px'
    }
    let textColor = {
        color: currentTextColor
    }
    // Dial Call button style....
    let dialColorBackground = {
        backgroundColor: dialColorB
    }
    let dialColorText = {
        color: dialColorT
    }
    // Call color button style....
    let callColorBackground = {
        backgroundColor: callColorB,
        paddingRight: '50px',
        paddingLeft: '50px'
    }
    let callColorText = {
        color: callColorT
    }
    // Call end button style....
    let callEndColorBackground = {
        backgroundColor: callEndColorB,
        paddingRight: '20px',
        paddingLeft: '20px'
    }
    let callEndColorText = {
        color: callEndColorT
    }
    // font Style..............
    const [fontSelect, setFontSelect] = useState("'Trebuchet MS','Helvetica CY',sans-serif");
    const fontFunction = (event) => {
        setFontSelect(event.target.value);
    }
    ///..........shapeButton...................
    const [selectValue, setSelectValue] = useState('Rectangular');
    const handleSelectChange = (event) => {
        setSelectValue(event.target.value);
    }
    // DTMF keyboard placement...
    const [selectValueK, setSelectValueK] = useState('Top');
    const handleSelectChangeK = (event) => {
        setSelectValueK(event.target.value);
    }
    // DTMF Input.....
    const [selectValueI, setSelectValueI] = useState('20');
    const handleSelectChangeI = (event) => {
        setSelectValueI(event.target.value);
    }
    return (
        <div style={{ backgroundColor: 'white', padding: '20px' }}>

            <h2 className='text-3xl text-center'><strong>Customize Your Call Button</strong></h2>
            <br /><br />
            <strong><p className='text-center'>Click-to-Connect allows you to customize the design and color of your call button to match your company's theme and place it on your website.</p></strong>
            <div><br />
                <br />
                <div className='hidden'>
                    <label className="label">
                        <span className="label-text">Widget name:</span>
                    </label>
                    <input type="text" placeholder="Widget" className="input input-bordered w-full max-w-xs" />
                </div><br />
                <div className="form-control w-full max-w-xs hidden">
                    <label className="label">
                        <span className="label-text">SIP that receives calls from the widget:</span>
                    </label>
                    <select name="sip" className="form-control input input-bordered w-full max-w-xs">
                        <optgroup label="SIP">
                            <option value="358553">SIP 358553</option>
                        </optgroup>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs hidden">
                    <label className="label">
                        <span className="label-text">Button Text</span>
                    </label>
                    <input type="text" placeholder="Button Text" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs hidden">
                    <label className="label">
                        <span className="label-text">Text for the browsers that do not support the widget:</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered w-full max-w-xs" />
                </div>


                <div className="flex flex-col">
                    <div className="form-control w-52">
                        <label className="cursor-pointer label">
                            <span className="label-text text-xl font-medium">DTMF</span>
                            <input onClick={() => setVisible(!visible)} type="checkbox" className="toggle toggle-primary" value={checkbox} />
                        </label>
                    </div>
                    <br />
                    {visible && (
                        <div>
                            <div id='DTMF' className="form-control w-full max-w-xs">
                                <p>DTMF keyboard placement:</p>

                                <select name="shape" className="select select-bordered"
                                    onChange={handleSelectChangeK}
                                    value={selectValueK}>
                                    <option>Top</option>
                                    <option>Bottom</option>
                                    <option>Left</option>
                                    <option>Right</option>
                                </select>
                            </div>
                            <br />
                            <div className="form-group col-xs-12 col-sm-8 col-md-4 col-lg-3">
                                <p>DTMF-keyboard display time: </p>

                                <input onChange={handleSelectChangeI} className="form-control input input-bordered w-full max-w-xs" type="number" placeholder=' 20' value={selectValueI} />
                            </div>
                        </div>
                    )}
                </div>
                <br />
                <div>
                    {/* <input type="checkbox" /> */}
                    <div className="text-xl font-medium">
                        Call Button Style <i className="fa fa-arrow-circle-down mx-5 font-bold" aria-hidden="true"></i>
                    </div><br />
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="control-label">
                                Form:
                            </label>
                            <select name="shape" id="shape" className="select select-bordered"
                                onChange={handleSelectChange}
                                value={selectValue}>
                                <option>Rectangular</option>
                                <option>Round</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-control w-full max-w-xs">
                            <label className="control-label">
                                Font:
                            </label>
                            <select name="font" id="font" className="select select-bordered" onChange={fontFunction}>
                                <option value="'Trebuchet MS','Helvetica CY',sans-serif">Trebuchet MS, Helvetica CY, sans-serif</option>
                                <option value="'Times New Roman','Times CY','Nimbus Roman No9 L',serif">Times New Roman, Times CY, Nimbus Roman No9 L,  serif</option>
                                <option value="Arial,'Helvatica CY','Nimbus Sans L','sans-serif'">Arial, Helvatica CY, Nimbus Sans L, sans-serif</option>
                                <option value="Verdana,Arial,'Geneva CY','DejaVu Sans',sans-serif">Verdana, Geneva CY, DejaVu Sans, sans-serif</option>
                                <option value="Georgia,'Century Schoolbook L','Times New Roman','Times CY',Times,serif">Georgia, Century Schoolbook L, Times New Roman, Times CY, Times, serif</option>
                                <option value="Geneva,Arial,Helvetica,sans-serif">Geneva, Arial, Helvetica, sans-serif</option>
                            </select>
                        </div>
                        <br /><br />
                        <div className='flex gap-2 flex-wrap justify-between'>
                            <div>
                                <div className=''><strong className='m-2'>Initial state colors</strong></div>
                                <div className='border px-5 py-8 relative'>
                                    <div className='flex'>
                                        <p>Text </p>
                                        <input className='mx-20' onChange={(e) => setcurrentTextColor(e.target.value)} value={currentTextColor} type="color" name="color" id="" />

                                    </div>
                                    <div className='flex'>
                                        <p>Background </p>
                                        <input className='mx-6' onChange={(e) => setcurrentColor(e.target.value)} value={currentColor} type="color" name="color" id="" />

                                    </div>
                                    <div className='flex'>
                                        <p>Frame  </p>
                                        <input className='mx-16' onChange={(e) => setcurrentFColor(e.target.value)} value={currentFColor} type="color" name="color" id="" />
                                    </div>
                                </div>
                                <div>
                                    <button className="rounded-full bg-secondary my-4" id='callButton' style={appStyle}>
                                        <span className='flex gap-2 items-center justify-center  text-white text-l inline' id='colorChange' style={textColor}> <p><img style={{ height: "25px" }} src={initialCall} alt="" /></p> <p> call Us</p></span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className=''><strong className='m-2'>Dial status colors</strong></div>
                                <div className='border px-5 py-8 relative'>
                                    <div className='flex'>
                                        <p>Text </p>
                                        <input className='mx-20' onChange={(e) => setdialColorT(e.target.value)} value={dialColorT} type="color" name="color" id="" />

                                    </div>
                                    <div className='flex'>
                                        <p>Background </p>
                                        <input className='mx-6' onChange={(e) => setdialColorB(e.target.value)} value={dialColorB} type="color" name="color" id="" />

                                    </div>
                                    <div className='flex'>
                                        <p>Frame  </p>
                                        <input className='mx-16' onChange={(e) => setdialColorF(e.target.value)} value={dialColorF} type="color" name="color" id="" />
                                    </div>
                                </div>
                                <div>
                                    <button className="rounded-full bg-secondary my-4" id='callButton' style={dialColorBackground}>
                                        <span className='flex gap-2 items-center justify-center  text-white text-l inline' id='colorChange' style={dialColorText}> <p><img style={{ height: "25px" }} src={dialCall} alt="" /></p> <p> Connecting...</p></span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className=''><strong className='m-2'>Call status colors</strong></div>
                                <div className='border px-5 py-8 relative'>
                                    <div className='flex'>
                                        <p>Text </p>
                                        <input className='mx-20' onChange={(e) => setcallColorT(e.target.value)} value={callColorT} type="color" name="color" id="" />

                                    </div>
                                    <div className='flex'>
                                        <p>Background </p>
                                        <input className='mx-6' onChange={(e) => setcallColorB(e.target.value)} value={callColorB} type="color" name="color" id="" />

                                    </div>
                                    <div className='flex'>
                                        <p>Frame  </p>
                                        <input className='mx-16' onChange={(e) => setcallColorF(e.target.value)} value={callColorF} type="color" name="color" id="" />
                                    </div>
                                </div>
                                <div>
                                    <button className="rounded-full bg-secondary my-4" id='callButton' style={callColorBackground}>
                                        <span className='flex gap-2 items-center justify-center  text-white text-l inline' id='colorChange' style={callColorText}> <p><img style={{ height: "25px" }} src={call} alt="" /></p> <p> 00:00</p></span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className=''><strong className='m-2 '>Colors for call end</strong></div>
                                <div className='border px-5 py-8 relative'>
                                    <div className='flex'>
                                        <p>Text </p>
                                        <input className='mx-20' onChange={(e) => setcallEndColorT(e.target.value)} value={callEndColorT} type="color" name="color" id="" />

                                    </div>
                                    <div className='flex'>
                                        <p>Background </p>
                                        <input className='mx-6' onChange={(e) => setcallEndColorB(e.target.value)} value={callEndColorB} type="color" name="color" id="" />

                                    </div>
                                    <div className='flex'>
                                        <p>Frame  </p>
                                        <input className='mx-16' onChange={(e) => setcallEndColorF(e.target.value)} value={callEndColorF} type="color" name="color" id="" />
                                    </div>
                                </div>
                                <div>
                                    <button className="rounded-full bg-secondary my-4" id='callButton' style={callEndColorBackground}>
                                        <span className='flex gap-2 items-center justify-center  text-white text-l inline' id='colorChange' style={callEndColorText}> <p><img style={{ height: "25px" }} src={CallEnd} alt="" /></p> <p> Call Ended</p></span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='my-8'>
                    {/* <h2 className="collapse-title text-xl font-medium">Sample widget</h2>
                    <p className="collapse-title">Click on the widget to view all of its states.</p>
                    <button className="flex gap-4 items-center justify-center bg-secondary" id='callButton' style={appStyle}>
                        <span style={textColor}><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"></path> <path opacity="0.4" d="M15 5.97021L17 7.97021L21 3.97021" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </span>
                        <span className='text-white text-2xl' id='colorChange' style={textColor}>Call Us</span>
                    </button> */}
                    <br />
                    <br />
                    <div className='flex flex gap-5 flex-wrap justify-center content-center'>
                        <Link to={`/Click-To-Call?&shape=${currentColor}&text=${currentTextColor}&frame=${currentFColor}&dialColorB=${dialColorB}&dialColorT=${dialColorT}&dialColorF=${dialColorF}&callColorB=${callColorB}&callColorT=${callColorT}&callColorF=${callColorF}&callEndColorB=${callEndColorB}&callEndColorT=${callEndColorT}&callEndColorF=${callEndColorF}&shapeButton=${selectValue}&DTMF-K=${selectValueK}&selectValueI=${selectValueI}&visible=${visible}&font=${fontSelect}`}><button className="btn btn-sm btn-success">Create</button></Link>
                        <Link to='https://sohub.com.bd/home/Click_to_connect'><button className="btn btn-sm btn-danger mx-5">Cancel</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customize_Call_Button;