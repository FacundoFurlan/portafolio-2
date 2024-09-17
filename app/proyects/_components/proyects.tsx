export default function Proyects({name, description, img, github, tags}: {name:string, github:string, description:string, img:string, tags: string[]}){
    return (
        <div className="flex rounded flex-row justify-center align-center mx-4 border-b-2 pb-4 mb-2 border-zinc-700">
            <div className="flex flex-col w-[20%] h-full justify-center align-center mr-6 ml-4">
                <img className="w-full h-fit" src={img} alt="" />
            </div>
            <div className="w-full flex flex-col justify-around">
                <div className="flex flex-row justify-between align-center mr-6">
                    <div className="text-2xl">{name}</div>
                    <a className="flex" href={github}><img src="github.svg" className="w-6" alt="github icon" /></a>
                </div>
                <div className="ml-1">{description}</div>
                <div className="flex flex-row align-center mt-2">
                    {
                        tags.map(x => <div className="px-2 border border-zinc-400 rounded mr-2" key={name}>{x}</div>)
                    }
                </div>
            </div>
        </div>
    )
}