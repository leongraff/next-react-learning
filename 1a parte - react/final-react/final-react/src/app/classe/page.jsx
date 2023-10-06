"use client"
import { Component } from "react";
import MegaSena from "./page-logic";


export default class Classe extends Component {

    state = {
        numero: 7
    }

    render() {
        return (
            <div className="flex justify-center text-4xl items-center p-8 bolder">
                <MegaSena />
                <h1>{this.state.numero}</h1>
            </div>
        )
    }
}