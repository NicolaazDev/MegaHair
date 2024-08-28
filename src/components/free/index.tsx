"use client";

export default function Free() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="pricing" className="center py-20 relative bg-background px-4">
      <div className="max-w-screen-2xl center w-full bg-[#111111] rounded-lg py-10 px-7 sm:w-[90%]">
        <div className="text-center center !justify-between w-full sm:center-col">
          <div>
            <h2 className="text-5xl title-gradient uppercase text-start leading-[1] font-poppinsExtraBold font-bold sm:text-center sm:text-3xl">
              SUPERE SUAS <br className="sm:hidden" /> METAS COM ESTRATÉGIA.
            </h2>
            <p className="text-[18px] font-poppinsLight mt-4 text-background">
              É gratuito! Crie sua conta agora e tenha acesso a todas as
              funcionalidades.
            </p>
          </div>

          <div className="space-x-2 sm:space-y-1 sm:mt-5 sm:space-x-0">
            <button
              onClick={handleScroll}
              className="bg-primary h-[55px] whitespace-nowrap border border-solid border-primary text-center text-white font-poppinsLight py-2 px-4 rounded hover:bg-transparent hover:border-background hover:text-background transition-all sm:w-full"
            >
              Comece agora
            </button>
            {/* <button
              onClick={handleScroll}
              className="border border-solid border-primary bg-transparent h-[55px] whitespace-nowrap text-center text-primary font-poppinsLight py-2 px-4 rounded hover:bg-primary hover:text-background transition-all sm:w-full"
            >
              Acesse um demonstração
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
