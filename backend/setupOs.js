import { promises as fs } from "fs";
import { execSync } from "child_process";
import path from "path";
import readline from "readline";

async function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

(async () => {
  const backendPath = path.join("./");
  const envPath = path.join(backendPath, ".env");

  try {
    let envFileExists = true;
    try {
      await fs.access(envPath);
    } catch (error) {
      envFileExists = false;
    }

    if (envFileExists) {
      console.log(".env file already exists. Aborting...");
      return;
    }

    const dbUser = await getUserInput(
      "Please introduce the value for DB_USER: "
    );
    const dbHost = await getUserInput(
      "Please introduce the value for DB_HOST: "
    );
    const dbPassword = await getUserInput(
      "Please introduce the value for DB_PASSWORD: "
    );

    const envContent = `DB_USER=${dbUser}
DB_HOST=${dbHost}
DB_PASSWORD=${dbPassword}`;

    await fs.writeFile(envPath, envContent);

    console.log("Instalando dependencias...");
    execSync("pnpm i", {
      stdio: "inherit",
      cwd: backendPath,
      shell: true,
    });

    console.log("Iniciando el proyecto...");
    execSync("pnpm start", {
      stdio: "inherit",
      cwd: backendPath,
      shell: true,
    });
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
})();
