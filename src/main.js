import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './../src/doctor-service.js';

$(document).ready(function() {

  $('#findDoctorByName').click(function() {
    const name = $('#doctorName').val();
    $('#doctorName').val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDocByName(name);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        let table = document.getElementById('showByName');
        response.data.forEach(function (value, i) {
          // console.log('index: ', i);
          // console.log('value: ', value);
          // console.log('first-name: ', value.profile.first_name);
          let row = table.insertRow(i+1);

          let firstNameCell = row.insertCell(0);
          let lastNameCell = row.insertCell(1);

          firstNameCell.innerHTML = value.profile.first_name;
          lastNameCell.innerHTML = value.profile.last_name;
        });

        // $('#showByName').text(`${response.data[0].profile.first_name}`);
        // $('#showByName').show();
      } else {
        $('#showByName').text(`There was an error handeling your request.`);
        $('#showByName').show();
      }
    }

  });

});