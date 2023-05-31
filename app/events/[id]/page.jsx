"use client";

import { getEventById, getTicketsByEventId } from "@/lib/eventsService.js";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import Layout from "@/components/layout.js";

export async function getEvent(id) {
  return await getEventById(id);
}

export async function getTickets(id) {
  return await getTicketsByEventId(id);
}

export default async function EventDetailsPage() {
  const { id } = useParams();
  const event = await getEvent(id);
  const tickets = await getTickets(id);

  return (
    <Layout>
      <div className="EventPage">
        <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
          <section className="flex flex-wrap mx-2 my-3 rounded">
            <div
              style={{
                backgroundImage: `url(${event?.coverImg})`,
              }}
              className={styles.bgImage}
            >
              <section className={styles.frosted}>
                <div className="w-full md:w-1/3 pr-4 pl-4 flex items-center">
                  <img
                    className={styles.activeImage}
                    src={event?.coverImg}
                    alt="Event Photo"
                  />
                </div>
                <div className="md:w-2/3 pr-4 pl-4">
                  <section className="flex flex-wrap justify-between container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 mt-4">
                    <div className={styles.eventDetailsFont}>
                      <div>
                        <h1>{event.name} </h1>
                        <h4>{event.location}</h4>
                      </div>
                      <div>
                        <h1>{event.startDate}</h1>
                      </div>
                    </div>
                  </section>
                  <section className="flex flex-wrap h-4/6 container mx-auto sm:px-4 max-w-full">
                    <div className="md:w-full pr-4 pl-4 p-2">
                      <p className={styles.eventDescriptionFont}>
                        {event.description}
                      </p>
                    </div>
                  </section>
                  <section className="w-full justify-between container mx-auto sm:px-4 max-w-full">
                    <div className="md:w-2/5 pr-4 pl-4">
                      <h6>
                        <span className={styles.ticketsLeftFont}>
                          {event.capacity}
                        </span>{" "}
                        spots left
                      </h6>
                    </div>
                    <div className="md:w-1/3 pr-4 pl-4 text-end"></div>
                  </section>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
