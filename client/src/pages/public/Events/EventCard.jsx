import React, { useRef, useEffect } from "react";
import style from "./event.module.css";
import { Grid } from "@mui/material";

const EventCard = (props) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(style["event-card-invisible"]);
        } else {
          entry.target.classList.add(style["event-card-invisible"]);
        }
      },
      { threshold: 0.5 }
    );
    const ref1Current = ref1.current;
    const ref2Current = ref2.current;
    observer.observe(ref1Current);
    observer.observe(ref2Current);
    return () => {
      observer.unobserve(ref1Current);
      observer.unobserve(ref2Current);
    };
  }, [ref1, ref2]);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <div className={style["event-card"]}>
          <div className={style["event-heading"]}>
            <div className={style["event-title"]}>
            <div>
              {props.data.name}
              </div>
              <div className={style["event-club"]}>
                {props.data.club}
              </div>

            </div>
            <div className={style["event-readmore"]}>
              <span className={style["event-tooltip"]}>More Info</span>
              <a href="#pdf" target="_blank">
                <img
                  // className={style["event-readmore"]}
                  src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22height%3A%20512px%3B%20width%3A%20512px%3B%22%3E%3Cpath%20d%3D%22M0%200h512v512H0z%22%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3Cg%20class%3D%22%22%20transform%3D%22translate(0%2C0)%22%20style%3D%22%22%3E%3Cpath%20d%3D%22M256%2021C126.426%2021%2021%20126.426%2021%20256s105.426%20235%20235%20235%20235-105.426%20235-235S385.574%2021%20256%2021zm0%2036c110.118%200%20199%2088.882%20199%20199s-88.882%20199-199%20199S57%20366.118%2057%20256%20145.882%2057%20256%2057zm-7.352%2036.744c-8.227%200-15.317%202.976-21.27%208.928-5.776%205.952-8.665%2012.955-8.665%2021.008%200%208.227%202.89%2015.23%208.666%2021.006%205.95%205.776%2013.04%208.666%2021.268%208.666%208.228%200%2015.23-2.89%2021.006-8.666%205.777-5.777%208.666-12.78%208.666-21.006%200-8.053-2.976-15.056-8.927-21.008-5.777-5.952-12.692-8.928-20.745-8.928zm-62.757%2082.453v28.096h46.215v186.13H185.89v27.833h140.22v-27.834h-45.69V176.197h-94.53z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className={style["event-prize-money"]} ref={ref1}>
            <hr />
            Prizes Worth: <span>{props.data.pricesworth}</span>
            <hr />
          </div>
          <div className={style["event-desc"]}>{props.data.description}</div>
          <div className={style["event-prize-money"]} ref={ref2}>
            <hr />
            Team Size: {props.data.teamMinSize}
            {props.data.teamMaxSize !== props.data.teamMinSize &&
              ` - ${props.data.teamMaxSize}`}
            <hr />
          </div>
          <button className={style["event-register"]}>Register</button>
        </div>
      </Grid>
    </>
  );
};

export default EventCard;
