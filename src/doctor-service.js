export class DinoService {
  async getDinoIpsum(input1, input2) {
    try {
      let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${input1}&words=${input2}`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }
}