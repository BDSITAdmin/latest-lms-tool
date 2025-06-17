'use client';

import { useEffect, useRef } from 'react';
import { jwtDecode } from 'jwt-decode';

declare global {
    interface Window {
        google?: any;
    }
}

export interface GoogleSignInButtonProps {
    onSuccess?: (email: string) => void;
}

const GoogleSignInButton = ({ onSuccess }: GoogleSignInButtonProps) => {
    const googleButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.google && googleButtonRef.current) {
                window.google.accounts.id.initialize({
                    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
                    callback: (response: any) => {
                        const user = jwtDecode<{ email: string }>(response.credential);
                        onSuccess?.(user.email);
                    },
                });

                window.google.accounts.id.renderButton(googleButtonRef.current, {
                    theme: 'outline',
                    size: 'large',
                    width: '100%',
                });
            }
        };
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div
                className="w-full max-w-md border border-blue-400 rounded-md"
                ref={googleButtonRef}
            ></div>
        </div>
    );
};

export default GoogleSignInButton;
