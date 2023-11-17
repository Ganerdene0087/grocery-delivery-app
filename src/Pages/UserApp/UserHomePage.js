import React from 'react';

const FactoryList = ({ factories }) => {
	return (
	  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 h-full" style={{ zIndex: 999 }}>
		{factories.map((factory, index) => (
		  <div key={index} className="bg-white p-4 rounded-xl shadow-md bg-gradient-to-r from-indigo-500 ">
			<h2 className="text-3xl font-bold my-2">{factory.name}</h2>
			<p className="text-gray-600 my-2">{`Ирэх огноо: ${factory.next_coming}`}</p>
			<p className="text-2xl text-indigo-700 font-bold my-2">{`Үнийн дүн: ${factory.price}`}</p>
		  </div>
		))}
	  </div>
	);
  };

const UserHomePage = () => {
	const FactoryJsonData = [
		{name: "MCS Coca Cola LLC", next_coming: "1 цагийн дараа", price: "725,000₮"},
		{name: "MCS Coca Cola LLC", next_coming: "1 цагийн дараа", price: "725,000₮"},
		{name: "Атар өргөө ХК", next_coming: "Маргааш", price: "500,000₮"},
		{name: "Мах импекс ХК", next_coming: "Нөгөөдөр", price: "250,000₮"},
		{name: "Хүн Од ХК", next_coming: "2023.11.27", price: "300,000₮"},
		{name: "MCS Coca Cola LLC", next_coming: "2023.11.28", price: "725,000₮"},
		{name: "Атар өргөө ХК", next_coming: "2023.11.29", price: "500,000₮"},
		{name: "Мах импекс ХК", next_coming: "2023.11.29", price: "250,000₮"},
		{name: "Хүн Од ХК", next_coming: "2023.11.27", price: "300,000₮"},
		{name: "MCS Coca Cola LLC", next_coming: "2023.11.27", price: "725,000₮"},
		{name: "Атар өргөө ХК", next_coming: "2023.11.29", price: "500,000₮"},
		{name: "Мах импекс ХК", next_coming: "2023.11.29", price: "250,000₮"},
		{name: "Хүн Од ХК", next_coming: "2023.11.29", price: "300,000₮"},
	];
	return (
		<div className="flex flex-col h-full overflow-y-scroll">
			<div className='text-4xl my-8 '>Таний идэвхтэй захиалгууд захиалга</div>
			<div className=' h-full w-full'>
				<FactoryList factories={FactoryJsonData} />
			</div>
			
		</div>
	);
};

export default UserHomePage;