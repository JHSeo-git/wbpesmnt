const fs = require('fs/promises');
const path = require('path');
const { colors } = require('../lib/index.js');

const outDir = path.join(require('../tsconfig.json').compilerOptions.outDir, 'colors');

/** Returns the given value converted to camel-case. */
/**
 * @see https://github.com/modulz/stitches/blob/canary/packages/core/src/convert/toCamelCase.js
 */
const toCamelCase = (/** @type {string} */ value) =>
  !/[A-Z]/.test(value) ? value.replace(/-[^]/g, (capital) => capital[1].toUpperCase()) : value;
const indent = (depth) => '  '.repeat(depth);

function makeCSSStyleVars(varName, { scale, sementic }, depth = 1) {
  const vars = [];
  for (const [key, value] of Object.entries(scale)) {
    vars.push(`${indent(depth)}--${varName}-${toCamelCase(key)}: ${value};`);
  }
  for (const [key, value] of Object.entries(sementic)) {
    if (value.startsWith('$')) {
      const originValue = `var(--${varName}-${value.slice(1)})`;
      vars.push(`${indent(depth)}--${varName}-${toCamelCase(key)}: ${originValue};`);
    } else {
      vars.push(`${indent(depth)}--${varName}-${toCamelCase(key)}: ${value};`);
    }
  }
  return vars;
}

function makeCSSColorLines(selector, { scale, sementic }, depth = 1) {
  const lines = [`${indent(depth - 1)}${selector} {`];

  lines.push(...makeCSSStyleVars('colors', { scale, sementic }, depth));

  lines.push(`${indent(depth - 1)}}`);

  return lines;
}

function buildScaleModule() {
  return Object.entries(colors).map(async ([themeName, themeColor]) => {
    const css = makeCSSColorLines(`.${themeName}-theme`, themeColor);
    const filePath = path.join(outDir, `${themeName}.css`);
    await fs.writeFile(filePath, css.join('\n'));

    return filePath;
  });
}

async function buildSementicModule() {
  const systemCss = [];
  Object.entries(colors).map(([themeName, themeColor]) => {
    if (themeName === 'light') {
      systemCss.push(...makeCSSColorLines(`:root`, themeColor));
    } else {
      systemCss.push('@media (prefers-color-scheme: dark) {');
      systemCss.push(...makeCSSColorLines(`:root`, themeColor, 2));
      systemCss.push('}');
    }
  });
  const filePath = path.join(outDir, 'system.css');
  await fs.writeFile(filePath, systemCss.join('\n'));
  return filePath;
}

Promise.all([...buildScaleModule(), buildSementicModule()]).then((files) => {
  console.log(`
🎉 Successfully generated CSS modules for themes.

${files.map((file) => `- ${file}`).join('\n')}
`);
});
