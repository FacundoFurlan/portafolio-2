import Proyects from "./_components/proyects";

export default function Home() {

  return (
    <div className="grid py-6 bg-zinc-800 ml-[25%] min-h-[100vh] w-full">
      <Proyects name="🛰️ Nexus" link="#" github="https://github.com/NeroWork/Nexus" img="https://images5.alphacoders.com/647/647235.jpg" description="E-commerce Web Page. It follows the design pattern of the most used platforms for buying and selling electronic devises, using top technologies." tags={["NextJS", "React", "MongoDB"]}></Proyects>
      <Proyects name="🗂️ To Do Web App" link="https://to-do-vj.vercel.app" github="https://github.com/NeroWork/to-do-vj" img="/todo.png" description="E-commerce Web Page. It follows the design pattern of the most used platforms for buying and selling electronic devises, using top technologies." tags={["NextJS", "React", "MongoDB"]}></Proyects>
      <Proyects name="🎴 Red Dev Redemption" link="https://blog-nero.vercel.app" github="https://github.com/NeroWork/blogNero" img="/blog.png" description="E-commerce Web Page. It follows the design pattern of the most used platforms for buying and selling electronic devises, using top technologies." tags={["NextJS", "React", "MongoDB"]}></Proyects>
      <Proyects name="🗿 Portafolio Web App" link="#" github="https://github.com/NeroWork/portafolio-2" img="/portafolio.png" description="E-commerce Web Page. It follows the design pattern of the most used platforms for buying and selling electronic devises, using top technologies." tags={["NextJS", "React", "MongoDB"]}></Proyects>
    </div>
  );
}
