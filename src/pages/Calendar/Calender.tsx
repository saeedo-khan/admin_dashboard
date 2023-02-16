import React, { useRef } from "react";
import "./Calendar.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { EventDragStopArg } from "@fullcalendar/interaction";
import { DateSelectArg } from "@fullcalendar/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "@mui/material/Modal";
import { inElement } from "../../helpers/CalendarHelpers";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton } from "@mui/material";
const events = [
  { title: "Meeting", start: new Date(), end: new Date() },
  { title: "Washing", start: new Date(2023, 2, 4), end: new Date(2023, 2, 8) },
];
type NewEvent = { title: string; start: any; end: any };
const Calender: React.FC = () => {
  const container = useRef(null);
  const [newEvent, setNewEvent] = React.useState<NewEvent>({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = React.useState(events);
  function handleAddNewEvent() {
    setAllEvents([...allEvents, newEvent]);
    setNewEvent({
      title: "",
      start: "",
      end: "",
    });
  }

  const remove = ({
    event,
    jsEvent,
    view: { calendar },
  }: EventDragStopArg): void => {
    if (!container.current) return;
    if (inElement({ x: jsEvent.pageX, y: jsEvent.pageY }, container.current!))
      return;

    event.remove();
  };
  const add = ({ start, end, view: { calendar } }: DateSelectArg): void => {
    calendar.addEvent({ start, end });
  };
  return (
    <div className="Calendar">
      <div className="wrapp-calendar">
        <h2>Calendar</h2>
        <div className="icon-create-evt">
          <button onClick={handleAddNewEvent}>
            <div>
              <AddBoxIcon />
            </div>
            <div>Create new event</div>
          </button>
        </div>
        <form className="container-form">
          <label>
            Add Title:
            <input
              type="text"
              name="title"
              className="title-form"
              placeholder="title .."
            />
          </label>
          <label>
            Start Date:
            <DatePicker
              placeholderText="Start Date"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
              className="title-form data-picker"
            />
          </label>
          <label>
            End Date:
            <DatePicker
              placeholderText="End Date"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
              className="title-form data-picker"
            />
          </label>
        </form>

        <div ref={container}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            eventBackgroundColor={"#995252"}
            dragRevertDuration={0}
            eventOverlap={false}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,dayGridWeek,dayGridDay",
            }}
            aspectRatio={6}
            height={600}
            dayMaxEvents={true}
            eventDragStop={remove}
            editable={true}
            selectable={true}
            select={add}
            events={allEvents}
            selectOverlap={false}
            eventContent={renderEventContent}
          />
        </div>
      </div>
    </div>
  );
};

function renderEventContent(eventInfo: any) {
  console.log(eventInfo);
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Calender;
