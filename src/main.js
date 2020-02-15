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
        $('.showByName').text(`${response}`);
        $('.showByName').show();
      } else {
        $('.showByName').text(`There was an error handeling your request.`);
        $('.showByName').show();
      }
    }

  });
});