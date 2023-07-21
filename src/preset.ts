import { defineConfig } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";

export const preset: Preset = defineConfig({
  utilities: {
    extend: {
      spaceX: {
        className: "space-x",
        values: "spacing",
        transform(value) {
          return {
            "& > :not([hidden]) ~ :not([hidden])": {
              marginInlineStart: value,
            },
          };
        },
      },
      spaceY: {
        className: "space-y",
        values: "spacing",
        transform(value) {
          return {
            "& > :not([hidden]) ~ :not([hidden])": {
              marginBlockStart: value,
            },
          };
        },
      },
      
    },
  },
});

export default preset;
