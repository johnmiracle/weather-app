/** @format */

import React, { useState } from 'react';
import { fetchApi } from '../api/fetchApi';
import LoadingBox from '../components/LoadingBox';
import Logo from '../iconfinder_weather.png';

function Home() {
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState('');
	const [info, setInfo] = useState('');

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		const data = await fetchApi(query);
		setInfo(data);
		setLoading(false);
		setQuery('');
	};

	return (
		<>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : (
				<div className="container-box">
					<div className="container">
						<div className="box">
							<img src={Logo} alt="Logo" className="logo" />
							<form onSubmit={handleSubmit} className="d-flex input-group w-auto">
								<input
									type="search"
									className="form-control search-bar"
									placeholder="Search..."
									aria-label="Search"
									onChange={(e) => setQuery(e.target.value)}
								/>
								<button
									className="btn btn-outline-primary"
									type="submit"
									data-mdb-ripple-color="dark"
								>
									Search
								</button>
							</form>

							{info.main && (
								<div className="container mt-5">
									<div className="info-box">
										<h4>
											<span className="">{info.name}</span>
											<sup className="info-country">{info.sys.country}</sup>
										</h4>
										<h3 className="text-center">
											<b>
												{Math.round(info.main.temp)}
												<sup>&#8451;</sup>
											</b>
										</h3>
										<div className="">
											<img
												className=""
												src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
												alt={info.weather[0].description}
											/>
											<p className="text-center">{info.weather[0].description}</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Home;
