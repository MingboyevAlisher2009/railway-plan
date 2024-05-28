import React, { useState } from 'react';

const YolUstalari = () => {
  const [value, setValue] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectOption, setSelectOption] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  
  const validateName = (name) => name.length >= 3;
  const validatePhoneNumber = (number) => number.length >= 1;
  const validateSelectOption = (option) => option !== 'Yol ustasini tanlang';

  const handleChange = (e) => setValue(e.target.value);
  const phoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const selectChange = (e) => setSelectOption(e.target.value);
  
  const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};
const [employees, setEmployees] = useState(loadFromLocalStorage('employees1'));

  const btnAdd = () => {
    if (
      validateName(value) &&
      validatePhoneNumber(phoneNumber) &&
      validateSelectOption(selectOption)
    ) {
      const newEmployee = {
        id: employees.length + 1,
        name: value,
        phoneNumber: phoneNumber,
        role: selectOption
      };
      setEmployees([...employees, newEmployee]);
      saveToLocalStorage('employees1', [...employees, newEmployee]);
      setModalOpen(false);
      clearForm();
    } else {
      if (!validateName(value)) alert("Ismingizni kiriting va u 3 tadan kop bo'lishi kerak");
      if (!validatePhoneNumber(phoneNumber)) alert("Telefon raqamingizni kiriting va u 9 tadan kop bo'lishi kerak");
      if (!validateSelectOption(selectOption)) alert("Hodimning lavozimini tanlang");
    }
  };

  const btnCancel = () => setModalOpen(false);

  const clearForm = () => {
    setValue('');
    setPhoneNumber('');
    setSelectOption('Hodimning lavozimini tanlang');
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
    saveToLocalStorage('employees1', updatedEmployees);
  };

  const handleEdit = (id) => {
    const employee = employees.find(employee => employee.id === id);
    setValue(employee.name);
    setPhoneNumber(employee.phoneNumber);
    setSelectOption(employee.role);
    setModalOpen(true);
    handleDelete(id);
  };

  return (
    <section>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 flex items-center justify-between p-6">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Yo'l Ustalari</h6>
            <button onClick={() => setModalOpen(true)} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#fff] text-black px-3 py-2 rounded-md absolute right-10 z-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-black" aria-hidden="true">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
            </button>
          </div>
          <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">#</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Bo'linma</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">ishchilar soni</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">yo'l sutalari</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Amallar</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr className="border-b" key={employee.id}>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">{employee.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">{employee.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">{employee.phoneNumber}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">{employee.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5 flex items-center gap-4">
                      <button onClick={() => handleEdit(employee.id)} className="text-blue-600 hover:text-blue-800">Edit</button>
                      <button onClick={() => handleDelete(employee.id)} className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className='absolute display-none top-0 right-0 w-[100%] h-[100%] bg-opacity-60 backdrop-blur-sm opacity-1' id='modal'>
        <div className="absolute right-[30%] top-[20%] bg-white w-[614px] h-[389px] border-[1px] border-gray-300 rounded-xl">
          <h1 className='flex items-center shrink-0 p-4 text-blue-gray-900 antialiased font-sans text-2xl font-semibold leading-snug'>Bo'linma qo'shish</h1>
          <div className='relative p-4 text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed'>
            <div className='flex justify-center flex-col items-center gap-5'>
              <div className='w-full max-w-[24rem]'>
                <div className='relative w-full min-w-[200px] h-10'>
                  <input type="text" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" required id='addName' placeholder='PD nomi' value={value} onChange={handleChange} />
                  <label className='flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900'>
                  </label>
                </div>
              </div>
              <div className='relative flex flex-col w-full max-w-[24rem]'>
                <div className='relative w-full'>
                  <button disabled className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none !absolute left-1 top-1 rounded z-50' type='button'></button>
                  <div className='relative w-full min-w-[200px] h-10 min-w-0'>
                    <input type="number" id='addPhone' className='peer w-full h-full bg-transparent text-blue-gray-700 placeholder-shown:border-t-blue-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all border focus:border-2 border-t-transparent focus:border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 ps-20' placeholder='Ishchi soni' value={phoneNumber} onChange={phoneNumberChange} />
                    <label className='flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px]before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900'></label>
                  </div>
                </div>
              </div>
              <div className='w-full max-w-[24rem]'>
                <div className='relative w-full min-w-[200px] h-10'>
                  <select id='addRole' value={selectOption} onChange={selectChange} type='button' className='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200' aria-expanded='false' aria-haspopup='listbox' role='combobox' data-tab-index tabIndex={-1}>
                    <option>Yo'l ustasini tanlash</option>
                    <option value="Yol ustasi">Yo'l ustasi</option>
                    <option value="Ishchi">Ishchi</option>
                  <span className='absolute top-2/4 -translate-y-2/4 left-3 pt-0.5'></span>
                  <div className='grid place-items-center absolute top-2/4 right-2 pt-px w-5 h-5 text-blue-gray-400 rotate-0 -translate-y-2/4 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule='evenodd' d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule={"evenodd"}></path>
                    </svg>
                  </div>
                  </select>
                  <label className='flex w-full h-full select-none pointer-events-none absolute left-0 font-normal transition-all top-2.5 before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 after:rounded-tr-md after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-sm peer-disabled:text-blue-gray-400 leading-[3.75] text-blue-gray-400 before:border-transparent after:border-transparent'>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end shrink-0 flex-wrap p-4 text-blue-gray-500'>
            <button className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-red-500 hover:bg-red-500/10 active:bg-red-500/30 mr-1' type='button' data-tabindex tabIndex={-1} onClick={btnCancel}>
              <span>Orqaga</span>
            </button>
            <button className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]' type='button' data-tabindex tabIndex={-1} onClick={btnAdd}>
              <span>Qo'shish</span>
            </button>
          </div>
        </div>
      </div> 
      )}
    </section>
  );
};

export default YolUstalari;