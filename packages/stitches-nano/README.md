# stitches

```json
{
    "build:cjs": "BABEL_ENV=commonjs babel src -d lib -x .ts --out-file-extension .js --source-maps",
    "build:esm": "BABEL_ENV=esmodule babel src -d lib -x .ts --out-file-extension .mjs --source-maps"
}
```