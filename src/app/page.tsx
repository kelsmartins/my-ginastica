'use client'
import { useState } from "react";
import { Input } from "./components/input";

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
        <div className="w-[100%] h-[250px] flex justify-center items-center flex-col">
          <h2 className="text-black text-start w-[300px] h-[20px] text-neutral-500 font-bold text-lg mb-3">Entre na sua conta</h2>
          <Input
          value={loginEmail}
          onChange={setLoginEmail}
          placeholder="Digite seu email"
          />
          <Input
          value={loginPass}
          onChange={setLoginPass}
          placeholder="Digite sua senha"
          />
          <p className="text-neutral-500 text-start w-[300px] h-[20px] mb-4 text-sm">Esqueceu a senha? 
            <a href="http://" className="font-bold"> Redefina aqui!</a>
          </p>
          <input type="button" 
          value="entrar" 
          className="w-[300px] h-[40px] bg-violet-400 rounded-md font-bold"/>
        </div>

        <span className="w-[300px] h-[3px] bg-blue-300"></span>

        <div className="w-[100%] h-[300px] flex justify-center items-center flex-col">
           <h2 className="text-black text-start w-[300px] h-[40px] text-neutral-500 font-bold text-lg mb-4">Não tem uma conta? Cadastre-se agora!</h2>
          <Input
          value={fullName}
          onChange={setFullName}
          placeholder="Digite seu nome completo"
          />
          <Input
          value={signupEmail}
          onChange={setSignupEmail}
          placeholder="Digite seu email"
          />
          <Input
          value={signupPass}
          onChange={setSignupPass}
          placeholder="Digite uma senha"
          />
          <input
            type="button"
            value="cadastrar"
            className="w-[300px] h-[40px] bg-violet-400 rounded-md font-bold"
          />
        </div>

      </div>
    </div>
  )
}
