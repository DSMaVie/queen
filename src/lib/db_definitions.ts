import { Schema, model, type InferSchemaType } from "mongoose";

export enum CHANNELS {
    instagram = "Instagram",
    twitter = "Twitter",
    newsletter = "Newsletter"
}


const eventSchema = new Schema({
    _Id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String, required: true },
    start: { type: Date, required: true },
    end: Date,
    channels: [{
        type: String, enum: CHANNELS
    }]
})

type Event = InferSchemaType<typeof eventSchema>

export const Event = model<Event>("Event", eventSchema)