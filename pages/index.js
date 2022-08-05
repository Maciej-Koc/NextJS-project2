import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Bryggen%2C_Bergen3.JPG/1280px-Bryggen%2C_Bergen3.JPG",
    address: "1000 Norway",
    description: "This is a first",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Bryggen%2C_Bergen3.JPG/1280px-Bryggen%2C_Bergen3.JPG",
    address: "2000 Norway",
    description: "This is a second meetup",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
