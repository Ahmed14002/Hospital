import React, { useState, useEffect, useRef } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import Cookie from 'cookie-universal';
import Loading from '../../Components/Loading';
import img from './../../Images/img-1.png';
import logo from './../../Images/img-2.png';

export default function Login() {
  // States
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  //ERR
  const [err, setErr] = useState('');

  // Ref
  const focus = useRef('');

  // Loading
  const [loading, setLoading] = useState(false);

  // Cookies
  const cookie = Cookie();

  // Show Password
  const [open, setOpen] = useState(false);

  // Handle Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  // Handle Focus
  useEffect(() => {
    focus.current.focus();
  }, []);

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        'https://artery-backend.vercel.app/api/manger/login',
        {
          email: form.email,
          password: form.password,
        },
      );
      setLoading(false);
      const token = res.data.token;
      cookie.set('hospital', token);
      const role = res.data.user.role;
      const go = role === "HOSPITAL" ? "home" : "setting";
      window.location.pathname = `/${go}`;
    } catch (err) {
      setLoading(false);
      if (err.response.status === 400) {
        setErr('Wrong Email Or Password');
      } else {
        setErr('Internal Server ERR');
      }
    }
  }

  return (
    <>
      {loading && <Loading />}
      <div className="landing h-full bg-white bg-cover">
        <div className="container mx-auto sm:px-4">
          <div className="flex h-screen items-center justify-center">
            <div className="h-[30rem] w-full rounded-2xl  bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] lg:w-[90%]">
              <div className="relative float-left h-full w-[35%] rounded-l-2xl bg-[#3a3669] max-sm:hidden">
                <img className="absolute h-full w-full" alt="login" src={img} />
              </div>
              <div className="relative h-full">
                <div className="flex justify-center">
                  <img
                    className="mt-7 h-20 max-sm:h-20"
                    alt="logo"
                    src={logo}
                  />
                </div>
                <div className="my-8 text-center text-lg font-medium text-black max-sm:text-base">
                  Blood bank management
                </div>
                <div className="flex justify-start">
                  <form
                    action="#"
                    method="post"
                    onSubmit={handleSubmit}
                    className="basis-[80%] max-xl:basis-[100%]"
                  >
                    <div className="mx-12">
                      <label
                        htmlFor="email"
                        className="block font-['Nunito'] text-lg font-semibold max-sm:text-base"
                      >
                        Email Address
                      </label>
                      <div>
                        <input
                          ref={focus}
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Enter Your email"
                          required
                          className="block w-full rounded-lg border-0 bg-[#D9D9D9] px-3 py-2 font-['Nunito'] text-lg font-semibold text-[#4c4c4c] focus:outline-none max-sm:text-base"
                        />
                      </div>
                      <label
                        htmlFor="password"
                        className="mt-4 block font-['Nunito'] text-lg font-semibold max-sm:text-base"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type={open === false ? 'password' : 'text'}
                          value={form.password}
                          onChange={handleChange}
                          placeholder="Enter Your password"
                          // minLength="7"
                          required
                          className="block w-full rounded-lg border-0 bg-[#D9D9D9] py-2 pl-3 pr-11 font-['Nunito'] text-lg font-semibold text-[#4c4c4c] focus:outline-none max-sm:text-base"
                        />
                        <div className="absolute right-4 top-2.5 cursor-pointer text-2xl max-sm:text-xl">
                          {open === false ? (
                            <AiFillEyeInvisible onClick={toggle} />
                          ) : (
                            <AiFillEye onClick={toggle} />
                          )}
                        </div>
                      </div>
                      <div className="mt-8 flex items-center justify-between">
                        <span>
                          {err !== '' && (
                            <span className="rounded-lg bg-[#f8d7da] px-4 py-3 text-[#842029]">
                              {err}
                            </span>
                          )}
                        </span>
                        <button
                          type="submit"
                          className="rounded-lg bg-[#bc233e] px-10 py-2  font-['Urbanist'] text-lg font-semibold uppercase text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#C53142] max-sm:px-7 max-sm:text-base"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
