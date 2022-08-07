import MeetupDetail from "../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      title="First Meetup"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Bryggen%2C_Bergen3.JPG/1280px-Bryggen%2C_Bergen3.JPG"
      address="Some Street 5, 555"
      description="E Plurbus Unum Go"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetdupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetdupId,
        title: "First Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Bryggen%2C_Bergen3.JPG/1280px-Bryggen%2C_Bergen3.JPG",
        address: "1000 Norway",
        description: "This is a first",
      },
    },
  };
}
