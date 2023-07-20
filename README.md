[![Downloads][npm-shield]][npm-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# More [🐼 PandaCSS](https://panda-css.com/) space utilities

Add the missing `spaceX` and `spaceY` utilities to [🐼 PandaCSS](https://panda-css.com/).

## Installation

```bash
npm install --save-dev pandacss-preset-space
```

## Usage

Add the preset to your PandaCSS configuration (`panda.config.ts`)

```ts
import { defineConfig } from "@pandacss/dev";

// Import the preset. The name can be anything you want
import spacePreset from "pandacss-preset-space";

export default defineConfig({
  presets: [
    spacePreset,
    // Re-add the panda preset if you want to keep
    // the default keyframes, breakpoints, tokens
    // and textStyles provided by PandaCSS
    "@pandacss/preset-panda",
  ],
});
```

You can now use the `spaceX` and `spaceY` utilities within your styles. The values are based on the `spacing` tokens you can set in your 🐼 PandaCSS configuration.

`spaceX` adds a margin to the left of every child element except the first one. `spaceY` adds a margin to the top of every child element except the first one.

```tsx
export function Page() {
  return (
    <div
      className={css({
        spaceY: 4,
      })}
    >
      <div>Hello</div>
      <div>World</div>
    </div>
  );
}
```

[contributors-shield]: https://img.shields.io/github/contributors/milandekruijf/pandacss-preset-space.svg?style=for-the-badge
[contributors-url]: https://github.com/milandekruijf/pandacss-preset-space/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/milandekruijf/pandacss-preset-space.svg?style=for-the-badge
[forks-url]: https://github.com/milandekruijf/pandacss-preset-space/network/members
[stars-shield]: https://img.shields.io/github/stars/milandekruijf/pandacss-preset-space.svg?style=for-the-badge
[stars-url]: https://github.com/milandekruijf/pandacss-preset-space/stargazers
[issues-shield]: https://img.shields.io/github/issues/milandekruijf/pandacss-preset-space.svg?style=for-the-badge
[issues-url]: https://github.com/milandekruijf/pandacss-preset-space/issues
[license-shield]: https://img.shields.io/github/license/milandekruijf/pandacss-preset-space.svg?style=for-the-badge
[license-url]: https://github.com/milandekruijf/pandacss-preset-space/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/milandekruijf
[npm-shield]: https://img.shields.io/npm/dw/pandacss-preset-space?style=for-the-badge
[npm-url]: https://www.npmjs.com/package/pandacss-preset-space
