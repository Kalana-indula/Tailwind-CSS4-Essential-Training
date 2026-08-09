import React from 'react'

const Page = () => {
    return (
        <section className="p-8 bg-linear-to-br from-cyan-400 to-pink-400">
            {/*adding a line height*/}
            <h1 className="font-bold text-4xl/12 text-indigo-600">Welcome to Tailwind CSS</h1>
            <span className="font-medium text-lg text-gray-700">
                Rapidly build modern websites without ever leaving your HTML.
            </span>
            <p className="text-sm leading-relaxed">
                Tailwind CSS is a utility-first CSS framework packed with classes like
                <code className="font-bold text-indigo-500"> flex</code>,
                <code className="font-bold text-indigo-500"> pt-4</code>,
                <code className="font-bold text-indigo-500"> text-center</code> and
                <code className="font-bold text-indigo-500"> rotate-90 </code>
                that can be composed to build any design, directly in your markup.
            </p>
            <a href="https://www.tailwindcss.com" className="text-indigo-700">Learn more</a>
        </section>
    )
}
export default Page
