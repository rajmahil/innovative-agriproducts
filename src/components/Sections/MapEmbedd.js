import React, { useEffect, useState } from "react";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

//Map from https://www.maps.ie/create-google-map/
const MapEmbedd = () => {
  const [windowWidth, setWindowWidth] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWindowWidth(getWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
        }}
      >
        <iframe
          width="100%"
          height={windowWidth < 1180 ? "500px" : "800px"}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=No.%2030665%20Haight%20Road,%20Corman%20Park+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbedd;
