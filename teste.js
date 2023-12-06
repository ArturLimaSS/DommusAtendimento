let date = new Date(),
  currentYear = date.getFullYear(),
  currentMonth = date.getMonth;

const renderCalendar = (currentYear, currentMonth) => {
  let firstDayOfMonth = firstDayOf = new Date(currentYear, currentMonth, 1).getDay();
  return firstDayOfMonth;
}

const response = renderCalendar();

console.log(response);