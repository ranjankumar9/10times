import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetEvent } from "../Redux/action";
import Navbar from "../Components/Navbar";
import styles from "./ListingPage.module.css";
import { IoIosVideocam } from "react-icons/io";
import { Switch } from "@chakra-ui/react";
import { FaPeopleRoof } from "react-icons/fa6";

const ListingPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state);
  const [showUpcoming, setShowUpcoming] = useState(true);

  useEffect(() => {
    dispatch(GetEvent());
  }, [dispatch]);

  const filterEvents = (events) => {
    const currentTime = new Date().getTime();
    if (!events) {
      return [];
    }
    if (showUpcoming) {
      return events.filter((event) => new Date(event.start_date).getTime() > currentTime);
    } else {
      return events.filter((event) => new Date(event.start_date).getTime() <= currentTime);
    }
  };

  const toggleSwitch = () => {
    setShowUpcoming(!showUpcoming);
  };

  if (isLoading) {
    return <div className={styles.Loading}>
      <img src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="" />
    </div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className={styles.past}>
          <label>
             {showUpcoming ? "Upcoming" : "Past"} 
            <Switch value={showUpcoming} onChange={toggleSwitch} />
            Events
          </label>
        </div>
        {filterEvents(data?.data).map((el, index) => (
          <div key={index} className={styles.card}>
            <div>
              <p>Time: {el.start_time}</p>
              <h1> {el.event_name}</h1>
              <p>Date: {el.start_date}</p>
              <div className={styles.video}>
                <IoIosVideocam />
                <p>{el.meeting_type}</p>
              </div>
              <div className={styles.people}>
              <button>invited</button>
              <FaPeopleRoof />
              </div>
            </div>
            <div>
              <img src={el.image} alt="logo" width={250} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
