import { server } from "./app.js";
import { conn } from "./db.js";

const PORT = process.env.PORT || 3001;
conn.sync({ force: false }).then(() => {
  console.log("Database connected");
  server.listen(PORT, () => {
    console.log(`Server raised in the port: ${PORT}`);
  });
});
