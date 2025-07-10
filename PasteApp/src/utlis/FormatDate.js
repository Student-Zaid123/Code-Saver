// src/utils/formatDate.js
const FormatDate = (date) => {
  if (!date) return "No date provided";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default FormatDate;
