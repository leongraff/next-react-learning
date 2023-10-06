"use client"

export default function Render() {

    const showAlert = () => {
        alert("hello world!!")
    }
    return (
        <div className="text-5xl flex flex-col justify-center items-center text-white font-bold font-serif pt-8">
            Hello world!!!!!!!!!
            <button className="p-4 bg-black border-spacing-1 m-3" onClick={showAlert}>Click me!</button>
        </div>

    )
}