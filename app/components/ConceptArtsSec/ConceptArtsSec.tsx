export const ConceptArtsSec = () => {
  const itemData = [
    {
      img: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25516474/elden_ring_leda_boss_fight_1.jpg?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400",
    },
    {
      img: "https://assetsio.gnwcdn.com/elden-ring-shadow-of-the-erdtree-dlc-review-header-(1).png?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
    },
    {
      img: "https://www.outerspace.com.br/wp-content/uploads/2024/05/eldenring-sote.webp",
    },
    {
      img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/divine_beast_dancing_lion_bosses_elden_ring_wiki_1200px.png",
    },
    {
      img: "https://imageio.forbes.com/specials-images/imageserve/641c3f72f7f468d43aa00864/shadow/960x0.jpg?format=jpg&width=1440",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/56d5457d8259b57a20245e80/49fe5042-841f-469b-9993-65b7718001fe/190a539e3fe72-screenshotUrl.jpg?format=2500w",
    },
    {
      img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2024/05/elden_ring_dlc_artes_novas_criaturas_e_ambientacoes__91a95g5v2.jpg?ims=1210x544/filters:quality(75)",
    },
    {
      img: "https://meups.com.br/wp-content/uploads/2024/08/dlc-de-elden-ring-900x503.jpg.webp",
    },
    {
      img: "https://i.ytimg.com/vi/dYxGIRmjAmE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_2jBbwofUQ-oJQWLzfJRT8e08_g",
    },
    {
      img: "https://cdn.mos.cms.futurecdn.net/27EwT773VWucHsKG32qbbU-1200-80.jpg",
    },
    {
      img: "https://assetsio.gnwcdn.com/elden-ring-shadow-of-the-erdtree-shadow-sunflower-blossom.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
    },
    {
      img: "https://imageio.forbes.com/specials-images/imageserve/6670800871b4b3c5d97692d7/shadow/960x0.jpg?format=jpg&width=960",
    },
    {
      img: "https://steamuserimages-a.akamaihd.net/ugc/2500139273801575828/0999899F7E9DBF2E6A71D59849BEC5D9CE810617/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    },
    {
      img: "https://i.pinimg.com/236x/b6/d5/4a/b6d54ab5d5af6f150fc3ec807b7fe380.jpg",
    },
  ];
  return (
    <div className="relative min-h-screen *:p-10  bg-[url('https://images3.alphacoders.com/137/1377226.jpg')]  bg-cover bg-no-repeat bg-bottom flex flex-col">
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Conteúdo */}
      <div className=" max-w-[1024px] relative z-10 text-white  flex flex-col items-start self-center">
        <h1 className="text-4xl font-bold text-center">Arts</h1>
        <div className="carousel rounded-box w-64">
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
