const axios = require("axios");

module.exports = {
  Query: {
    weather: async (p, { city }) => {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af65a767d0cbcb7fe9ae68442a6e3e76`
      );

      return data;
    },
    forecast: async (p, { city }) => {
      const {
        data: { list },
      } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=af65a767d0cbcb7fe9ae68442a6e3e76`
      );

      return list;
    },
  },
};
