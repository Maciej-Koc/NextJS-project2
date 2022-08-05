import NewMeetUpForm from "../components/meetups/NewMeetupForm";

export default function NewMeetUp() {
  function onAddMeetup(enteredMeetUpData) {
    console.log(enteredMeetUpData);
  }

  return <NewMeetUpForm onAddMeetup={onAddMeetup} />;
}
