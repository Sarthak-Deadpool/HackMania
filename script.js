
document.querySelector(".break-btn").addEventListener("click", () => {
    const btn = document.querySelector(".break-btn");
    btn.innerText = "Break started...";
    btn.disabled = true;
    setTimeout(() => {
      btn.innerText = "Take 1-min break";
      btn.disabled = false;
    }, 60000);
  });
  
  document.getElementById("yes-btn").addEventListener("click", () => {
    alert("Sleep timer enabled. Autoplay will stop after this video.");
    console.log("Autoplay disabled");
  });
  
  document.getElementById("no-btn").addEventListener("click", () => {
    alert("Sleep timer canceled. Autoplay will continue.");
    console.log("Autoplay enabled");
  });
  