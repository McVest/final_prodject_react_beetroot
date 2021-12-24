import React from 'react';
import MidSection from '../../components/midSection/MidSection';
import img from '../../assets/image/mid_section.png'

const About = () => {
    return (
        <div>
            <MidSection title="Philosophy & values" text='I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.' link='/about' text_link='More about' img={img} />
        </div>
    );
};

export default About;