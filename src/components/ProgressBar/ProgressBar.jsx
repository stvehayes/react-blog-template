import React from 'react';
import ScrollProgressRead from 'react-scroll-progress-read';
import { ProgressBar } from './Style';

const Progress = (props) => (
    <ProgressBar>
        <ScrollProgressRead
            barColor="#FFF"
            backgroundColor="rgba(255,255,255,0.25)"
            height="5px"
        />
    </ProgressBar>
);

export default Progress;
