import React, { useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "March 15, 2025",
      description: "A conference on emerging technologies and innovations.",
      image: "/images/Kids.jpg",
    },
    {
      id: 2,
      title: "Music Fest 2025",
      date: "April 10, 2025",
      description: "An exciting festival featuring top artists and bands.",
      image: "/images/image.jpg",
    },
    {
      id: 3,
      title: "Art Exhibition 2025",
      date: "May 20, 2025",
      description: "A showcase of modern and classic artworks.",
      image: "/images/Children_img_event.jpg",
    },
  ]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={event.image}
                className="card-img-top"
                alt={event.title}
                onError={(e) => (e.target.src = "/images/default.jpg")} // Fallback image
              />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text">
                  <small className="text-muted">{event.date}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
