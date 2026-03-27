document.addEventListener("DOMContentLoaded", () => {
  const beginBtn = document.getElementById("beginExperience");
  const experience = document.getElementById("experience");
  const scenes = Array.from(document.querySelectorAll(".scene"));
  const nextButtons = Array.from(document.querySelectorAll(".next-btn"));

  let currentSceneIndex = 0;

  function showScene(index) {
    scenes.forEach((scene, i) => {
      scene.classList.toggle("hidden", i !== index);
    });
  }

  beginBtn.addEventListener("click", () => {
    beginBtn.disabled = true;
    experience.classList.remove("hidden");
    currentSceneIndex = 0;
    showScene(currentSceneIndex);
    window.scrollTo({ top: experience.offsetTop - 40, behavior: "smooth" });
  });

  nextButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentSceneIndex < scenes.length - 1) {
        currentSceneIndex += 1;
        showScene(currentSceneIndex);
        window.scrollTo({ top: experience.offsetTop - 40, behavior: "smooth" });
      }
    });
  });
});
