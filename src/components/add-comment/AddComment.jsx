import { useState } from "react";
import { ref, push } from "firebase/database";
import { DATABASE } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import "./AddComment.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';

function AddComment() {
  const navigate = useNavigate();
  const { topicId } = useParams();

  const [formData, setFormData] = useState({
    username: "",
    message: "",
    date: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (newDate) => {
    setFormData(prev => ({
      ...prev,
      date: newDate ? dayjs(newDate).format('YYYY-MM-DD') : null
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 

    try {
      const commentsRef = ref(DATABASE, `topics/${topicId}/comments`);
      await push(commentsRef, {
        username: formData.username,
        message: formData.message,
        date: formData.date
      });

      navigate('/forum');
    } catch (error) {
      console.error("Error al añadir comentario:", error);
      alert("Error al añadir el comentario");
    }
  };

  return (
    <form className="form-add-comment" onSubmit={handleSubmit}>
      <div className="camps">
        <div>
          <label>Username</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label>Message</label>
          <input 
            type="text" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label>Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={formData.date ? dayjs(formData.date) : null}
              onChange={handleDateChange}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </LocalizationProvider>
        </div>
      </div>
      <button type="submit" className="button-submit">Enviar</button>
    </form>
  );
}

export default AddComment;