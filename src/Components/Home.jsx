import React from 'react';
import Slider from './Slider';
import PopulerClass from './PopulerClass';
import ExtraSection from './ExtraSection';
import Instrctor from './Instrctor';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopulerClass></PopulerClass>
            <ExtraSection></ExtraSection>
            <Instrctor />
        </div>
    );
};

export default Home;