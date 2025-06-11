"use client";
import Section1 from "@/components/Events/Section1";
import Section2 from "@/components/Events/Section2";
import LoadingAnimation from "@/components/shared/Loader/LoadingAnimation";
import dayjs from "dayjs";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const EventsPage = () => {
  const [event, setEvent] = useState("past");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname, "this is pathname");

  if (pathname === "/events") {
    router.push("/");
  }

  const getApiUrl = (type) => {
    if (type === "past") {
      const today = dayjs().format("YYYYMMDD");
      return `https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/events_list?end_date=${today}`;
    }
    return "https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/events_list";
  };

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch(getApiUrl(event));
        const eventData = await res.json();
        setData(eventData);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [event]);

  return loading && !data?.posts ? (
    <LoadingAnimation />
  ) : (
    <>
      <Section1
        event={event}
        setEvent={setEvent}
        post={data?.posts}
        loading={loading}
      />
      <Section2 eventList={data?.posts} />
    </>
  );
};

export default EventsPage;
