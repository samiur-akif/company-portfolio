import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>

                <DefaultSeo
                    title="lorem ipsum"
                    description="lorem ipsum dolor sit amet consectetur adipiscing elit"
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: '',
                        site_name: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
                    }}
                />

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="15.50" />
            </React.Fragment>
        );
    }
}