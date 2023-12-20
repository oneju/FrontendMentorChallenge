const calc = () => {
  const day = document.querySelector("#day").value;
  const month = document.querySelector("#month").value;
  const year = document.querySelector("#year").value;
  const birth = document.querySelector(".inputSection");
  const newDate = new Date(year, month - 1, day);

  if (
    validate("day", day, newDate.getDate()) ||
    validate("month", month, month) ||
    validate("year", year, year) ||
    validate("date", newDate, newDate)
  ) {
    if (!birth.classList.contains("invalid")) birth.classList.add("invalid");
    return result("--", "--", "--");
  } else {
    if (birth.classList.contains("invalid")) birth.classList.remove("invalid");
  }

  const now = new Date(2023, 5, 10);
  const cur_month = new Date();
  cur_month.setMonth(cur_month.getMonth() + 1);
  cur_month.setDate(0);
  const fullDate = cur_month.getDate();

  let fin_days = 0;
  let fin_months = 0;
  let fin_years = 0;
  const days = now.getDate() - newDate.getDate();
  const months = now.getMonth() - newDate.getMonth();
  if (days < 0) {
    fin_months = -1;
    fin_days = fullDate - 1;
  }
  fin_days += days;
  fin_months += months;
  if (fin_months < 0) {
    fin_months += 11;
    fin_years = -1;
  }
  const years = now.getFullYear() - newDate.getFullYear();
  fin_years += years;

  return result(fin_years, fin_months, fin_days);
};
const validate = (type, value, newvalue) => {
  if (type === "date") {
    if (value == "Invalid Date") {
      const dateError = document.querySelector("#day-errormsg");
      dateError.textContent = "Must be a valid date";
      return true;
    } else return false;
  }
  const error = document.querySelector("#" + type + "-errormsg");
  let errormsg = "";
  const now = new Date();
  if (!value || value < 0) {
    errormsg = "This field is required"; // empty
  } else if (type === "day" && (value > 31 || value != newvalue))
    errormsg = "Must be a valid day"; // valid day
  else if (type === "month" && value > 12)
    errormsg = "Must be a valid month"; // valid month
  else if (type === "year" && value > now.getFullYear())
    // valid year
    errormsg = "Must be in the past";

  error.textContent = errormsg;
  if (errormsg === "") return false;
  return true;
};

const result = (years, months, days) => {
  const res_years = document.querySelector("#res-years");
  const res_months = document.querySelector("#res-months");
  const res_days = document.querySelector("#res-days");
  res_years.textContent = years;
  res_months.textContent = months;
  res_days.textContent = days;
};
