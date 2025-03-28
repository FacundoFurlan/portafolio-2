export default function Proyects({name, link, description, img, github, tags}: {name:string, link:string, github:string, description:string, img:string, tags: string[]}){
    return (
        <div className="flex rounded flex-col xl:flex-row justify-center align-center px-4 border-b-2 pb-4 pb-2 border-zinc-700 min-w-[100%]">
            <div className="flex xl:bm-0 w-[100%] sm:w-[75%] xl:w-[40%] h-full self-center self-align justify-center align-center m-3">
                <img className=" self-center rounded-md w-full h-full xl:h-fit" src={img} alt="" />
            </div>
            <div className="w-full flex flex-col sm:mt-2 justify-evenly">
                <div className="flex flex-row justify-between align-center mr-6 mb-2">
                    <a href={link} target="_blank"><div className="text-2xl">{name}</div></a>
                    <a className="flex" target="_blank" href={github}><img src="github.svg" className="w-8" alt="github icon" /></a>
                </div>
                <div className="ml-1">{description}</div>
                <div className="flex flex-row align-center mt-2 flex-wrap max-w-[100%]">
                    {
                        tags.map(x => <div className={`px-2 border my-1 rounded mr-2 ${ x == "Cache" ? "text-pink-400 border-pink-400":""} ${ x == "In progress" ? "text-red-400 border-red-400":""} ${ x == "TypeScript" ? "text-purple-400 border-purple-400":""} ${ x == "React" ? "text-orange-400 border-orange-400":""} ${ x == "MongoDB" ? "text-green-400 border-green-400":""} ${ x == "NextJS" ? "text-blue-400 border-blue-400":""}`} key={name}>{x}</div>)
                    }
                </div>
            </div>
        </div>
    )
}