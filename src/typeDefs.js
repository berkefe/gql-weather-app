const { gql } = require("apollo-server");

module.exports = gql`
  type Data {
    name: String
    sys: Sys
    dt: Int
    main: Main
    weather: [Weather]
    wind: Wind
  }

  type Wind {
    speed: Float
  }

  type Weather {
    description: String
    main: String
    icon: String
  }

  type Main {
    temp: Float
    temp_min: Float
    temp_max: Float
    humidity: Int
  }

  type Sys {
    country: String
    sunrise: Int
    sunset: Int
  }

  type Forecast {
    dt_txt: String
    main: Main
    weather: [Weather]
  }

  type Query {
    weather(city: String!): Data
    forecast(city: String!): [Forecast]
  }
`;
