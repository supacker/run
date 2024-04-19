import path from "path";
import { testScanDir } from "../constants.js";
import os from "os";
import fse from "fs-extra";

console.log({ testScanDir });

function createZshConfigFile() {
  console.log("Creating zsh config file...");
  const zshFile = path.join(os.homedir(), ".zshrc");
  fse.ensureFileSync(zshFile);

  const zshContent = fse.readFileSync(zshFile, "utf8");
}

export function scan() {
  createZshConfigFile();
}

scan();
