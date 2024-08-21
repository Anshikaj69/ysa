import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import bg from '/about.svg';
import data from '../../utils/data.json';
import Container from '../layout/Container';

const About = ({ sectionName }) => {
  const [sectionData, setSectionData] = useState(null);
  const aboutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (data[sectionName]) {
      setSectionData(data[sectionName]);
    } else {
      console.error('Section not found');
    }
  }, [sectionName]);

  useEffect(() => {
    if (location.hash === '#aboutus') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location]);

  if (!sectionData) return <div>Loading...</div>;

  const { aboutUs } = sectionData;

  return (
    <div
      className="px-10 pt-40 pb-60"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className="flex justify-between" id="aboutus" ref={aboutRef}>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-8 w-[55%]">
              <h1 className="text-[#253359] 2xl:text-5xl md:text-4xl font-bold playfair-display-font text-balance">
                {aboutUs.heading}
              </h1>
              <p className="text-[#253359] 2xl:text-lg md:text-base font-normal max-w-xl">
                {aboutUs.content1}
                <br />
                <br />
                {aboutUs.content2}
              </p>
            </div>
            <div className="img w-[40%] flex items-center">
              <img src="/aboutimg.svg" alt="img" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
