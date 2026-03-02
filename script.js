const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
function scrollExplore(amount) {
  document.getElementById("exploreScroll").scrollBy({
    left: amount,
    behavior: "smooth"
  });
}