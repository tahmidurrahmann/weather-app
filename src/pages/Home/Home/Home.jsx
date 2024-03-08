import { useState } from "react";
import "./Home.css"
import { TiWeatherCloudy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";

const api = {
    key: "58ca6af1ec5c3edef02fdda76abd193e",
    base: "https://api.openweathermap.org/data/2.5/",
}

const Home = () => {
    const [search, setSearch] = useState("");
    const [zipCode, setZipCode] = useState(null);
    const [weather, setWeather] = useState({});
    const [weather2, setWeather2] = useState({});

    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            });
    };

    const searchPressed2 = () => {
        fetch(`${api.base}weather?zip=${zipCode}&appid=${api.key}&units=metric`)
            .then((res) => res.json())
            .then((result) => {
                setWeather2(result);
            });
    }

    return (
        <div className="flex flex-col items-center justify-between max-w-screen-xl mx-auto lg:flex-row px-6">
            <header>
                <h1 className="text-center py-6 text-2xl font-semibold">Search by City name</h1>
                <div className="flex justify-center items-center gap-6">
                    <div className="input-container">
                        <input placeholder="Enter city/town..." onChange={(e) => setSearch(e.target.value)} className="input" name="text" type="text" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect fill="white"></rect>
                                <path
                                    d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                ></path>
                            </g>
                        </svg>
                    </div>

                    <button className="py-1 px-3 hover:scale-105 transition bg-[#6200ff] text-white rounded-lg" onClick={searchPressed}>Search</button>
                </div>
                {typeof weather.main !== "undefined" ? (
                    <div className="flex items-center justify-center mt-12">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title"><p>{weather.name}</p></h2>
                                <p className="flex items-center gap-2">{weather.main.temp}°C <TiWeatherCloudy /></p>
                                <p className="flex items-center gap-2">{weather.main.humidity} <WiHumidity /></p>
                                <p>{weather.weather[0].main}</p>
                                <p>({weather.weather[0].description})</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div><h1  className="py-20">City not found. Please enter a valid city name.</h1></div>
                )}
            </header>
            <header>
                <h1 className="text-center py-6 text-2xl font-semibold">Search by ZIP Code</h1>
                <div className="flex justify-center items-center gap-6">
                    <div className="input-container">
                        <input placeholder="Enter ZIP Code..." onChange={(e) => setZipCode(e.target.value)} className="input" name="text" type="text" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect fill="white"></rect>
                                <path
                                    d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                ></path>
                            </g>
                        </svg>
                    </div>

                    <button className="py-1 px-3 hover:scale-105 transition bg-[#6200ff] text-white rounded-lg" onClick={searchPressed2}>Search</button>
                </div>
                {typeof weather2.main !== "undefined" ? (
                    <div className="flex items-center justify-center mt-12">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title"><p>{weather2.name}</p></h2>
                                <p className="flex items-center gap-2">{weather2.main.temp}°C <TiWeatherCloudy /></p>
                                <p className="flex items-center gap-2">{weather2.main.humidity} <WiHumidity /></p>
                                <p>{weather2?.weather[0]?.main}</p>
                                <p>({weather2?.weather[0]?.description})</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div><h1 className="py-20">ZIP Code wise city not found. Please enter a valid ZIP Code.</h1></div>
                )}
            </header>
        </div>
    );
};

export default Home;