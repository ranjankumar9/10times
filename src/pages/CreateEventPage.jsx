import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Switch } from "@chakra-ui/react";
import styles from "./CreateEvent.module.css";
import { LuTicket } from "react-icons/lu";
import { FaPeopleLine } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { GrCapacity } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { AddEvent } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const CreateEventPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputfield, setInputField] = useState({
    event_name: "",
    start_date: "",
    start_time: "",
    end_date1: "",
    end_time1: "",
    tickets: "free" || "",
    require_approval: "",
    capacity: "limited" || "",
    visiblity: "public" || "",
    meeting_type: "virtual",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputField({
      ...inputfield,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddEvent(inputfield, inputfield.image.name));
    navigate("/event");
  };

  const handleReset = () => {
    setInputField({
      event_name: "",
      start_date: "",
      start_time: "",
      end_date1: "",
      end_time1: "",
      tickets: "free" || "",
      require_approval: "",
      capacity: "limited" || "",
      visiblity: "public" || "",
      meeting_type: "virtual",
      //   image: null,
    });
  };

  return (
    <div>
      <Navbar />
      <h1 className={styles.create}>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.createform}>
          <div className={styles.form1}>
            <input
              type="text"
              name="event_name"
              placeholder="EventName"
              value={inputfield.event_name}
              onChange={handleInputChange}
              required
            />
            <div className={styles.start}>
              <p>Start</p>
              <input
                type="date"
                name="start_date"
                value={inputfield.start_date}
                onChange={handleInputChange}
                required
              />
              <input
                type="time"
                name="start_time"
                value={inputfield.start_time}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.start}>
              <p>End</p>
              <input
                type="date"
                name="end_date1"
                value={inputfield.end_date1}
                onChange={handleInputChange}
                required
              />
              <input
                type="time"
                name="end_time1"
                value={inputfield.end_time1}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={styles.form2}>
            <img
              src={
                inputfield.image
                  ? (inputfield.image) :
                "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              }
              alt="logo"
            />
            <input
              type="text"
              placeholder="Enter your Imageurl..."
              name="image"
              value={inputfield.image}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className={styles.eventoption}>
          <p>Event Options</p>
          <div className={styles.eventoption1}>
            <div className={styles.options1}>
              <div>
                <LuTicket />
                <label htmlFor="">Tickets</label>
              </div>
              <select
                name="tickets"
                value={inputfield.tickets}
                onChange={handleInputChange}
              >
                <option value="free">Free</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            <div className={styles.options1}>
              <div>
                <FaPeopleLine />
                <label htmlFor="">Require Approval</label>
              </div>
              <Switch
                id="require-approval"
                onChange={() =>
                  handleInputChange({
                    target: {
                      name: "require_approval",
                      value: !inputfield.require_approval,
                    },
                  })
                }
                checked={inputfield.require_approval}
                required
              />
            </div>
            <div className={styles.options1}>
              <div>
                <GrCapacity />
                <label htmlFor="">Capacity</label>
              </div>
              <select
                name="capacity"
                value={inputfield.capacity}
                onChange={handleInputChange}
                required
              >
                <option value="limited">Limited</option>
                <option value="unlimited">Unlimited</option>
              </select>
            </div>
            <div className={styles.options1}>
              <div>
                <IoIosGlobe />
                <label htmlFor="">Visibility</label>
              </div>
              <select
                name="visibility"
                value={inputfield.visiblity}
                onChange={handleInputChange}
                required
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.btncomponent}>
          <button type="submit">Create Event</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventPage;
