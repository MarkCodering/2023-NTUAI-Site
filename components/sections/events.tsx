import React from "react";

interface Event {
  event_title: string;
  description: string;
  date: string;
}

interface TimelineProps {
  events_list: Event[];
}

const events_list: Event[] = [
  {
    event_title: "Event Title 1",
    description: "Description for event 1...",
    date: "Date 1",
  },
  {
    event_title: "Event Title 2",
    description: "Description for event 2...",
    date: "Date 2",
  },
  // ... other events
];

const EventTimeline: React.FC<TimelineProps> = () => {
  return (
    <div className="timeline">
      <ul className="list-none m-0 p-0">
        {events_list.map((event, index) => (
          <li key={index} className="mb-10 ml-6">
            <div className="flex items-center">
              <div className="bg-blue-500 h-6 w-6 rounded-full -ml-3"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{event.event_title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <span className="text-sm text-gray-500">{event.date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventTimeline;
