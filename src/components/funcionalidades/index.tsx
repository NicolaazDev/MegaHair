export const Funcionalidades: React.FC = () => {
  return (
    <section
      id="features"
      className="w-full bg-background relative z-10 functionalidades-section"
    >
      <div className="center !justify-between bg-secondary-foreground py-9 px-4">
        <div className="center !justify-between max-w-screen-2xl w-full mx-auto sm:center-col sm:!flex-col-reverse">
          <div className="center-col w-[40%] !justify-start sm:w-[96%]">
            <h3 className="text-5xl text-gradient text-start font-poppinsSemiBold mt-4 sm:text-center">
              Gerenciamento de Contatos
            </h3>
            <p className="text-start mt-4 font-poppinsRegular sm:text-center">
              Gerencie e segmente sua base de eleitores com facilidade.
              Personalize comunicações e registre interações para fortalecer o
              engajamento e construir relações duradouras.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724780062/gerenciamento_contatos_dhtqpy.png"
            alt=""
            className="w-[40%] h-auto rounded-[12px] object-cover sm:w-[86%]"
          />
        </div>
      </div>
      <div className="center !justify-between bg-[#edf3ff] py-9 px-4">
        <div className="center !justify-between !flex-row-reverse max-w-screen-2xl w-full mx-auto sm:center-col sm:!flex-col-reverse">
          <div className="center-col w-[40%] !items-end">
            <h3 className="text-5xl text-gradient leading-[1.2] text-end font-poppinsSemiBold mt-4 sm:text-center">
              Agenda do Gabinete
            </h3>
            <p className="text-end mt-4 font-poppinsRegular sm:text-center">
              Organize e acompanhe compromissos e atividades do gabinete em um
              calendário integrado. Coordene agendas, defina lembretes e garanta
              uma gestão eficiente do tempo.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724780062/agenda_do_candidato_yccywh.png"
            alt=""
            className="w-[40%] h-auto rounded-[12px] object-cover sm:w-[86%]"
          />
        </div>
      </div>
      <div className="center !justify-between bg-secondary-foreground py-9 px-4">
        <div className="center !justify-between max-w-screen-2xl w-full mx-auto sm:center-col sm:!flex-col-reverse">
          <div className="center-col w-[40%] ">
            <h3 className="text-5xl text-gradient text-start font-poppinsSemiBold mt-4 sm:text-center">
              Atendimento à População
            </h3>
            <p className="text-start mt-4 font-poppinsRegular sm:text-center">
              Facilite o contato com a população por meio de um sistema
              centralizado. Receba e gerencie solicitações, feedback e denúncias
              de forma ágil e organizada.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724780062/atendimento_a_popula%C3%A7%C3%A3o_pnbuc6.png"
            alt=""
            className="w-[40%] h-auto rounded-[12px] object-cover sm:w-[86%]"
          />
        </div>
      </div>
      <div className="center !justify-between bg-[#edf3ff] py-9 px-4">
        <div className="center !justify-between max-w-screen-2xl !flex-row-reverse w-full mx-auto sm:center-col sm:!flex-col-reverse">
          <div className="center-col w-[40%] !items-end">
            <h3 className="text-5xl text-gradient text-end font-poppinsSemiBold mt-4 sm:text-center">
              Controle Financeiro
            </h3>
            <p className="text-end mt-4 font-poppinsRegular sm:text-center">
              Gerencie o orçamento de campanha com precisão. Acompanhe receitas,
              despesas e relatórios financeiros para garantir transparência e
              eficiência na administração dos recursos.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724780062/financeiro_fwuaez.png"
            alt=""
            className="w-[40%] h-auto rounded-[12px] object-cover sm:w-[86%]"
          />
        </div>
      </div>
    </section>
  );
};
