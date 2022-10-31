const calculateDate = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  return `${day} ${month} ${year}`;
};

export default calculateDate;
