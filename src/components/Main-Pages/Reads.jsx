import { useState } from "react"


export const ReadsPage = () => {

    const [reads, setReads] = useState();

    return <section className="h-full w-full flex flex-col items-center justify-between text-2xl" >
        <button className="cursor-pointer font-light"
            onClick={() => { setReads(!reads) }}>{reads ? `- - -` : '...'}</button>
    </section >
}