export class DinoService {
  async getDinoIpsum(input1, input2) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${input1}&query=${input2}&location=or-portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
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