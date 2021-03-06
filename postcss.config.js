module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./publish/**/*.html"],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        whitelist: [
          "tab-active",
          "searchresult",
          "md:flex",
          "md:w-1/3",
          "md:w-2/3",
          "border-b",
          "hover:bg-red-100",
          "absolute",
          "right-0",
          "bottom-0",
          "m-2",
          "text-xs",
          "text-gray-500",
          "hover:text-gray-400",
          "bg-gray-800",
          "hover:bg-gray-700",
          "px-1",
          "rounded",
          "focus:outline-none",
          "transition",
          "duration-100"
        ]
      })
  ]
};
