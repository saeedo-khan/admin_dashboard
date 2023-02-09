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
const Calendar: React.FC = () => {
  const container = useRef(null);
  const [newEvent, setNewEvent] = React.useState<NewEvent>({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = React.useState(events);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function handleAddNewEvent() {
    setAllEvents([...allEvents, newEvent]);
    setNewEvent({
      title: "",
      start: "",
      end: "",
    });
    handleClose();
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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modal-add-event"
        >
          <div className="add-event">
            <input
              type="text"
              className="title-event"
              placeholder="Add Title"
              style={{ width: "20%" }}
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <p>Start Date</p>
            <div>
              <DatePicker
                placeholderText="Start Date"
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
            </div>
            <p>End Date</p>
            <div>
              <DatePicker
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
            </div>
            <div className="add-event-btn">
              <button onClick={handleAddNewEvent}>Add Event</button>
            </div>
          </div>
        </Modal>

        <div ref={container}>
          <div className="icon-create-evt">
            <button onClick={handleOpen}>
              <div >
                <AddBoxIcon />
              </div>
              <div>Create new event</div>
            </button>
          </div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            eventBackgroundColor={"#995252"}
            dragRevertDuration={0}
            eventOverlap={false}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
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

export default Calendar;
