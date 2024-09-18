import { PluginAPI } from "tailwindcss/types/config";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars: Record<string, string> = Object.entries(allColors).reduce(
    (vars, [key, val]) => {
      if (typeof val === "string") {
        vars[`--${key}`] = val;
      }
      return vars;
    },
    {} as Record<string, string>
  );

  addBase({
    ":root": newVars,
  });
}

export default addVariablesForColors;
