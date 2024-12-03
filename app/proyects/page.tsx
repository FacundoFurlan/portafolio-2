import Proyects from "./_components/proyects";

export default function Home() {

  return (
    <div className="grid py-6 bg-zinc-800 xl:ml-[25%] min-h-[100vh] w-full">
      <Proyects name="🗂️ To Do Web App" link="https://to-do-vj.vercel.app" github="https://github.com/NeroWork/to-do-vj" img="/todo.png" description="This is a really simple one page web I developed in order to organize all the University projects, it was used by all the students in my program since it helped them not to forget anything. It storeges the state of every box at the cache of every navigator so I don't need a data base and we all can keep record of our own projects" tags={["NextJS", "React", "Tailwind", "TypeScript","Cache", "One Page"]}></Proyects>
      <Proyects name="🎴 Red Dev Redemption" link="https://blog-nero.vercel.app" github="https://github.com/NeroWork/blogNero" img="/blog.png" description="This is my personal blog, where I talk about every little thing that I find interesting, such as books, videogames or technology. It uses mongoose as the database to store all the posts and users among other things. It also has a system that allows 'likes' to be stored by every user in every post without repeating. The sesion of the User is stored at the cache by a Json Web Token!" tags={["NextJS", "React", "MongoDB", "Tailwind", "TypeScript", "Token", "Cache"]}></Proyects>
      <Proyects name="🗿 Portafolio Web App" link="#" github="https://github.com/NeroWork/portafolio-2" img="/portafolio.png" description="This is my portfolio, it's meant to be simple and practical, it's made for quick access to all the information needed." tags={["NextJS", "React", "TypeScript"]}></Proyects>
      <Proyects name="🛰️ Nexus" link="#" github="https://github.com/NeroWork/Nexus" img="https://images5.alphacoders.com/647/647235.jpg" description="E-commerce Web Page. It follows the design pattern of the most used platforms for buying and selling electronic devises. Since it's a big project, it's still in proccess, so most of the functions will be working in the future." tags={["In progress","NextJS", "React", "MongoDB"]}></Proyects>
    </div>
  );
}
