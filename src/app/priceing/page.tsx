"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  // On the server, use a static initial time in UTC
  const initialTime = new Date(
    new Date().toLocaleString("en-US", { timeZone: "UTC" })
  );

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    // On the client, update time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const mins = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(mins)}:${padZero(seconds)}:${meridiem}`;
  };

  const padZero = (number: number) => {
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <div>
      <section>
        <span>{formatTime()}</span>
      </section>
    </div>
  );
};

export default Page;
