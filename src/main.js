import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DinoService } from './../src/doctor-service.js';

$(document).ready(function() {

  $('#getDinos').click(function() {
    const input1 = $('#paragraphs').val();
    $('#paragraphs').val("");
    const input2 = $('#words').val();
    $('#words').val("");

    (async () => {
      let dinoService = new DinoService();
      const response = await dinoService.getDinoIpsum(input1, input2);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showDinos').text(`${response}`);
        $('.showDinos').show();
      } else {
        $('.showDinos').text(`There was an error handeling your request.`);
        $('.showDinos').show();
      }
    }

  });
});