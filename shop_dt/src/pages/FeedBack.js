import { useState } from "react";
import axios from "axios";
import "../components/css/FeedBack.css"
import './contact.css'
import { toast } from "react-toastify";
const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to API
    try {
      const res = await axios.post("http://localhost:3000/feedback", {
        name,
        email,
        feedback,
      });
      console.log(res.data);
      toast.success("Thank you for your feedback!")
    
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit feedback. Please try again later. :' + err.message);
 
    }

    // Reset form fields
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <><form onSubmit={handleSubmit}>
          <h2 >Liên Hệ Với Chúng Tôi</h2>
          <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required />
          </div>
          <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
          </div>
          <div className="form-group">
              <label htmlFor="feedback">Feedback:</label>
              <textarea
                  id="feedback"
                  name="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
              ></textarea>
          </div>
          <button type="submit">Submit</button>
      </form><section>
              <div className="ratio ratio-16x9">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.415049880967!2d106.62764101446838!3d10.856002860689152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529deaaaaaaab%3A0xce800a25143c8e3a!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIFPDoGkgR8OybiAoU2FpR29uVGVjaCk!5e0!3m2!1sen!2s!4v1674109004847!5m2!1sen!2s"
                      width={300}
                      height={300}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade" />
              </div>
          </section></>
  );
};
export default FeedbackForm