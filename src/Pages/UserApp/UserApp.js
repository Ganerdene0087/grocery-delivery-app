import React, { useContext } from 'react';
import { FaStore, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { LoginContext } from '../../Contexts/LoginContext';
import UserHomePage from './UserHomePage';

const UserApp = () => {
	const {userName, setLoggedIn} = useContext(LoginContext);
	return (
		<div className='h-full'>
			<div className="info-head flex flex-row justify-between bg-indigo-950 text-white p-2 h-full">
				<div className='flex flex-row text-xl'>
					<FaStore className="mr-2 mt-1" />
					<div>Дэлгүүр</div>
				</div>
				
				<div className='flex flex-row text-xl'>
					<FaUser className="mr-2 mt-1" />
					<div>{userName}</div>
					<button className='ml-8' onClick={()=> setLoggedIn(false)}>
						<FaSignOutAlt className="mr-2 mt-1"/>
					</button>
				</div>
			</div>
			<UserHomePage/>
		</div>
  	);
};

export default UserApp;