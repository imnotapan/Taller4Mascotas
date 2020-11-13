import { MongoClient } from "mongodb";

const uri = "mongodb://mongo.pablosz.tech?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    auth: {
        user: "user-info104-grupo5",
        password:
            process.env.MONGODB_PASSWORD ||
            "Agrega MONGODB_PASSWORD=tu_contraseña en archivo .env"
    },
});

export const dbConnection = client 
    .connect()
    .then((client) => {
        return client.db("info104-grupo5");
    })
    .catch((err) => {
        console.error(err);
        throw Error(err);
    });