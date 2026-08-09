import React from 'react'

const Page = () => {
    return (
        <section className="p-8">
            {/*adding a line height*/}
            <h1 className="font-bold text-4xl/12">Welcome to Tailwind CSS</h1>
            <span className="font-medium text-lg">
                Rapidly build modern websites without ever leaving your HTML.
            </span>
            <p className="text-sm leading-relaxed">
                Tailwind CSS is a utility-first CSS framework packed with classes like
                <code className="font-bold"> flex</code>,
                <code className="font-bold"> pt-4</code>,
                <code className="font-bold"> text-center</code> and
                <code className="font-bold"> rotate-90 </code>
                that can be composed to build any design, directly in your markup.
            </p>
            <a href="https://www.tailwindcss.com" className="text-blue-700">Learn more</a>
        </section>
    )
}
export default Page
