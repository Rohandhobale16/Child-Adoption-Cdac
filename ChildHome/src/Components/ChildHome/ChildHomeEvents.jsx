import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ChildhomeSlider from "./Childhome_Slider";

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
    title: "",
    date: "",
    description: "",
  });
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch(() => toast.error("Failed to fetch events"));
  }, []);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });
      if (response.ok) {
        toast.success("Event added successfully!");
        setEvents([...events, eventData]);
        setEventData({ title: "", date: "", description: "" });
      } else {
        toast.error("Failed to add event");
      }
    } catch (error) {
      toast.error("Error adding event");
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4 text-primary">Manage Events</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
