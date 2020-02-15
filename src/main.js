import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './../src/doctor-service.js';

$(document).ready(function() {

  $('#findDoctorByName').click(function() {
    const name = $('#userInput').val();
    $('#userInput').val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDocByName(name);
      getElements(response);
      console.log(response);
    })();

    function getElements(response) {
      if (response) {
        let table = document.getElementById('userOutput');
        response.data.forEach(function (value, i) {
          let row = table.insertRow(i+1);
          let firstNameCell = row.insertCell(0);
          let lastNameCell = row.insertCell(1);
          let addressCell = row.insertCell(2);
          let phoneCell = row.insertCell(3);
          let websiteCell = row.insertCell(4);
          let acceptingNewPatientsCell = row.insertCell(5);

          firstNameCell.innerHTML = value.profile.first_name;
          lastNameCell.innerHTML = value.profile.last_name;
          addressCell.innerHTML = value.practices[0].visit_address.street + "," + " " + value.practices[0].visit_address.street2 + "," + " " + value.practices[0].visit_address.city + "," + " " + value.practices[0].visit_address.state + "," + " " + value.practices[0].visit_address.zip;
          phoneCell.innerHTML = value.practices[0].phones[0].number + "," + " " + value.practices[0].phones[0].type;
          websiteCell.innerHTML = 'https://BetterDocotor.com';
          acceptingNewPatientsCell.innerHTML = value.practices[0].accepts_new_patients;
        });
      } else {
        $(".errors").text(`There was an error handling your request`);
      }
    }
  });

  $('#findDoctorBySymptom').click(function() {
    const symptom = $('#userInput').val();
    $('#userInput').val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDocBySymptom(symptom);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        let table = document.getElementById('userOutput');
        response.data.forEach(function (value, i) {
          let row = table.insertRow(i+1);
          let firstNameCell = row.insertCell(0);
          let lastNameCell = row.insertCell(1);
          let addressCell = row.insertCell(2);
          let phoneCell = row.insertCell(3);
          let websiteCell = row.insertCell(4);
          let acceptingNewPatientsCell = row.insertCell(5);

          firstNameCell.innerHTML = value.profile.first_name;
          lastNameCell.innerHTML = value.profile.last_name;
          addressCell.innerHTML = value.practices[0].visit_address.street + "," + " " + value.practices[0].visit_address.street2 + "," + " " + value.practices[0].visit_address.city + "," + " " + value.practices[0].visit_address.state + "," + " " + value.practices[0].visit_address.zip;
          phoneCell.innerHTML = value.practices[0].phones[0].number + "," + " " + value.practices[0].phones[0].type;
          websiteCell.innerHTML = 'https://BetterDocotor.com';
          acceptingNewPatientsCell.innerHTML = value.practices[0].accepts_new_patients;
        });
      } else {
        $(".errors").text(`There was an error handling your request`);
      }
    }
  });
});