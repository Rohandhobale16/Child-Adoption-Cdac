import React, { useState, useEffect } from "react";
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
const Content = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventDescription: "",
    chId: 1, // Replace with the actual ChildHome ID
  });
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await axios.get("/api/events");
  //       setEvents(response.data);
  //     } catch (error) {
  //       toast.error("Failed to fetch events");
  //       console.error("Error fetching events:", error); // Log the error for debugging
  //     }
  //   };

  //   fetchEvents();
  // }, []);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/addevents",
        eventData
      );

      if (response.status === 200) {
        toast.success("Event added successfully!");
        setEvents([...events, response.data]);
        setEventData({
          eventName: "",
          eventDate: "",
          eventDescription: "",
          chId: 1,
        });
      } else {
        toast.error("Failed to add event");
        console.error("Error adding event:", response.data);
      }
    } catch (error) {
      toast.error("Error adding event");
      console.error("Error adding event:", error);
    }

    const handleFileChange = () => {};

    return (
      <div className="container_background">
        <div className="registration-container">
          <h1 className="form-title text-primary">Add Event </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Event Title:
              </label>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="title"
                value={eventData.title}
                onChange={handleChange}
                className="form-control"
                id="title"
                placeholder="Enter Event Title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Event Date:
              </label>
            </div>
            <div className="input-group">
              <input
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
                className="form-control"
                id="date"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Event Description:
              </label>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="description"
                value={eventData.description}
                onChange={handleChange}
                className="form-control"
                id="description"
                placeholder="Enter Event Description"
                required
              />
            </div>

            <div className="form-group">
              <label hidden htmlFor="photo" className="form-label">
                Photo:
              </label>
            </div>
            <div hidden className="input-group">
              <input
                type="file"
                className="form-control"
                id="photo"
                name="photo"
                onChange={handleFileChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary ">
              Add Event
            </button>
          </form>
        </div>
      </div>
    );
  };
};

export default ChildHomeEvents;
