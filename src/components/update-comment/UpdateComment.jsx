import { useState, useEffect } from "react";
import { ref, update, get } from "firebase/database";
import { DATABASE } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateComment.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';

function UpdateComment() {
  const navigate = useNavigate();
  const { topicId, commentId } = useParams();
  const [formData, setFormData] = useState({
    username: "",
    message: "",
    date: null
  });

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const commentRef = ref(DATABASE, `topics/${topicId}/comments/${commentId}`);
        const snapshot = await get(commentRef);
        
        if (snapshot.exists()) {
          const commentData = snapshot.val();
          setFormData({
            username: commentData.username,
            message: commentData.message,
            date: commentData.date
          });
        }
      } catch (error) {
        console.error("Error al cargar el comentario:", error);
      }
    };

    fetchComment();
  }, [topicId, commentId]);

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
      const commentRef = ref(DATABASE, `topics/${topicId}/comments/${commentId}`);
      await update(commentRef, {
        username: formData.username,
        message: formData.message,
        date: formData.date
      });

      navigate('/forum');
    } catch (error) {
      console.error("Error al actualizar el comentario:", error);
      alert("Error al actualizar el comentario");
    }
  };

  return (
    <form className="form-update-comment" onSubmit={handleSubmit}>
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
      <button type="submit" className="button-submit">UPDATE</button>
    </form>
  );
}

export default UpdateComment;