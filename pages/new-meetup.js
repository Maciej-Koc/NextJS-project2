import NewMeetUpForm from "../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

export default function NewMeetUp() {
  const router = useRouter();

  async function onAddMeetup(enteredMeetUpData) {
    const resp = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // const data = await resp.json();

    // console.log(data);

    router.push("/");
  }

  return <NewMeetUpForm onAddMeetup={onAddMeetup} />;
}
