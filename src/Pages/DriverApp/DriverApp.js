import React, { useContext, useState } from 'react';
import { FaTruck, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { LoginContext } from '../../Contexts/LoginContext';
import DriverMap from './DriverMap';

const DelguurCard = ({ delguur }) => {
	return (
	  <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mb-4">
		<h2 className="text-2xl font-bold mb-4">{delguur.name}</h2>
		<div className="space-y-2">
		  {delguur.product.map((product, index) => (
			<div key={index} className="border p-3 rounded-md">
			  <h3 className="text-xl font-semibold mb-2">{product.nm}</h3>
			  <p>{`Count: ${product.count}`}</p>
			</div>
		  ))}
		</div>
	  </div>
	);
  };
  
  const DelguurList = ({ delguurs }) => {
	return (
	  <div className="flex flex-wrap justify-center border">
		{delguurs.map((delguur, index) => (
		  <DelguurCard key={index} delguur={delguur} />
		))}
	  </div>
	);
  };

const DriverApp = () => {
	const {userName, setLoggedIn} = useContext(LoginContext);
	const center = [47.92663694421687, 106.91608968028797]; // Set your initial center coordinates
 	const zoom = 13; // Set your initial zoom level
  	const waypoints = [[47.90216700474683, 106.93111583433391], [47.926155509675496, 106.92640144210036], [47.918953727040524, 106.95394488649394], [47.90101255558179, 106.92888063647645]]; 
	const delguur = [{name: "Дэлгүүр 1", product: [{nm:"MCS", count: "200 ширхэг"}, {nm:"Өгөөж", count: "100 ширхэг"}, {nm:"Атар өргөө", count: "20 ширхэг"}]}, 
	{name: "Дэлгүүр 2", product: [{nm:"MCS", count: "150 ширхэг"}, {nm:"Өгөөж", count: "100 ширхэг"}, {nm:"Атар өргөө", count: "168 ширхэг"}]}, 
	{name: "Дэлгүүр 3", product: [{nm:"MCS", count: "250 ширхэг"}, {nm:"Өгөөж", count: "100 ширхэг"}, {nm:"Атар өргөө", count: "165 ширхэг"}]}, 
	{name: "Дэлгүүр 4", product: [{nm:"MCS", count: "300 ширхэг"}, {nm:"Өгөөж", count: "100 ширхэг"}, {nm:"Атар өргөө", count: "220 ширхэг"}]}, 
	]
	
	return (
		<div>
			<div className="info-head flex flex-row justify-between bg-indigo-950 text-white p-2 h-full">
				<div className='flex flex-row text-xl'>
					<FaTruck className="mr-2 mt-1" />
					<div>Түгээлт</div>
				</div>
				
				<div className='flex flex-row text-xl'>
					<FaUser className="mr-2 mt-1" />
					<div>{userName}</div>
					<button className='ml-8' onClick={()=> setLoggedIn(false)}>
						<FaSignOutAlt className="mr-2 mt-1"/>
					</button>
				</div>
			</div>
			<DriverMap center={center} zoom={zoom} waypoints={waypoints} />
			<h2>Дэлгүүрүүдийн жагсаалт</h2>
			<DelguurList delguurs={delguur} />
		</div>
  	);
};

export default DriverApp;