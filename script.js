function openSchool1() {
    document.getElementById("school1").classList.remove("d-none");
    document.getElementById("school2").classList.add("d-none");
    document.getElementById("school3").classList.add("d-none");
}
function openSchool2() {
    document.getElementById("school2").classList.remove("d-none");
    document.getElementById("school1").classList.add("d-none");
    document.getElementById("school3").classList.add("d-none");
}
function openSchool3() {
    document.getElementById("school3").classList.remove("d-none");
    document.getElementById("school2").classList.add("d-none");
    document.getElementById("school1").classList.add("d-none");
}
function openHousing() {
    document.getElementById("campusPanel").classList.remove("d-none");
    document.getElementById("ECSRow").classList.add("d-none");
}
function openECs() {
    document.getElementById("campusPanel").classList.add("d-none");
    document.getElementById("ECSRow").classList.remove("d-none");
    document.getElementById("livingston").classList.add("d-none");
    document.getElementById("collegeAve").classList.add("d-none");
    document.getElementById("busch").classList.add("d-none");
    document.getElementById("cook").classList.add("d-none");
}

function openCampus1() {
    document.getElementById("busch").classList.remove("d-none");
    document.getElementById("livingston").classList.add("d-none");
    document.getElementById("collegeAve").classList.add("d-none");
    document.getElementById("cook").classList.add("d-none");
}

function openCampus2() {
    document.getElementById("livingston").classList.remove("d-none");
    document.getElementById("busch").classList.add("d-none");
    document.getElementById("collegeAve").classList.add("d-none");
    document.getElementById("cook").classList.add("d-none");
}

function openCampus3() {
    document.getElementById("collegeAve").classList.remove("d-none");
    document.getElementById("livingston").classList.add("d-none");
    document.getElementById("busch").classList.add("d-none");
    document.getElementById("cook").classList.add("d-none");
}

function openCampus4() {
    document.getElementById("cook").classList.remove("d-none");
    document.getElementById("livingston").classList.add("d-none");
    document.getElementById("collegeAve").classList.add("d-none");
    document.getElementById("busch").classList.add("d-none");
}