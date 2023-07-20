import { defineConfig } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";

export const preset: Preset = defineConfig({
  utilities: {
    extend: {
      spaceX: {
        className: "space-x",
        values: "spacing",
        transform: (value) => ({
          "& > * + *": {
            marginLeft: value,
          },
        }),
      },
      spaceY: {
        className: "space-y",
        values: "spacing",
        transform: (value) => ({
          "& > * + *": {
            marginTop: value,
          },
        }),
      },
    },
  },
});

export default preset;
