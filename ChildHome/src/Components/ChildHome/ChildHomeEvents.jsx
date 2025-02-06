import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ChildhomeSlider from "./Childhome_Slider";
import axios from "axios";

const ChildHomeEvents = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ChildhomeSlider />
        </div>

        <main className="col-10 ms-auto p-4">
          <section>
            <Content />
          </section>
        </main>
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

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/events");
        setEvents(response.data);
      } catch (error) {
        toast.error("Failed to fetch events");
        console.error("Error fetching events:", error); // Log the error for debugging
      }
    };

    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/addevents",
        eventData
      ); // Send eventData directly

      if (response.status === 200) {
        // Check for 200 OK status
        toast.success("Event added successfully!");
        setEvents([...events, response.data]); // Add the newly created event (from the server response)
        setEventData({
          eventName: "",
          eventDate: "",
          eventDescription: "",
          chId: 1,
        }); // Clear form and reset chId
      } else {
        toast.error("Failed to add event");
        console.error("Error adding event:", response.data); // Log the error from the server
      }
    } catch (error) {
      toast.error("Error adding event");
      console.error("Error adding event:", error); // Log the error
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4 text-primary">Manage Events</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="hidden" name="chId" value={eventData.chId} />
          <label htmlFor="title" className="form-label">
            Event Title:
          </label>
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

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Event Date:
          </label>
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

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Event Description:
          </label>
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

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default ChildHomeEvents;
