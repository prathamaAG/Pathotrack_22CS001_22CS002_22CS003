import React from 'react';
import './homescreen.css';
import LabPic from '../../assets/labscientist.webp';
import XrayPic from '../../assets/xray.jpeg';
import EcgPic from '../../assets/ecg.jpeg';
import CBCPic from '../../assets/cbc.jpeg';
import ULTPic from '../../assets/ult.jpg';

const Homescreen = () => {
  return (
    <div className="homescreen">
      <div className="introhomescreen">
        <div className="imghomescreenlogo">
          <div className="imgDiv">
            <img className='lablogohomescreen' src={LabPic} alt='labpic'/>
          </div>
          <div className="intropart">
            <div className="titlemini">Enterprise Limited</div>
            <div className="titlemajor">Pathotrack</div>
            <div className="description1">
              Foundation of successful laboratory is comprehensive planning and management. This enables building and effectively executing an operating philosophy leading to scientific and business goals.
            </div>
            <div className="description2">
              Pathotrack is a web application that helps you to manage your laboratory and its operations. Our 40 years of experience in day-to-day lab operation using a proven set of methodologies, products, and services is now provided in a new manner to our users.
            </div>
            <div className="topBtnDiv">
              <div className="btns-div">
                create
              </div>
              <div className="btns-div">
                contact
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='testhomescreen'>
         <div className="leftparttest">
          <div className="totaltest">4 Test available</div>
          <div className="testNamediv">
            <div className="testNameTitle">X-RAY TEST</div>
            <div className="testNameTitle">ECG TEST</div>
            <div className="testNameTitle">CBC TEST</div>
            <div className="testNameTitle">ULTRASOUND TEST</div>
          </div>
         </div>
         <div className="rightparttest">
            <div className="topRightPart">
                  X-RAY TEST
            </div>
            <div className="bottomRightPart">
            <div className="topbottomRightPart">
            An X-ray is a quick, painless test that produces images of the structures inside your body — particularly your bones.
            </div>
            <div className="bottombottomRightPart">
            <div className="bBRightPartLeftSide">
            <div className="detailsBlock">
              Fasting:<span className='spanColorChange'> Not Required</span>
            </div>
            <div className="detailsBlock">
              Data Shown:<span className='spanColorChange'>X-rays show the internal structure of the body, such as bones, organs, and tissues. They can reveal fractures, infections, lung conditions (like pneumonia), and abnormalities such as tumors.</span>
            </div>
            <div className="detailsBlock">
             Estimated Price in India:<span className='spanColorChange'>₹250 - ₹1000</span>
            </div>
  
            </div>
            <div className="bBRightPartRightSide">
            <img src={XrayPic} alt='XRAYPIC'className='bBRightImage'/>
            </div>
            </div>
            </div>
         </div>
       </div>
       {/* <div className='contacthomescreen'>
         contact
       </div> */}
    </div>
  );
}

export default Homescreen;
