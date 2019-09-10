# Holo Cache Worker

**This is Pre-Alpha software only for testing purposes.**

This is the Cloudflare worker that handles some Cloudflare cache settings for Holo.

## Wrangler

Wrangler process to deploy this code:

1. Install wrangler ( [https://github.com/cloudflare/wrangler](https://github.com/cloudflare/wrangler) )
1. Setup `wrangler config` with correct email and api key
1. Create `package.json` file with correct package info
1. Setup `wrangler.toml` file with correct Cloudflare info
1. Run a command line:

```
wrangler publish --release
```

