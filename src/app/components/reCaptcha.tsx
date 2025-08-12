"use client";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface RecaptchaWrapperProps {
  onVerify: (token: string | null) => void;
}

export default function RecaptchaWrapper({ onVerify }: RecaptchaWrapperProps) {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleChange = (value: string | null) => {
    setCaptchaValue(value);
    onVerify(value);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={handleChange}
      />
    </div>
  );
}
