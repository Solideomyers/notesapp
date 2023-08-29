import fs from "fs/promises";
import { execSync } from "child_process";
import path from "path";

// Define variables enviroment
const envContent = `DB_USER=
DB_HOST=
DB_PASSWORD=
`;

// Routes to your project
const pnpmExecutable = path.join(process.cwd(), "node_modules", ".bin", "pnpm");

(async () => {
  try {
    // Create .env
    await fs.writeFile(".env", envContent);

    // Message
    console.log("Define your environment variables in the .env file.");

    // pnpm i
    console.log("Installing dependencies...");
    execSync(`${pnpmExecutable} i`, { stdio: "inherit" });

    // pnpm start
    console.log("Starting the project...");
    execSync(`${pnpmExecutable} start`, { stdio: "inherit" });
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
