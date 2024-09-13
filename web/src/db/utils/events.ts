export const revalidate = 0;
import connectToDB from "../db";
import events from "../models/Events";

// TODO:implement pagination
export  async function getEvents(){
    await connectToDB()
    const data = await events.find().select("-description").limit(20)
    return data
}

export  async function getEventById(id:string){
    await connectToDB()
    const data = await events.findOne({id:id}).lean()
    return data
}