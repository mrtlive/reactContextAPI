# OpenWeather API created with create react app using react context api for patika.dev homework

![image](https://user-images.githubusercontent.com/23610345/185237729-c1d85848-0505-449c-afe3-5f603d7bfec0.png)



# React Weather App with OpenWeather API and Context API

This repository contains a React weather app that utilizes the OpenWeather API for fetching weather data, and the Context API for state management. This app allows users to search for any city's weather information by entering the city name or zip code.

## Getting Started

To run the app locally:

1. Clone this repository.
2. Navigate to the root directory of the project.
3. Install dependencies by running `npm install`.
4. Replace {API_KEY} `<your-api-key>. You can get an API key from [OpenWeather](https://openweathermap.org/api).
5. Start the development server with `npm start`.

## Usage

Once the app is running, enter a city name or zip code in the input field and press "Enter" or click on the search button. The weather information for the given location will be displayed below the input field.

## Context API

This app uses the Context API to manage state globally. The `WeatherContext` component provides the `state` object and the `dispatch` function to all child components through a `Provider` component.

## Conclusion

This React weather app serves as a great example of how to use the OpenWeather API and the Context API to build a scalable and maintainable application. Feel free to explore the code and make changes to gain a better understanding of how the app works.
