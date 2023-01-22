import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { XMarkIcon } from "../app/icons/CancelIcon"
import { asyncCreateThreads } from "./HomeAction"

const HomeFormThreads = () => {
    const [input, setInput] = useState(
        {
            title: "",
            body: "",
            category: ""
        }
    )
    const dispatch = useDispatch()

    const onInputHandler = (event) => {
        const { name, value } = event.target

        if (name === "title") {
            setInput({ ...input, title: value })
        } else if (name === "category") {
            setInput({ ...input, category: value })
        } else {
            setInput({ ...input, body: event.target.innerHTML })
        }
    }

    const clearHandler = () => {
        let div = document.getElementById("form")
        div.innerHTML = ''
    }

    const createThreadsAction = (e) => {
        e.preventDefault()
        dispatch(asyncCreateThreads(input))
        setInput({
            title: "",
            body: "",
            category: ""
        })
        clearHandler()
    }

    return (
        <>
            <form onSubmit={createThreadsAction} className="mb-10 border">
                <div className="flex flex-wrap items-center justify-between px-5 py-4 border-b">
                    <div>
                        {input.body !== "" && <button onClick={clearHandler} className="flex items-center justify-start gap-2 text-blue-400 hover:opacity-50"><XMarkIcon />Clear Form</button>}
                        {input.body === "" && <h1 className="text-blue-400 ">Buat Thread</h1>}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-5 lg:justify-center lg:mt-0">
                        <div className="flex items-center justify-center gap-4">
                            <label className="text-blue-400">Judul</label>
                            <div className="relative ">
                                <input value={input.title} onChange={onInputHandler} name="title" type="text" id="simple-email" className="flex-1 w-full px-4 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="Mengapa teknologi..." />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <label className="text-blue-400">Kategori</label>
                            <div className="relative ">
                                <input value={input.category} onChange={onInputHandler} name="category" type="text" id="simple-email" className="flex-1 w-full px-4 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="Teknologi" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-5 py-5 mb-5 bg-white '>
                    <span
                        id="form"
                        contentEditable
                        data-placeholder="Hari yang cerah..."
                        className="inline-block w-full h-12 border-none outline-none editable form"
                        onInput={onInputHandler}
                    />
                </div>
                <div className="flex items-end justify-end gap-3 px-5 py-5 mt-5">
                    <button className="py-2 text-base text-white bg-blue-400 hover:bg-blue-200 px-7 font-base">Posting</button>
                </div>
            </form>
            <div className="mb-10 border-b"></div>
        </>
    )
}

export default HomeFormThreads
