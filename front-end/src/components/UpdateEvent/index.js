import { } from 'date-fns';
import { useState } from 'react';

import './update.css';
import { patch } from '../../api';


const UpdateEvent = ({data, date}) => {
  const { year, month, day } = date;
  const {_id, eventName, initDate, endDate, description } = data;

  const [updatedEventName, setUpdateName] = useState(eventName);
  const [updatedInitDate, setUpdatedInitDate] = useState(initDate);
  const [updatedEndDate, setUpdatedEndDate] = useState(endDate);
  const [updatedDescription, setUpdatedDescription] = useState(description);
    
  const initHour = new Date(initDate).getHours() + 1;
  const initMinutes = new Date(initDate).getMinutes() + 1;

  const endHour = new Date(endDate).getHours() + 1;
  const endMinutes = new Date(endDate).getMinutes() + 1;

  const updateValues = async (body) =>{
    try {
      const response = await patch(`http://localhost:3001/api/v1/events/${_id}`, JSON.stringify(body));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const update = {
      eventName: updatedEventName,
      initDate: updatedInitDate,
      ednDate: updatedEndDate,
      description: updatedDescription,
    };
    console.log('BODY', update)
    updateValues(update)
  }

  return(
    <form onSubmit={handleSubmit} className="update-container">
      <div className="event-container">
        <h3>Update Event</h3>
        <p>Date: {day}/{month}/{year} </p>
        <p>Hour: {initHour}:{initMinutes} to {endHour}:{endMinutes} </p>
        <input
          placeholder={eventName}
          value={updatedEventName}
          onChange={(e) => setUpdateName(e.target.value)}
        ></input>
        <div className="line"></div>
        <div className="date-inputs">
          <label htmlFor="event-starts">Starts at:</label>
          <input
            value={updatedInitDate}
            onChange={(e) => setUpdatedInitDate(e.target.value)}
            type="time"
            maxLength={2}
            id="event-starts"
          ></input>
          <label htmlFor="event-ends">Ends at:</label>
          <input
            value={updatedEndDate}
            onChange={(e) => setUpdatedEndDate(e.target.value)}
            type='time'
            maxLength="2"
            id="event-ends"
          ></input>
        </div>
        <div className="desciption-input">
          <label htmlFor="event-description">Description:</label>
          <input
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            type="text"
            placeholder={description}
            id="event-description"
          ></input>
        </div>
      </div>
      <button type="submit">Update</button>
    </form>
  )

}

export default UpdateEvent;