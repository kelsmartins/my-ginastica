'use client'

import { use, useState } from "react"

export default function Home() {

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const [signupEmail, setSignupEmail] = useState('');
  const [signupPass, setSignupPass] = useState('');

  const [fullName, setFullName] = useState('');

  return (
    <div className="w-screen h-screen bg-blue-300 flex justify-center items-center flex-col">
      <div className="w-[400px] h-[700px] bg-neutral-100 flex flex-col items-center rounded-md shadow-lg">
        <div className="w-[100%] h-[125px] flex justify-center items-center flex-col">
          <span className="w-[50px] h-[50px] rounded-xl bg-blue-300 mb-2"></span>
          <h1 className="text-3xl font-bold text-black mt-2">Viver Ginástica</h1>
        </div>
        <div className="w-[100%] h-[200px] flex justify-center items-center flex-col">
          <input type="email" 
          className="h-[40px] w-[300px] text-black mb-4 bg-neutral-200 p-1 rounded-md" placeholder="Digite seu email"
          value={loginEmail}
          onChange={e => setLoginEmail(e.target.value)}/>
          <input type="password" 
          className="h-[40px] w-[300px] text-black mb-4 bg-neutral-200 p-1 rounded-md" placeholder="Confirme sua senha"
          value={loginPass}
          onChange={e => setLoginPass(e.target.value)}/>
          <span className=""></span>
          <p
          className="text-black text-start">Esqueceu a senha? <a href="http://">Redefina aqui!</a></p>
          <input type="button" 
          value="entrar" 
          className="w-[300px] h-[40px] bg-purple-400 rounded-md font-bold"/>
        </div>

        <div className="w-[100%] h-[350px] flex justify-center items-center flex-col">
  <input
    type="text"
    className="h-[40px] w-[300px] text-black mb-4 bg-neutral-200 p-1 rounded-md"
    placeholder="Digite seu nome completo"
    value={fullName}
    onChange={e => setFullName(e.target.value)}
  />
  <input
    type="email"
    className="h-[40px] w-[300px] text-black mb-4 bg-neutral-200 p-1 rounded-md"
    placeholder="Digite seu email"
    value={signupEmail}
    onChange={e => setSignupEmail(e.target.value)}
  />
  <input
    type="password"
    className="h-[40px] w-[300px] text-black mb-4 bg-neutral-200 p-1 rounded-md"
    placeholder="Digite sua senha"
    value={signupPass}
    onChange={e => setSignupPass(e.target.value)}
  />
  <input
    type="button"
    value="cadastrar"
    className="w-[300px] h-[40px] bg-purple-400 rounded-md font-bold"
  />
</div>

      </div>
    </div>
  )
}
