"use client"

import Filho from "./Filho";

export default function Pai(props) {

    function speak(param) {
        console.log(param)
    }

    return (
        <div>
            <Filho funcao={speak} />
        </div>
    );
}