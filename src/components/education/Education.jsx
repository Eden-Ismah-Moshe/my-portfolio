import React from "react";
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { GiTrafficCone } from "react-icons/gi";
import { myEducationData } from "../../data/constants.js";

const Education = () => {
  return (
    <section id="education">
      <h4>My Recent Studies</h4>
      <h2>Education</h2>

      <VerticalTimeline>
        {myEducationData.map((education, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#a79277cf",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={education.date}
            iconStyle={{ background: education.iconBg }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                {education.icon ? (
                  <img
                    src={education.icon}
                    alt={education.name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                ) : (
                  <GiTrafficCone className="w-[60%] h-[60%] text-white" />
                )}
              </div>
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {education.title}
              </h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {education.name}
              </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              {education.points.map((point, idx) => (
                <li
                  key={`education-point-${idx}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
