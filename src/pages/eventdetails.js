import Events from "../components/Events";
import "./eventdetails.css";

import DummyEvents from "../api/DummyEvents";

export default function EventDetails() {
  return (
    <div className="container min-w-full">
      <Events events={DummyEvents} />
    </div>
  );
}
