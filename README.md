# Starter project template by [monikossa](https://discordapp.com/users/monikossa)

```sh
yarn create astro --template ya-lops/monikossa-starter#master

or

npm create astro@latest -- --template ya-lops/monikossa-starter#master
```

## 🧞 Integrations
- [Prettier](https://docs.astro.build/en/editor-setup/#prettier)
- [MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [PartyTown](https://docs.astro.build/en/guides/integrations-guide/partytown/) *(not active @ astro.config.mjs )*
- [SASS/SCSS](https://docs.astro.build/en/guides/styling/#sass-and-scss)

## Also
- Predefined routine components
- [View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- CSS Source map, no inline styles
- Layered basic CSS rules
- `@ = src` *(tsconfig.json)*
- `robots.txt` (**disallow all**)


## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── images/
│   ├── js/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── app/
│   │       ├── AppFooter.astro
│   │       ├── AppHeader.astro
│   │       ├── CriticalCSS.astro
│   │       ├── ExternalFonts.astro
│   │       ├── FavIcon.astro
│   │       ├── FooterScripts.astro
│   │       ├── HeaderScripts.astro
│   │       ├── MetaOg.astro
│   │       └── MetaTwitter.astro
│   ├── content/
│   │   └── config.ts
│   ├── data/
│   ├── fonts/
│   ├── images/
│   ├── js/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   └── index.astro
│   └── styles/
│       ├── _app.scss
│       ├── _fonts.scss
│       ├── _props.scss
│       ├── _reset.scss
│       └── index.scss
├── package.json
└── robots.txt
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.


There's nothing special about `src/components/`. There are predefined components like `AppHeader`, `AppFooter`.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
