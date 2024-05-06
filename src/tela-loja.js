import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import './App.css';
import Loja from './loja.jpg';
import Navbar from './Navbar';

function Coco(){
    return(
        <div class="loja">
        <img src={Loja} class='./loja.jpg' alt="logos" height={350} width={390}></img>
        <div class="nome">
        <p>Coco & Lola </p> 
        <h1>Localização: R.Wanderley Pinho, 517-</h1>
        <h2>Itaigara, Salvador - BA, 452875-270</h2>
        <h3>Horário de funcionamento: 08:00 - 10:00</h3>

        </div>
        </div>
    )
}

export default Coco;