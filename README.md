# Vite IPFS Hosting

### How to Deploy

1. Build

```bash
$ npm install
$ npm run build
```

2. Upload to IPFS

Upload the build output (`./dist`) to IPFS

### Mainly Two Points

1. Using hash-router

So we can use the `CID` to access the site, navigate to another page, and reload a sub-page.
`http://127.0.0.1:8081/ipfs/QmQ85BsoKHxvY364jh1hdhDSCd9SBV6HFwSvTLNS7yhm28/#/team`

2. Config `base: ''` or `base: './'`

So that after build is completed, the `resource`/`asset` file uses a relative path

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    <script type="module" crossorigin src="./assets/index-ClsHNSjL.js"></script>
    <link rel="stylesheet" crossorigin href="./assets/index-BqhqAtY0.css" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

> **_Note_**: We should put the image files to `public` directory, and use a relative path as source like `<img src="images/react.svg" />`

### Friendly Links

- [IPFS](https://ipfs.tech/)
- [Fleek](https://fleek.xyz/)
