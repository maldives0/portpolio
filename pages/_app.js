import React from 'react';
import Head from 'next/head';
import Proptypes from 'prop-types';
import 'antd/dist/antd.less';


const Portpolio = ({ Component }) => {

    return (
        <>
            <Head>
                <title>Juyoung Jung</title>
            </Head>
            <Component />
        </>
    );
};
Portpolio.propTypes = {
    Component: Proptypes.elementType.isRequired,
};
export default Portpolio;