import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Calendar from "dayjs/plugin/calendar";
import "./Title.css";

dayjs.extend(Calendar);

const Title = ({ date }) => (
  <div className="title">
    {dayjs(date).calendar(null, {
      sameDay: "[Today]",
      lastWeek: "DD MMMM",
      sameElse: "DD MMMM YYYY",
    })}
  </div>
);

Title.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Title;
