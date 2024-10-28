$(document).ready(function () {
  const btn = $("#submitDay");

  const bellschedule = {
    1: { Start: "8:24 A.M.", End: "9:31 A.M." },
  };

  btn.on("click", function () {
    const selectedDay = $("#dayInput").val().trim().toUpperCase();

    // Validate the day input
    if (!["A", "B", "C", "D", "E", "F", "G"].includes(selectedDay)) {
      alert("Please enter a valid day");
      return;
    }

    $.ajax({
      url: `https://api.npoint.io/c520841037ca8d022063`,
      method: "GET",
      success: function (data) {
        const schedule = data.schedule;
        const daySchedule = schedule.filter((item) =>
          item.days.includes(selectedDay)
        );
      },
      error: function () {
        alert("Theres a connection error");
      },
    });
  });
});
