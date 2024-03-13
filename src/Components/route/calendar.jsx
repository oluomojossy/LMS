import React, { useState } from "react";
import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import axios from "axios";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
// import { formatDate, createEventId } from './utils'; // Import necessary utility functions
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Input from "../Input/Input";

export default function Calendar() {
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [dateOfAppointment, setDateOfAppointment] = useState("");
  const [scheduleDetails, setScheduleDetails] = useState("");
  const [timeOfAppointment, setTimeOfAppointment] = useState("");
  const id = JSON.parse(localStorage.getItem("user"))?.UserID;
 
  const handleSubmit = async (data) => {
    
    try {
      setLoading(true);
      const res = await axios.post(
        `https://plaintiff-backend.onrender.com/api_v1/create-schedule/${id}`,
        {
          clientName,
          clientEmail,
          dateOfAppointment,
          timeOfAppointment,
          scheduleDetails,
        }
      );
      toast.success("Schedule created");
      onClose()
      setLoading(false);
      setResetInput((prev) => !prev);
    } catch (err) {
      if (err.response.data.message) {
        toast.error(err.response.data.message);
        setLoading(false);
      }
      setLoading(false);
    }
  };

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  function handleDateSelect(selectInfo) {
    setDateOfAppointment(selectInfo.startStr);
    let title = onOpen();
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEventClick(clickInfo) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  function renderSidebarEvent(event) {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <i>{event.title}</i>
      </li>
    );
  }

  function renderSidebar() {
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          {/* <h2>All Events ({currentEvents.length})</h2> */}
          <ul>{currentEvents.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <DashboardLayout>
        <PageHeader title="Calendar" />
        <div className="demo-app">
          {renderSidebar()}
          <div className="demo-app-main">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                resourceTimelinePlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,resourceTimelineDay",
              }}
              initialView="resourceTimelineDay"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              select={handleDateSelect}
              eventContent={renderEventContent} // custom render function
              eventClick={handleEventClick}
              eventsSet={handleEvents} // called after events are initialized/added/changed/removed
              /* you can update a remote database when these fire:
              eventAdd={function(){}}
              eventChange={function(){}}
              eventRemove={function(){}}
              */
            />
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          placement="top"
          onOpenChange={onOpenChange}
          hideCloseButton={true}
          className="rounded "
        >
          <ModalContent className="">
            <ModalHeader className="">Schedule Appointment</ModalHeader>
            <ModalBody className="mb-6">
              <div className="space-y-3 p-2 ">
                <Input
                  label="Client Name"
                  className="clientInput"
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
                <Input
                  label=" Email"
                  className="clientInput"
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                />
                {/* {
                  <Input
                    label="Date of Appointment "
                    className="clientInput"
                    type="date"
                    value={dateOfAppointment}
                    onChange={(e) => setDateOfAppointment(e.target.value)}
                   
                  />
                } */}
                <Input
                  label="Time of Appointment"
                  className="clientInput"
                  type="text"
                  value={timeOfAppointment}
                  onChange={(e) => setTimeOfAppointment(e.target.value)}
                />

                <label
                  style={{ fontSize: "15px", marginLeft: "1%" }}
                  htmlFor="casedescription"
                >
                  Schedule details
                </label>
                <textarea
                  className="textAreaText"
                  value={scheduleDetails}
                  onChange={(e) => setScheduleDetails(e.target.value)}
                  // ref={fileInputRef}
                  // key={resetInput ? "reset" : "normal"}
                ></textarea>
                {loading ? (
                  <HashLoader color="blue" size="16px" />
                ) : (
                  <button
                    className="clientBtn bg-blue-900 w-40 h-10 rounded text-white text-sm "
                    onClick={() => handleSubmit()}
                  >
                    Schedule
                  </button>
                )}
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </DashboardLayout>
    </>
  );
}
