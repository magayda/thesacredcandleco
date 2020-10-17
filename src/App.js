import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="tsc-wrap">
      <img src='badge-green-background@2x.png' className="tsc-logo" alt="logo" />
      <div class="landing-message">
        <h1> Website Coming Soon! </h1>
        <h2> We're currently working to create an experience that allows our customers to find and order all of our luxury candles at the ease of your fingertips. </h2>
        <h2> We're excited for you to see all of our products in one place while still offering delivery and in-person pickup! </h2>
        <h1> Get Social With Us! </h1>
        <div class="social">
          <a href="https://www.facebook.com/thesacredcandleco/"><img class="social-logo" src="fb-logo.png"/></a>
          <a href="https://www.instagram.com/thesacredcandleco/"><img class="social-logo" src="ig-logo.png"/></a>
          <h4 class="hashtags">#ignitetheritual #thesacredcandleco</h4>
        </div>

        <h4>* You can currently place orders through DM on our social pages</h4>
        <h4>We appreciate if you'd leave us a like or a review!</h4>
        <h4>Post a picture of your candle with #ignitetheritual and #thesacredcandleco to enter to win a free candle!</h4>

      </div>
    </div>
  );
}

export default App;
