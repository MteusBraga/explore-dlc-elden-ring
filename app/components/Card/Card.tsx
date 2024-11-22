import { CardInfo } from "@/app/types/CardInfo";

export const Card = ({ title, desc, img }: CardInfo) => {
  return (
    <div className="transition-all relative h-[350px] sm:w-[200px] w-full overflow-hidden duration-300 ">
      {/* Overlay de escurecimento fixo na imagem */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      <div
        className="relative flex flex-col h-full w-full justify-end bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        {/* Gradiente sobre o título ao passar o mouse */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end opacity-0 hover:opacity-100 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 p-4">
          <h1 className="text-xl font-bold text-white">
            {title.toUpperCase()}
          </h1>
          <p className="text-sm text-gray-400">{desc}</p>
        </div>

        {/* Título padrão */}
        <div className="relative z-30 p-4">
          <h1 className="text-xl font-bold text-white">
            {title.toUpperCase()}
          </h1>
          <p className="text-sm text-gray-400">{desc}</p>
        </div>
      </div>
    </div>
  );
};
