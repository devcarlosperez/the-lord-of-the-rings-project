import "./AddComment.css";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

function AddComment() {
  const [selectedDate, setSelectedDate] = React.useState(null);

  return (
    <form className="form-add-comment">
      <div className="camps">
        <div>
          <label>Username</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div>
          <label>Message</label>
          <input type="text" name="message" id="message" required />
        </div>
        <div>
          <label>Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <button type="submit" className="button-submit">Enviar</button>
    </form>
  );
}

export default AddComment;