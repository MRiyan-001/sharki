import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";


const FooterEnd = () => {
  return (
    <div className="f-end w-full flex items-center justify-center py-3 bg-blue-900">
      <p className="w-[80%] text-[0.7rem] text-white text-center leading-5">
        <FontAwesomeIcon icon={faCopyright} /> 2025{" "}
        <strong>SHARKI-Lifestyles</strong> Pvt Ltd. All Rights Reserved.
        Designed and Developed by <strong>CodeBox Studio</strong> Pvt Ltd.
      </p>
    </div>
  );
};

export default FooterEnd;
