import React, { useState, useCallback, useContext } from 'react';
import { FaStore, FaTruck } from 'react-icons/fa';
import { LoginContext } from '../../../Contexts/LoginContext';

const LoginSide = () => {
  const {userName, setUserName, selectedTypeOption, setSelectedTypeOption, setLoggedIn} = useContext(LoginContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleOptionClick = useCallback((option) => {
    setSelectedTypeOption(option);
    setIsOpen(false);
  }, []);

  const isLoginDisabled = userName.trim() === '';

  return (
    <div className="login-side p-8 h-full w-50">
      <h2 className="text-2xl text-indigo-950 font-bold mb-4">Нэвтрэх</h2>

      <div className="mb-4">
        <div htmlFor="username" className="block text-indigo-950 text-sm font-bold mb-2">
          Хэрэглэгчийн нэр
        </div>
        <input
          type="text"
          id="name"
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="Хэрэглэгчийн нэр"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="mb-4">
        <div className="block text-indigo-950 text-sm font-bold mb-2">
          Хэрэглэгчийн төрөл
        </div>
        <div className="relative inline-block w-full text-left">
          <button
            className="inline-flex w-full rounded-md border border-gray-300 shadow-xl px-4 py-2 bg-white text-sm font-medium text-indigo-950 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            onClick={toggleDropdown}
          >
            {selectedTypeOption === 'shop' ? (
              <div className='flex flex-row'>
                <FaStore className="mr-2 mt-1" />
                <div>Дэлгүүр</div>
              </div>
            ) : 
              <div className='flex flex-row'>
                <FaTruck className="mr-2 mt-1" />
                <div>Түгээлтийн ажилтан</div>
              </div>
           }
          </button>

          {isOpen && (
            <div className="origin-bottom-right absolute right-0 w-full border border-indigo-950 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{ zIndex: 999 }}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  className="block px-4 py-2 text-sm text-indigo-950 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => handleOptionClick('shop')}
                >
                  <div className='flex items-center'>
                    <FaStore className="mr-2" />
                    <div>Дэлгүүр</div>
                  </div>
                </button>
                <button
                  className="block px-4 py-2 text-sm text-indigo-950 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => handleOptionClick('driver')}
                >
                  <div className='flex items-center'>
                    <FaTruck className="mr-2" />
                    <div>Түгээлтийн ажилтан</div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className={`bg-blue-500 text-white p-2 rounded ${
          isLoginDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'
        } focus:outline-none focus:shadow-outline-blue mt-8`}
        disabled={isLoginDisabled}
        onClick={()=> setLoggedIn(true)}>
        Login
      </button>
    </div>
  );
};

export default LoginSide;