export default function Proyects({name, description, img, github, tags}: {name:string, github:string, description:string, img:string, tags: string[]}){
    return (
        <div className="flex rounded flex-row justify-center align-center mx-4 border-b-2 py-2 border-zinc-700">
            <div className="flex w-[20%] h-full align-center mr-4 ml-6">
                <img className="w-full" src={img} alt="" />
            </div>
            <div className="w-full flex flex-col justify-center">
                <div className="flex flex-row justify-between align-center mr-6">
                    <div className="text-2xl">{name}</div>
                    <a href={github}><img src="github.svg" className="w-6" alt="github icon" /></a>
                </div>
                <div className="">{description}</div>
                <div className="flex flex-row align-center">
                    {
                        tags.map(x => <div className="mt-1 px-2 border border-zinc-400 rounded mr-2" key={name}>{x}</div>)
                    }
                </div>
            </div>
        </div>
    )
}