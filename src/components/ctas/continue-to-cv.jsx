import React from 'react';
import { useGlobalState } from '../../global-state-provider';
import AnimatedSvgLine from '../animated/animated-svg-line';

const ContinueToCV = () => {
    const { setShouldDisplayLoadingPage } = useGlobalState();
    
    const onClickHanlder = () => setShouldDisplayLoadingPage(false);

    return (
        <AnimatedSvgLine>
            <a onClick={onClickHanlder}>
                CONTINUE
            </a>
        </AnimatedSvgLine>
    );
};

export default ContinueToCV;
