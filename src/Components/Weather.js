import React from "react";
const Weather = (props) => {
  return (
    <div className="info">
      {props.tempreature && (
        <p className="info-key">
          Tempreature :<span>{props.tempreature}</span>
        </p>
      )}
      {props.city && (
        <p className="info-key">
          City :<span>{props.city}</span>
        </p>
      )}
      {props.country && (
        <p className="info-key">
          Country :<span>{props.country}</span>
        </p>
      )}
      {props.humidity && (
        <p className="info-key">
          Humidity :<span>{props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="info-key">
          Description :<span>{props.description}</span>
        </p>
      )}
      {props.error && (
        <p className="info-key">
          Error :<span>{props.error}</span>
        </p>
      )}
    </div>
  );
};
export default Weather;
