import React from "react";

function IframeContect() {
  return (
    <div>
      <div className="container w-full h-[400px] relative overflow-hidden rounded-lg shadow-sm mb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4380517219465!2d105.79928017584115!3d21.015151488244726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab001745cb03%3A0x5512842ae90b2dd7!2zVHLGsOG7nW5nIFRow6BuaCBXZWI!5e0!3m2!1svi!2s!4v1750481982377!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default IframeContect;
