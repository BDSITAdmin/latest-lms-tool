"use client";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export interface GoogleSignInButtonProps {
  onSuccess?: (email: string) => void;
}

export default function GoogleSignInButton({ onSuccess }: GoogleSignInButtonProps) {
  return (
    <div className="w-full flex justify-center">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (!credentialResponse.credential) return;
          const decoded: { email: string } = jwtDecode(credentialResponse.credential);
          onSuccess?.(decoded.email);
        }}
        onError={() => {
          console.log("Google Sign In Failed");
        }}
      />
    </div>
  );
}
