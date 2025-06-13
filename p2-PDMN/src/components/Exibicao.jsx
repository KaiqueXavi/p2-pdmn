
import React from "react";
import {Card} from "primereact/card";
import striptags from "striptags";


const Exibicao = ({ dados }) => {
    if (!dados) return null;

    const { name, weather, main} = dados;

    return (
        <Card title={`Previsão para ${name}`} className="p-mb-3">
            <div className="text-center font-bold">
                <div className="text-2xl font-bold p-mb-2">
                    {name}
                </div>
                <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description} style={{ width: '200px', height: '200px' }}/>
                <div>
                    {striptags(`${weather[0].description}`)}
                </div>
                <div className="p-2">
                    {striptags(`Temperatura atual: ${main.temp}°C Umidade: ${main.humidity}%`)}
                </div>
                <div className="p-2 font-italic">
                    {striptags(`Temperatura máxima: ${main.temp_max}°C`)}
                </div>
                <div className="p-2 font-italic">
                        {striptags(`Temperatura mínima: ${main.temp_min}°C`)}
                </div>
            </div>
        </Card>
    );
}

export default Exibicao