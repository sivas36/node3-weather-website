const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msg1 = document.querySelector("#msg1");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  msg1.textContent = "Loading...";
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error || data.forecast === undefined) {
        msg1.textContent = `Enter correct location`;
      } else {
        msg1.textContent = `In ${data.location} the climate is ${data.forecast}`;
      }
    });
  });
});
