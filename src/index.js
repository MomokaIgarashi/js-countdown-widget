const counter = document.querySelector(".counter");
const counter_day = document.querySelector(".counter_day");
const counter_hour = document.querySelector(".counter_hour");
const counter_minutes = document.querySelector(".counter_minutes");
const counter_second = document.querySelector(".counter_second");

function countDown() {
  const now = new Date();
  const targetTime = new Date("2023/07/03 00:00");
  const differTime = targetTime - now;

  const differTime_Day = Math.floor(differTime / 1000 / 60 / 60 / 24);
  const differTime_Hour = Math.floor(differTime / 1000 / 60 / 60) % 24;
  const differTime_Min = Math.floor(differTime / 1000 / 60) % 60;
  const differTime_Second = Math.floor(differTime / 1000) % 60;

  counter.innerHTML = "Count Down Widget";
  counter_day.innerHTML = differTime_Day + "day";
  counter_hour.innerHTML = differTime_Hour + " hour";
  counter_minutes.innerHTML = differTime_Min + " min";
  counter_second.innerHTML = differTime_Second + " sec";

  setTimeout(countDown, 1000);
}
countDown();
