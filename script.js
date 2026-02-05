function joinGym() {
  alert("🔥 Welcome to PowerFit Gym! Our team will contact you soon.");
}

function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value / 100;

  if (weight === "" || height === "") {
    document.getElementById("result").innerText =
      "Please enter valid values!";
    return;
  }

  let bmi = (weight / (height * height)).toFixed(2);
  document.getElementById("result").innerText =
    "Your BMI is: " + bmi;
}
