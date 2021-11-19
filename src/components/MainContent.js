import React from 'react';
import swal from 'sweetalert';

export default function MainContent() {
    async function copyEmail() {
        navigator.clipboard.writeText("gabrieljeronimo-@hotmail.com").then(() => {
         swal("E-mail copiado com sucesso", "", "success");   
        },
        (err) => {
            alert(err);
        });
    }
    
    return (
        <div className="main">
            <h1 className="name">Gabriel Jeronimo</h1>
            <h3 className="role">Fullstack developer</h3>
            <button className="btn-email" onClick={copyEmail}>Email</button>

            <div className="topic">
                <h2 className="title">About</h2>
                <p className="content">
                I'm a curious fullstack developer. I love learning and building complex things with quality and attention.
                Always looking for new tech things and to improve myself and my job
                </p>
            </div>

            <div className="topic">
                <h2 className="title" style={{marginLeft: "11px"}}>Interest</h2>
                <p className="content">
                Soccer fan, crypto enthusiast, food expert, internet fanatic, geek, addicted in programming and an awful gamer
                </p>
            </div>
        </div>
    )
}