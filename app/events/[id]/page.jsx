"use client";

import { getEventById } from "@/lib/eventsService.js";
import { useParams } from "next/navigation";

export async function getEvent(id) {
  return await getEventById(id);
}

export default async function EventDetailsPage() {
  const { id } = useParams();
  const event = await getEvent(id);

  return (
    <div className="EventPage">
      <div className="container-fluid">
        <section className="row mx-2 my-3 eventDetailsFont rounded ">
          <div
            style={{
              backgroundImage: `url(${event?.coverImg})`,
            }}
            className="rounded bg-active-image col-12"
          >
            <section className="frosted row">
              <div className="col-12 col-md-4 d-flex align-items-center">
                <img
                  src={event?.coverImg}
                  className="rounded img-fluid active-image-size coolBorder"
                />
              </div>
              <div className="col-md-8">
                <section className="row justify-content-between container-fluid mt-4">
                  <div className="col-12 eventDetailsFont">
                    <h1>{event.name} </h1>
                    <h4>{event.location}</h4>
                  </div>
                  <div className="col-md-5">
                    <h1>{event.startDate}</h1>
                  </div>
                </section>
                <section className="row desc-height container-fluid">
                  <div className="col-md-12 p-2">
                    <p>{event.description}</p>
                  </div>
                </section>
                <section className="row justify-content-between container-fluid">
                  <div className="col-md-5">
                    <h6>
                      <span className="ticketsLeftFont"></span> spots left
                    </h6>
                  </div>
                  <div className="col-md-4 text-end"></div>
                </section>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
