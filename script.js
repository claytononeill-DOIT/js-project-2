function compareDates() {
  var currentDate = new Date();

  dueDate = new Date(2024, 10, 1);
  console.log(currentDate);
  console.log(dueDate);

  const diffInMS = dueDate.getTime() - currentDate.getTime();
  const diffInSec = diffInMS / 1000;
  const diffInMin = diffInSec / 60;
  const diffInHrs = diffInMin / 60;
  const diffInDays = diffInHrs / 24;
  alert(
    "there are " +
      Math.floor(diffInDays) +
      " days, " +
      Math.floor(diffInHrs % 24) +
      " hours, " +
      Math.floor(diffInMin % 60) +
      " minutes, and " +
      Math.floor(diffInSec % 60) +
      " seconds until November 1, 2024."
  );
}

document.getElementById("alert-button").addEventListener("click", compareDates);
