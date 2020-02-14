import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './../src/doctor-service.js';

$(document).ready(function() {

  $('#findDoctor').click(function() {
    const name = $('#doctorName').val();
    $('#doctorName').val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDocByName(name);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showDoctors').html(`${response}`);
        $('.showDoctors').show();
      } else {
        $('.showDoctors').html(`There was an error handeling your request.`);
        $('.showDoctors').show();
      }
    }

  });
});