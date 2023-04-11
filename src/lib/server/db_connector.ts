import * as dotenv from "dotenv"
import mongoose from "mongoose"
import { Event, channels } from "./db_definitions"

export async function list_events(from?: Date, to?: Date) {
    let filter: { $gte?: Date, $lte?: Date } = {}
    if (from) {
        filter.$gte = from
    }
    if (to) {
        filter.$lte = to
    }

    return await Event.find({ date: filter })
}

export async function add_event(event: { name: string, description: string, start: Date, end?: Date, channels?: [channels] }) {
    const new_event_doc = new Event(event)
    await new_event_doc.save()

}


export async function connect_to_db() {
    dotenv.config()
    const connect_string = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}:${process.env.DB_PORT}`
    console.log(`connecting to ${connect_string}`) // hide pw
    await mongoose.connect(connect_string, {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS
    })

}