import { defineConfig } from '@tutorialkit/theme';
import { globSync } from 'fast-glob';
import fs from 'node:fs/promises';
import { basename, dirname } from 'node:path';
import { presetIcons } from 'unocss';

const iconPaths = globSync('./icons/languages/*.svg');

const customIconCollection = iconPaths.reduce(
  (acc, iconPath) => {
    const collectionName = basename(dirname(iconPath));
    const [iconName] = basename(iconPath).split('.');

    acc[collectionName] ??= {};
    acc[collectionName][iconName] = async () => fs.readFile(iconPath, 'utf8');

    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>,
);

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        ...customIconCollection,
      },
    }),
  ],
});
