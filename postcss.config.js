const jekyllEnv = process.env.JEKYLL_ENV || "development";

module.exports = {
  plugins: [
    require("postcss-import"),
    require("@tailwindcss/postcss"),
    require("autoprefixer"),
    ...(jekyllEnv != "development"
      ? [
          require("cssnano")({ preset: "default" }),
        ]
      : [])
  ]
};