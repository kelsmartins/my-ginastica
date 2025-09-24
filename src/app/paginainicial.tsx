import { Service } from "./components/service"

export function PaginaInicial(){
    return (
        <div className="w-screen h-screen bg-blue-300 flex justify-center items-center flex-col">
            <div className="w-[1485px] h-[700px] bg-neutral-100 flex flex-col items-center rounded-md shadow-lg">
                <div className="w-[1300px] h-[60px] m-auto flex justify-end items-center">
                    <div className="w-[650px] h-[60px] flex justify-start items-center ml-4">
                        <span className="w-[50px] h-[50px] rounded-xl bg-blue-300"></span>  
                    </div>
                    <div className="w-[650px] h-[60px] flex flex-row justify-between items-center mr-4">
                        <a href="#" className="w-[100px] h-[50px] flex justify-center items-center text-violet-500 border-b-2 font-bold">ola</a>
                        <a href="#" className="w-[100px] h-[50px] flex justify-center items-center text-violet-500 border-b-2 font-bold">ola</a>
                        <a href="#" className="w-[100px] h-[50px] flex justify-center items-center text-violet-500 border-b-2 font-bold">ola</a>
                        <a href="#" className="w-[100px] h-[50px] flex justify-center items-center text-violet-500 border-b-2 font-bold">ola</a>
                        <button
                        className="w-[100px] h-[50px] bg-violet-400 rounded-md font-bold text-sm">
                        minhas aulas</button>
                    </div>
                </div>
                <h2 className="m-auto h-[40px] text-neutral-500 text-3xl font-bold flex items-center">Serviços</h2>
                <div className="m-auto w-[1300px] h-[600px] p-4 flex flex-row gap-4 flex-wrap">
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </div>
            </div>
        </div>
    )
 }