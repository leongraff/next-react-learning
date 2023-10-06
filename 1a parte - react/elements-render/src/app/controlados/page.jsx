"use client"

import { useState } from "react"

export default function controlados() {
    const [valor, setValor] = useState("inicial")


    return (

        < div >
            <input type='text' value={valor} onChange={e => setValor(e.target.value)} />
        </div >
    );
}