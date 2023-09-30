"use client"
import { Component } from "react";
import MegaSena from "./page-logic";


export default class Classe extends Component {
    render() {
        return (
            <div className="flex justify-center text-4xl items-center p-8 bolder">
                <MegaSena />
            </div>
        )
    }
}