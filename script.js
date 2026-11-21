function updateDoctors() {

    var department = document.getElementById("department").value;
    var doctor = document.getElementById("doctor");

    // Remove existing doctors
    doctor.innerHTML = "<option value=''>Select Doctor</option>";

    var doctors = [];

    switch (department) {

        case "General Medicine":
            doctors = [
                "Dr. Kundan Raj",
                "Dr. Anushka Singh"
            ];
            break;

        case "Cardiology":
            doctors = [
                "Dr. Shakshi Singh",
                "Dr. Bharti Mishra"
            ];
            break;

        case "Neurology":
            doctors = [
                "Dr. Kunal Singh",
                "Dr. Utkarsh Pandey"
            ];
            break;

        case "Orthopedics":
            doctors = [
                "Dr. Anchal Gupta",
                "Dr. Akash Modi"
            ];
            break;

        case "ENT":
            doctors = [
                "Dr. Aditya Yadav",
                "Dr. Amit Verma"
            ];
            break;

        case "Dermatology":
            doctors = [
                "Dr. Asha Kumari",
                "Dr. Deepshikha"
            ];
            break;

        case "Pediatrics":
            doctors = [
                "Dr. Muskan Singh",
                "Dr. Rahul Singh"
            ];
            break;
    }

    for (var i = 0; i < doctors.length; i++) {

        var option = document.createElement("option");
        option.text = doctors[i];
        option.value = doctors[i];

        doctor.appendChild(option);
    }
}
const today = new Date().toISOString().split("T")[0];
document.getElementById("date").setAttribute("min", today);

function vcStartCall(){
  var phone = document.getElementById("vc-phone").value.replace(/\D/g,"");
  var err = document.getElementById("vc-err");
  if(!/^[6-9]\d{9}$/.test(phone)){ err.style.display="block"; return; }
  err.style.display="none";

  var btn = document.querySelector(".vc-call");
  btn.disabled = true; btn.textContent = "📞 Calling you… ";

  fetch("CallMeServlet", {
    method:"POST",
    headers:{ "Content-Type":"application/x-www-form-urlencoded" },
    body:"mobile="+phone
  }).then(function(res){ return res.json(); }).then(function(j){
    if(j.ok){
      btn.textContent = "Ringing..... Recieve the phone call ";
    } else {
      btn.disabled = false; btn.textContent = "📞 Call Me Now";
      alert("Call nahi lag payi, thodi der baad try karein ya neeche form bharein.");
    }
  }).catch(function(){
    btn.disabled = false; btn.textContent = "📞 Call Me Now";
    alert("Server se connect nahi hua. Tomcat chalu hai kya?");
  });
}

var selectedLanguage = "en";

function vcSetLang(lang, btn) {

    selectedLanguage = lang;

    var buttons = document.querySelectorAll(".vc-langs button");

    buttons.forEach(function(button) {
        button.classList.remove("sel");
    });

    btn.classList.add("sel");

    console.log("Selected Language:", selectedLanguage);
}