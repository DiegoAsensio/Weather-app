import React from "react";
import "../weather/Weather.css";
import logo from "../../assets/day/113.png";

export default function SearchWeather() {
	return (
		<>
			<div className='weather-app'>
				<div className='container'>
					<h1 className='brand'>The weather</h1>
					<div>
						<h2 className='temp'>16°</h2>
						<div className='city-time'>
							<h2 className='name'>London</h2>
							<small>
								<span className='time'>06:09</span>-
								<span className='date'>Monday Sep 19</span>
							</small>
						</div>
						<div className='weather'>
							<img className='icon' src={logo} alt='Sunny Icon' />
							<span className='condition'>Cloudy</span>
						</div>
					</div>
				</div>
			</div>
			<div className='panel'>
				<form id='locationInput'>
					<input
						type='text'
						className='search'
						placeholder='Search Location...'
					/>
					<button type='submit' className='submit'>
						<i className='fas fa-search'></i>
					</button>
				</form>
				<ul className='cities'>
					<li className='city'>New York</li>
					<li className='city'>Buenos Aires</li>
					<li className='city'>Paris</li>
					<li className='city'>Tokio</li>
				</ul>

				<ul className='details'>
					<h4>Weather Details</h4>
					<li>
						<span>Cloudy</span>
						<span className='cloudy'>89%</span>
					</li>
					<li>
						<span>Humidity</span>
						<span className='humidity'>64%</span>
					</li>
					<li>
						<span>Wind</span>
						<span className='wind'>8km/h</span>
					</li>
				</ul>
			</div>
		</>
	);
}
