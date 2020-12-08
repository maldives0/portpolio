import React, { useEffect } from 'react';
import Head from 'next/head';
import Proptypes from 'prop-types';
import 'antd/dist/antd.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Portpolio = ({ Component }) => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

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