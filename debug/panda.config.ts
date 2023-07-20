import { defineConfig } from "@pandacss/dev";

import spacePreset from "../dist";

export default defineConfig({
  presets: [spacePreset],
  outdir: "debug/out",
});
