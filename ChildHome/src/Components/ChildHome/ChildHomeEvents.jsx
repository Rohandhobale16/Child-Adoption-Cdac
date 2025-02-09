import React, { useState } from "react";
import { toast } from "react-toastify";
import ChildhomeSlider from "./Childhome_Slider";
import axios from "axios";

const ChildHomeEvents = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventDescription: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleFileChange = (e) => {};
  const handleSubmit = (e) => {};
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ChildhomeSlider />
        </div>
        <div className="col-10">
          <div className="container_background">
            <div className="registration-container">
              <h1 className="form-title text-primary">Add Event </h1>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Event Name :
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="eventname"
                    name="eventname"
                    value={eventData.eventName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender" className="form-label">
                    Event Date :
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="eventdate"
                    name="eventdate"
                    value={eventData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age" className="form-label">
                    Event Description :
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="eventdescription"
                    name="eventdescription"
                    value={eventData.eventDescription}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="photo" className="form-label">
                    Photo:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="file"
                    className="form-control"
                    id="photo"
                    name="photo"
                    onChange={handleFileChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Add Event
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildHomeEvents;
