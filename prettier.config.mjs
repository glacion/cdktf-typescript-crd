export default {
  importOrder: ["^@lib/(.*)$", "^@live/(.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 120,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
