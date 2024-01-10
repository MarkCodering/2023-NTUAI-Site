import React from "react";

const events_list = {
  event_num: 1,
  event_name: "AI Workshop",
  event_date: "2021-10-20",
  event_intro: "It is a long established fact reader",
  event_link: "https://www.google.com",
};

const Contents = () => {
  return (
    <div className="w-full">
      <ol className="space-y-3">
        <p className="text-body-color dark:text-dark-6 flex text-base ">
          <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[36px] items-center justify-center rounded text-base text-white">
            {events_list.event_num}
          </span>
          <span className="flex-1">{events_list.event_name}</span>
          <span className="flex-1 mr-10"></span>
          <span className="text-sm text-white dark:text-dark-3">
            {events_list.event_date}
          </span>
          <span className="text-sm ml-10 text-white dark:text-dark-3">
            {events_list.event_intro}
          </span>
        </p>
      </ol>
    </div>
  );
};

export default  Contents;  