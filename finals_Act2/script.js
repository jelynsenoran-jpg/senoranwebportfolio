const button1 = document.getElementById("LoadBtn1");
const button2 = document.getElementById("Btn2");
const message = document.getElementById("Message");

const profile = document.getElementById("profiles");
const grade = document.getElementById("grades");
const schedule = document.getElementById("schedules");

function showMessage() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Checking Account...");
    }, 1000);
  });
}

button1.addEventListener("click", function () {
  message.innerHTML = "Loading...";

  showMessage().then(function (result) {
    message.innerHTML = result;

    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("Loading...");
      }, 2000);
    })

      .then(function (result) {
        message.innerHTML = result;

        return new Promise(function (resolve) {
          setTimeout(function () {
            resolve("Welcome!");
          }, 7000);
        });
      })

      .then(function (result) {
        message.innerHTML = result;
      }, 4000);
  });
});

button1.addEventListener("click", function () {
  message.innerHTML = "Loading...";
  profile.innerHTML = "Profile Loading...";
  grade.innerHTML = "Image Loading...";
  schedule.innerHTML = "Assets Loading...";
  message.style.color = "Red";
  const profilePromise = new Promise(function (resolve) {
    setTimeout(function () {
      profile.innerHTML = "Profile: Loaded";
      profile.style.color = "Violet";
      profile.style.fontWeight = "bold";
      resolve();
    }, 5000);
  });

  const imagePromise = new Promise(function (resolve) {
    setTimeout(function () {
      grade.innerHTML = "Image: Loaded";
      grade.style.color = "Pink";
      grade.style.fontWeight = "bold";
      resolve();
    }, 6000);
  });

  const assetPromise = new Promise(function (resolve) {
    setTimeout(function () {
      schedule.innerHTML = "Assets: Loaded";
      schedule.style.color = "Blue";
      schedule.style.fontWeight = "bold";
      resolve();
    }, 7000);
  });

  Promise.all([profilePromise, imagePromise, assetPromise])

    .then(function () {
      message.innerHTML = "Dashboard Ready!";
    }, 7000);
});

button2.addEventListener("click", function () {
  message.innerHTML = "Loading...";
  button1.style.backgroundColor = "Black";
  button2.style.backgroundColor = "Green";
  profile.innerHTML = "Profile Loading...";
  grade.innerHTML = "Grade Loading...";
  schedule.innerHTML = "Schedule Loading...";

  const profilePRomise = new Promise(function (resolve) {
    setTimeout(function () {
      profile.innerHTML = "Profile: Loaded";
      resolve();
    }, 5000);
  });

  const gradePRomise = new Promise(function (resolve) {
    setTimeout(function () {
      grade.innerHTML = "Grade: Loaded";
      resolve();
    }, 6000);
  });

  const schedulePRomise = new Promise(function (resolve) {
    setTimeout(function () {
      schedule.innerHTML = "Schedule: Loaded";
      resolve();
    }, 7000);
  });

  Promise.all([profilePRomise, gradePRomise, schedulePRomise])

    .then(function () {
      message.innerHTML = "Dashboard Ready!";
    }, 7000);
});

button2.addEventListener("click", function () {
  message.innerHTML = "Loading...";

  showMessage().then(function (result) {
    message.innerHTML = result;

    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("Loading...");
      }, 2000);
    })

      .then(function (result) {
        message.innerHTML = result;

        return new Promise(function (resolve) {
          setTimeout(function () {
            resolve("Welcome!");
          }, 7000);
        });
      })

      .then(function (result) {
        message.innerHTML = result;
      }, 4000);
  });
});
