import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const testScanDir = path.resolve(__dirname, "../test-scan-dir");
