import React from 'react';
import {Wrapper, Dot} from './Loader.style';

const Loader = () => {
    return (
        <Wrapper>
            Loading
            <Dot delay={'0.1s'} />
            <Dot delay={'0.2s'} />
            <Dot delay={'0.3s'} />
            {/* <Animation /> */}
        </Wrapper>
    );
};

export default Loader;