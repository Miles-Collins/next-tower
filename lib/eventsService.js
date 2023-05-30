const baseUrl = "https://localhost:7045/api/events";

export async function getAllEvents() {
  console.log("Getting events");
  const res = await fetch("http://localhost:5275/api/events");
  if (!res.ok) {
    throw new Error("Something went wrong with the fetch");
  }
  const events = await res.json();
  console.log(events);
  return events;
}
