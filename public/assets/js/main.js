let list = document.querySelectorAll(".navigation li");

document.addEventListener("DOMContentLoaded", function() {
  let currentPageURL = window.location.href;

  list.forEach((item) => {
    let linkURL = item.querySelector("a").href;

    if (currentPageURL === linkURL) {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      item.classList.add("hovered");
    }
  });
});

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

fetch("http://localhost:8080/api/UserData/Details")
  .then((response) => response.json())
  .then((data) => {
    const tbody = document.querySelector("tbody");
    data.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
                                            <td>${user.username}</td>
                                            <td>${user.full_name}</td>
                                            <td class="male">${user.gender}</td>
                                            <td>${user.verified}</td>
                                            <td>${user.private}</td>
                                            <td>${user.account_type}</td>
                                            <td>${user.followers}</td>
                                            <td>${user.city}</td>
      `;
      tbody.appendChild(tr);
    });
  });

const searchData = () => {
  var filter = document.getElementById("mySearch").value.toUpperCase();

  var table = document.getElementById("myTable");
  var tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td");

    for (j = 0; j < td.length; j++) {
        if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
            found = true;
        }
    }
    if (found) {
        tr[i].style.display = "";
        found = false;
    } else {
        tr[i].style.display = "none";
    }
  }
}