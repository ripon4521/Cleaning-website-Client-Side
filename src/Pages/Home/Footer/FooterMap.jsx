
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react";
import GoogleMapReact from 'google-map-react';
import Quate from "../Banner/Quate";
import From from "./From";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const FooterMap = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    
    return (
        <div className="mt-10 relative">
             <div>
      <iframe className="w-full"
        title="Embedded Google Map"
      
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.281151577263!2d90.36110900000001!3d23.753787149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5b80b722c1%3A0xef17bc3ed35f00bb!2sAlhaj%20Mockbul%20Hossain%20University%20College!5e0!3m2!1sen!2sbd!4v1703031303937!5m2!1sen!2sbd"
      ></iframe>
    </div>
<From></From>
        </div>
    );
};

export default FooterMap;