import { MongoClient } from "mongodb";

//not about defining or rendering react componenents
//only funcitons that define server side code

// /api/new-meetup
// POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://USERNAME:PASSWORD@cluster0.2xfjzqe.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
