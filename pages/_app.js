import React, { useEffect } from 'react';
import Head from 'next/head';
import Proptypes from 'prop-types';
import 'antd/dist/antd.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { SWRConfig } from 'swr';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3031';

const Portpolio = ({ Component }) => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
        });
    }, []);

    return (
        <>
            <Head>
                <title>Juyoung Jung</title>
            </Head>
            <SWRConfig
                value={{
                    dedupingInterval: 5000,
                    fetcher: (url) => axios(url).then(r => r.data)
                }}
            >
                <Component />
            </SWRConfig>
        </>
    );
};
Portpolio.propTypes = {
    Component: Proptypes.elementType.isRequired,
};
export default Portpolio;
