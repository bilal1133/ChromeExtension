var title = document.querySelectorAll(
  'p[role="heading"][aria-level="3"][class="QTdEgIS tbody-5 text-normal"][title]'
);

//This Download function
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
var all_titles = [];

for (let i = 0; i < title.length; i++) {
  all_titles.push("\n" + title[i].innerText);
}
download("Gig_Title.txt", all_titles);
