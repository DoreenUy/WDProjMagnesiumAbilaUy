document.addEventListener("DOMContentLoaded", function () {

  const body = document.body;

  document.getElementById("lumos").addEventListener("click", function () {
    body.style.transition = "0.5s";
    body.style.boxShadow = "inset 0 0 300px 120px rgba(255, 215, 0, 0.9)";
  });

  document.getElementById("nox").addEventListener("click", function () {
    body.style.boxShadow = "none";
    body.style.transition = "0.8s";
    body.style.filter = "brightness(0.3)";
    setTimeout(() => {
      body.style.filter = "brightness(1)";
    }, 800);
  });

  document.getElementById("wingardium").addEventListener("click", function () {
    this.style.transition = "1s ease-in-out";
    this.style.transform = "translateY(-60px) rotate(360deg) scale(1.2)";
    this.style.boxShadow = "0 0 40px cyan";

    setTimeout(() => {
      this.style.transform = "translateY(0) rotate(0deg) scale(1)";
      this.style.boxShadow = "none";
    }, 2000);
  });

  document.getElementById("expelliarmus").addEventListener("click", function () {
    body.style.transition = "0.3s";
    body.style.transform = "translateX(-30px)";
    body.style.backgroundColor = "#8b0000";

    setTimeout(() => {
      body.style.transform = "translateX(30px)";
    }, 100);

    setTimeout(() => {
      body.style.transform = "translateX(0)";
      body.style.backgroundColor = "";
    }, 300);
  });

  document.getElementById("protego").addEventListener("click", function () {

    const shield = document.createElement("div");
    shield.style.position = "fixed";
    shield.style.top = "50%";
    shield.style.left = "50%";
    shield.style.width = "10px";
    shield.style.height = "10px";
    shield.style.borderRadius = "50%";
    shield.style.background = "rgba(0,150,255,0.6)";
    shield.style.transform = "translate(-50%, -50%)";
    shield.style.zIndex = "9999";
    shield.style.transition = "0.8s ease-out";

    document.body.appendChild(shield);

    setTimeout(() => {
      shield.style.width = "2000px";
      shield.style.height = "2000px";
      shield.style.opacity = "0";
    }, 10);

    setTimeout(() => shield.remove(), 800);
  });

  document.getElementById("accio").addEventListener("click", function () {
    this.style.position = "relative";
    this.style.zIndex = "1000";
    this.style.transition = "0.6s ease-in-out";
    this.style.transform = "translateX(-200px) scale(1.4)";

    setTimeout(() => {
      this.style.transform = "translateX(0) scale(1)";
    }, 800);
  });

  document.getElementById("expecto").addEventListener("click", function () {
    body.style.transition = "1s";
    body.style.background =
      "radial-gradient(circle, rgba(200,220,255,0.9) 0%, #000 70%)";

    setTimeout(() => {
      body.style.background = "";
    }, 1500);
  });

  document.getElementById("reparo").addEventListener("click", function () {

    const crack = document.createElement("div");
    crack.style.position = "fixed";
    crack.style.top = "0";
    crack.style.left = "0";
    crack.style.width = "100%";
    crack.style.height = "100%";
    crack.style.background = `
      repeating-linear-gradient(45deg, transparent 0px, transparent 40px, rgba(255,255,255,0.4) 42px, transparent 44px),
      repeating-linear-gradient(-45deg, transparent 0px, transparent 50px, rgba(255,255,255,0.3) 52px, transparent 54px)
    `;
    crack.style.backdropFilter = "blur(2px)";
    crack.style.zIndex = "9999";
    crack.style.opacity = "1";
    crack.style.transition = "1s ease-out";

    document.body.appendChild(crack);

    setTimeout(() => {
      crack.style.opacity = "0";
      crack.style.transform = "scale(1.1)";
    }, 800);

    setTimeout(() => {
      crack.remove();
    }, 1800);

  });

  document.getElementById("rictusempra").addEventListener("click", function () {
    let count = 0;
    const interval = setInterval(() => {
      this.style.transform =
        `rotate(${Math.random() * 20 - 10}deg)`;
      count++;
      if (count > 15) {
        clearInterval(interval);
        this.style.transform = "rotate(0deg)";
      }
    }, 60);
  });

  document.getElementById("stupefy").addEventListener("click", function () {
    body.style.transition = "0.4s";
    body.style.filter = "grayscale(1) contrast(2)";
    setTimeout(() => {
      body.style.filter = "none";
    }, 1000);
  });

  document.getElementById("obliviate").addEventListener("click", function () {
    body.style.transition = "0.6s";
    body.style.filter = "blur(6px) brightness(1.3)";
    setTimeout(() => {
      body.style.filter = "blur(0)";
    }, 1500);
  });

  document.getElementById("diffindo").addEventListener("click", function () {

    const slash1 = document.createElement("div");
    const slash2 = document.createElement("div");

    [slash1, slash2].forEach(slash => {
      slash.style.position = "fixed";
      slash.style.width = "200%";
      slash.style.height = "200%";
      slash.style.background = "white";
      slash.style.zIndex = "9999";
      slash.style.transition = "0.6s ease-in-out";
    });

    slash1.style.transform = "rotate(45deg) translate(-100%, -100%)";
    slash1.style.top = "-50%";
    slash1.style.left = "-50%";

    slash2.style.transform = "rotate(45deg) translate(100%, 100%)";
    slash2.style.top = "-50%";
    slash2.style.left = "-50%";

    document.body.appendChild(slash1);
    document.body.appendChild(slash2);

    setTimeout(() => {
      slash1.style.transform = "rotate(45deg) translate(-25%, -25%)";
      slash2.style.transform = "rotate(45deg) translate(25%, 25%)";
    }, 50);

    setTimeout(() => {
      slash1.remove();
      slash2.remove();
    }, 700);

  });
  const creatureCards = document.querySelectorAll(".creature-card");

  creatureCards.forEach(card => {
    card.addEventListener("click", function () {
      card.classList.toggle("active");
    });
  });
});;