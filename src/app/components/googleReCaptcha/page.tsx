import { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function App({ Component, pageProps }: AppProps) {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            <Component {...pageProps} />
        </GoogleReCaptchaProvider>
    );
}
