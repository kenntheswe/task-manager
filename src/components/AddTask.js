import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      alert("Please add a task")
      return
    }

    onAdd({ description, date, reminder });
    setDescription("");
    setDate("");
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Kenny's Birthday Party" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input type="text" placeholder="April 23rd at 6pm" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  )
}

export default AddTask
