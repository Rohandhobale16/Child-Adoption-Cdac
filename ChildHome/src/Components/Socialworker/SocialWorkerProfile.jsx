import React from "react";
import { Link } from "react-router-dom";
import SocialworkerSlider from "./Socialworker_Slider";

export default function SocialWorkerProfile() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SocialworkerSlider />
        </div>
      </div>
    </div>
  );
}
