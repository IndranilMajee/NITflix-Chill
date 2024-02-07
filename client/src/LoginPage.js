import { React, useEffect } from "react";
import "./loginindex.css";
// import "./styles/datinglogin.css";
// import png from "./assets/.png"
// import frame from "./assets/frame.png"

// import ReactDOM from "react-dom";
import GoogleLogin from "@stack-pulse/next-google-login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  console.log("LoginPage is being rendered");
  useEffect(() => {
    const name = localStorage.getItem("name");
    // If all the required fields are present, redirect to the ProfileSummary page
    if (name) {
      navigate("/profile-summary");
    }
  }, []);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle login form submission here
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("Form submitted:", { email, password });
    // You can send the form data to your backend for authentication
  };

  const responseGoogle = (response) => {
    console.log("Google login response:", response);
    const googleUser = response.profileObj;
    const { tokenId } = response;
    console.log("Token ID:", tokenId);
    console.log("Google user information:", googleUser);
    const { profileObj, tokenResponse } = response;
    const { name, email, imageUrl, googleId } = profileObj;

    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Picture:", imageUrl);
    // console.log("Google ID:", googleId);
    // console.log("Token Response:", tokenResponse);

    navigate("/success");
    navigate("/birthdate", { state: { name, email, imageUrl, googleId } });
  };

  return (
    
      <div class="datinglogin-taH">
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        {/* <div class="rectangle-28-3rV">
  </div> */}
        <img class="group-706-wws" src="/group-706.png" />
        <img class="group-701-ebP" src="/group-701.png" />
        <img class="logo" src="/logo.png"/>
        {/* <p class="forgot-your-password-S1T">Forgot your password?</p> */}
        <div class="group-93-dVF">
          <GoogleLogin 
            clientId="1095865446899-ij588crmvvagq1jco12pvljahfma6oo6.apps.googleusercontent.com"
            buttonText="Lets get started"
            
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        {/* <div class="group-90-rso">
    <div class="group-89-Lny">
      <img class="vuesax-linear-sms-U8V" src="/vuesax-linear-sms.png"/>
      <p class="thisuixmailcom-zMj">thisuix@mail.com</p>
    </div>
  </div>
  <div class="group-92-V3b">
    <div class="group-71-Puf">
      <img class="vuesax-linear-lock-K2d" src="/vuesax-linear-lock.png"/>
      <img class="item--qWm" src="/.png"/>
    </div>
  </div> */}
        {/* <div class="group-3-XeV">
    <img class="subtract-3Mw" src="/subtract.png"/>
    <p class="or-acm">OR</p>
  </div> */}
        {/* <p class="dont-have-account-register-now-fu7">
    <span class="dont-have-account-register-now-fu7-sub-0">Don’t have account? </span>
    <span class="dont-have-account-register-now-fu7-sub-1">Register Now</span>
  </p> */}
        {/* <div class="group-705-F8Z">
    <div class="group-693-9jj">
      <img class="googleglogo-5dP" src="/googleglogo.png"/>
    </div>
    <div class="group-703-yTs">
      <img class="xmlid17-WCu" src="/xmlid17.png"/>
    </div>
    <div class="group-704-1vM">
      <img class="icon-awesome-apple-kN9" src="/icon-awesome-apple.png"/>
    </div>
  </div> */}
        <p class="welcome-3MF">Welcome</p>
        <p class="quote">“The best thing to hold onto in life is each other.”</p>
        {/* <p class="please-enter-your-login-details-below-Lr9">Please enter your login details below</p> */}
        <img class="group-702-1xH" src="/group-702.png" />
        <img class="group-707-YSR" src="/group-707.png" />
        <img class="frame-g2q" src="/frame-rxd.png" />
        <img class="group-708-1au" src="/group-708.png" />
        <img class="frame-LdB" src="/frame.png" />
      </div>
    
  );
}

export default LoginPage;
