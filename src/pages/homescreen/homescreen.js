import React, { useEffect, useState } from 'react';
import './homescreen.css';
import LabPic from '../../assets/labscientist.webp';
import data from './data.json';

const Homescreen = () => {
  const [listofTest, setListofTest] = useState([]);
  const [activeIndexNav, setActiveIndexNav] = useState(0);
  const [selectedDetailedTest, setSelectedDetailtest] = useState(null);

  useEffect(() => {
    setSelectedDetailtest(data.data[0]);
    setListofTest(data.data);
  }, []);

  const handleClickNavLink = (index) => {
    setActiveIndexNav(index);
    setSelectedDetailtest(data.data[index]);
  };

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
                Create
              </div>
              <div className="btns-div">
                <a style={{ textDecoration: "none", color: "white" }} href='#feedback'>Feedback</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='testhomescreen'>
        <div className="leftparttest">
          <div className="totaltest">4 Tests available</div>
          <div className="testNamediv">
            {listofTest.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleClickNavLink(index)}
                className={`testNameTitle ${activeIndexNav === index ? "activeNavLink" : null}`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="rightparttest">
          <div className="topRightPart">
            {selectedDetailedTest?.name}
          </div>
          <div className="bottomRightPart">
            <div className="topbottomRightPart">
              {selectedDetailedTest?.description}
            </div>
            <div className="bottombottomRightPart">
              <div className="bBRightPartLeftSide">
                {selectedDetailedTest?.requirements.map((item, index) => (
                  <div key={index} className="detailsBlock">
                    {item.key} : <span className='spanColorChange'>{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="bBRightPartRightSide">
                <img src={selectedDetailedTest?.imgLink} alt='pic' className='bBRightImage'/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className='feedbackHomeScreen'>
        <div className='feedbackFormTitle' id="feedback">Feedback Form</div>
        <div className='feedbackForm'>
          <div className='inputFields'>
            <input type='text' className='inputFieldsBox' placeholder='Enter your Name'/>
            <input type='number' className='inputFieldsBox' placeholder='Enter your Mobile Number'/>
            <input type='email' className='inputFieldsBox' placeholder='Enter your Email Id'/>
            <textarea className='inputTextareaMessage' placeholder='Type your message here ...' rows={10} />
          </div>
          <div className='sendEmailButton'>SEND</div>
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
