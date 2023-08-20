import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import Spinner from './spinner';

const App = () => {

  const [loading, setLoading] = useState(false);

  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();



  const API = import.meta.env.VITE_PASSWORD_GENERATOR
  const endPointUrl = `https://api.api-ninjas.com/v1/passwordgenerator?length=16`;


  const generatePassword = async () => {

    setLoading(true);

    try {
      let response = await axios.get(endPointUrl, {
        headers: {
          'X-Api-Key': API
        }
      })
      let fetchData = await response.data.random_password;
      setPassword1(fetchData);
    }
    catch (error) {
      console.log('🚀 ~ file: any ~ line any ~ any ~ value', error)
    }


    try {
      let response = await axios.get(endPointUrl, {
        headers: {
          'X-Api-Key': API
        }
      })
      let fetchData = await response.data.random_password;
      setPassword2(fetchData);
    }
    catch (error) {
      console.log('🚀 ~ file: any ~ line any ~ any ~ value', error)
    }

    setLoading(false);

  };






  useMemo(() => {
    return generatePassword()
  }, [])



  return (

    <>



      <div className='grid place-items-center h-[100vh] w-[100vw] bg-sky-100'>
        <section className="bg-[#0D1821] px-10 dark:bg-gray-900 lg:w-1/2 sm:w-full lg:rounded-xl rounded-md">
          <div className="py-8 lg:px-10 mx-auto max-w-screen-xl lg:py-12">
            <div className='flex justify-center lg:justify-start items-center'> {loading && <Spinner />} </div>
            <h1 className="text-center lg:text-start mb-4 text-[2rem] font-extrabold leading-none text-gray-50 lg:text-5xl ">Generate a <br /><span className='text-[#0FF4C6]'>random password</span> </h1>
            <p className="text-center lg:text-start mb-8 text-lg font-normal text-sky-100 lg:text-xl dark:text-gray-400">Never use an insecure password again.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center lg:justify-start sm:space-y-0 sm:space-x-4">
              <button onClick={generatePassword} type='button' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-[#0FF4C6] hover:bg-[#0FF1a1] hover:scale-105 transition-transform outline-none">
                Generate Password
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>

            </div>
            <div className='border-b-2 my-10 rounded-lg'></div>


            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">

                <div className="bg-[#2D3047] text-white text-base rounded-lg grid place-items-center  w-full h-10 " >{password1}</div>

                <div className="bg-[#2D3047] text-white text-base rounded-lg grid place-items-center  w-full h-10 " >{password2}</div>

              </div>
            </form>


          </div>


        </section>

      </div>

    </>

  )
}

export default App
