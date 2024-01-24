document.getElementById("vote1").innerHTML = localStorage.clickone;
document.getElementById("vote2").innerHTML = localStorage.clicktwo;
document.getElementById("vote3").innerHTML = localStorage.clickthree;

document.getElementById("voteFirst").textContent = localStorage.voteFirst
document.getElementById("voteSecond").textContent = localStorage.voteSecond
document.getElementById("voteThird").textContent = localStorage.voteThird


function voteNameFirst() { //Allows user to choose name
  localStorage.voteFirst = prompt("Choose your first challenger: ")
  document.getElementById("voteFirst").textContent = localStorage.voteFirst
}

function voteNameSecond() {
  localStorage.voteSecond = prompt("Choose your second challenger: ")
  document.getElementById("voteSecond").textContent = localStorage.voteSecond
}

function voteNameThird() {
  localStorage.voteThird = prompt("Choose your third challenger: ")
  document.getElementById("voteThird").textContent = localStorage.voteThird
}

function voteForFirst() {
    if (localStorage.clickone) {
        localStorage.clickone = Number(localStorage.clickone) + 1;
    }
    else {
        localStorage.clickone = 1;
    }
    document.getElementById("vote1").innerHTML = localStorage.clickone;
}

function voteForSecond() {
    if (localStorage.clicktwo) {
        localStorage.clicktwo = Number(localStorage.clicktwo) + 1;
    }
    else {
        localStorage.clicktwo = 1;
    }
    document.getElementById("vote2").innerHTML = localStorage.clicktwo;
}

function voteForThird() {
    if (localStorage.clickthree) {
        localStorage.clickthree = Number(localStorage.clickthree) + 1;
    }
    else {
        localStorage.clickthree = 1;
    }
    document.getElementById("vote3").innerHTML = localStorage.clickthree;
}

function voteReset() {
    localStorage.clickone = 0;
    localStorage.clicktwo = 0;
    localStorage.clickthree = 0;

    document.getElementById("vote1").innerHTML = localStorage.clickone;
    document.getElementById("vote2").innerHTML = localStorage.clicktwo;
    document.getElementById("vote3").innerHTML = localStorage.clickthree;
}

function nameReset() {
  localStorage.voteFirst = "Vote1"
  localStorage.voteSecond = "Vote2"
  localStorage.voteThird = "Vote3"

  document.getElementById("voteFirst").textContent = localStorage.voteFirst
  document.getElementById("voteSecond").textContent = localStorage.voteSecond
  document.getElementById("voteThird").textContent = localStorage.voteThird
}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [localStorage.voteFirst, localStorage.voteSecond, localStorage.voteThird],
    datasets: [{
      label: 'number of Votes',
      data: [localStorage.clickone, localStorage.clicktwo, localStorage.clickthree],
      borderWidth: 1
    }]
  },
  options: {

    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});