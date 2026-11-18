import { config } from "dotenv"
import { existsSync } from "node:fs"
import { dirname, join } from "node:path"

// search upward for the nearest .env file untill you reach the .env file that hosts the keys
function findEnv(start = process.cwd()): string | undefined {
    let dir = start;
    while (true) {
        const candidate = join(dir, ".env");
        if (existsSync(candidate)) return candidate;
        const parent = dirname(dir);
        if (parent === dir) return undefined;
        dir = parent;

    }
}
config({ path: findEnv(), override: true, quiet: true });