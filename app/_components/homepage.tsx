export default function HomePage(){
    return (
        <div className="flex flex-col align-center mx-10">
            <div className="text-white text-xl mb-2 mt-5">Hello! 👋</div>
            <div className="text-white text-5xl mb-2">My name is Facundo Furlan</div>
            <div className="text-white text-3xl mb-4">Full Stack Web Developer ⚡️</div>
            <p className=" mb-4">I&apos;m a Software Engineering, an electromechanic technician, and I&apos;m currently studying Digital Entertainment and Game Development. I&apos;m looking forward to work in the web development industry as a Full Stack developer, using a variety of technologies such as TypeScript, Next.JS, React, TailwindCSS, HTML, CSS, MongoDB, among many others.</p>
            <div className="flex flex-row mb-4">
                <button className="rounded bg-zinc-700 p-2 mr-3"><a href="https://www.linkedin.com/in/facundo-furlan/" target="_blanc">LinkedIn</a></button>
                <button className="rounded bg-zinc-700 px-3 mx-3"><a href="/cv" target="_blanc">CV</a></button>
            </div>
            <div className="flex flex-col mb-5">
                <div className="text-xl">🌚​​ How to contact me?</div>
                <div className="mb-2 mx-3">You can find me on any of my socials, but if you want a highspeed answer, feel free to email me anytime.</div>
                <div className="text-xl">🧩​ Can you show us some of your proyects?</div>
                <div className="mx-3">Of course, you can find a complete list of them right <a href="/proyects" className="underline">here</a>, make sure you give them a good look!</div>
            </div>
        </div>
    )
}