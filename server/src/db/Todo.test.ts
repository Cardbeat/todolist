import mongoose from "mongoose";
import dotenv from 'dotenv'
import Todo from "./model/Todo";
dotenv.config()

describe("Todo model", () => {
    beforeAll(async () => {
        const URI = 'mongodb://mongo/todolist' || process.env.MONGO
        await mongoose.connect(URI, {
            useNewUrlParser: true
        });
    });

    afterAll(async () => {
        mongoose.connection.close();
    });

    it("Should throw validation errors", () => {
        const todo = new Todo();

        expect(todo.validate).toThrow();
    });

});

