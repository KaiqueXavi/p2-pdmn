
import React from "react";
import {Card} from "primereact/card";
import striptags from "striptags";


const Exibicao = ({ dados }) => {
    if (!dados) return null;

    const { name, weather, main} = dados;

    return (
        <Card title={`Previsão para ${name}`} className="p-mb-3">
            <div className="text-center font-bold">
                <div className="p-2">{name}</div>
                <div className="p-2">
                    {striptags(`Clima: ${weather[0].description}, Temperatura: ${main.temp}°C, Umidade: ${main.humidity}%`)}
                </div>
            </div>
        </Card>
    );
}

export default Exibicao