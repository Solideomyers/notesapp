import fs from "fs/promises";
import { execSync } from "child_process";
import path from "path";

// Define variables enviroment
const envContent = `DB_USER=
DB_HOST=
DB_PASSWORD=
`;

// Routes to the script
const scriptDirectory = path.dirname(new URL(import.meta.url).pathname);

// Routes the project
const projectDirectory = path.join(scriptDirectory, "..", ".."); // subir dos niveles para llegar a la raíz de tu proyecto
const pnpmExecutable = path.join(
  projectDirectory,
  "backend",
  "node_modules",
  ".bin",
  "pnpm"
);

(async () => {
  try {
    // Create .env
    await fs.writeFile(
      path.join(projectDirectory, "backend", ".env"),
      envContent
    );

    // Message
    console.log("Define your environment variables in the .env file.");

    // pnpm i
    console.log("Installing dependencies...");
    execSync(`${pnpmExecutable} i`, {
      stdio: "inherit",
      cwd: path.join(projectDirectory, "backend"),
    });

    // pnpm start
    console.log("Starting the project...");
    execSync(`${pnpmExecutable} start`, {
      stdio: "inherit",
      cwd: path.join(projectDirectory, "backend"),
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
