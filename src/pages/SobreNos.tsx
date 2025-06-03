import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface Participante {
  nome: string;
  foto: string;
  github: string;
  linkedin: string;
}

const SobreNos: React.FC = () => {
  const participantes: Participante[] = [

    { nome: "Elisa", foto: "src/assets/Elisa.jpg", github: "https://github.com/eblopes23", linkedin: "https://www.linkedin.com/in/elisa-bicudo-lopes/" },
    { nome: "Larissa", foto: "src/assets/Larissa.jpg", github: "https://github.com/LarissaSoaresSilva", linkedin: "https://www.linkedin.com/in/larissa-soares-da-silva/" },
    { nome: "Rodrigo", foto: "src/assets/Rodrigo.jpg", github: "https://www.linkedin.com/rodrigohenrikeh/", linkedin: "https://www.linkedin.com/in/rodrigohenrikeh/" },
    { nome: "Ruan", foto: "src/assets/Ruan.jpg", github: "https://github.com/BarretoRuan", linkedin: "https://www.linkedin.com/in/ruan-barreto/" },
    { nome: "Weslley", foto: "src/assets/Wesley.jpg", github: "https://github.com/wdwf", linkedin: "https://www.linkedin.com/in/weslleyferreira/" },
    { nome: "Giulia", foto: "src/assets/Giulia.jpg", github: "https://github.com/Giulia-L-Ferreira", linkedin: "https://www.linkedin.com/in/giulia-l-ferreira/" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="relative w-full h-[400px]">
        <img
          src="src/assets/unsplash_JgEtmgOjoew.png"
          alt="Caronas"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col gap-5 items-center justify-center p-8">
          <img src="src/assets/img/Logo.png" />
          <p className="text-white text-xl md:text-2xl lg:text-3xl max-w-4xl text-center">
            A nossa empresa nasceu da vontade de conectar pessoas que compartilham trajetos diários e viagens, reduzindo custos e ajudando o meio ambiente. Em 2025 resolvemos promover karonas seguras, colaborativas e conscientes.
          </p>
        </div>
      </div>
      <div className="relative bg-blue-800/35 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Visão</h3>
          <p>
            Ser a principal escolha em mobilidade urbana colaborativa em toda a América Latina.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Missão</h3>
          <p>
            Oferecer uma plataforma segura para< p className="font-semibold">karonas compartilhadas</p> com foco em sustentabilidade e comunidade.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Valores</h3>
          <p>
            Confiabilidade, empatia, respeito ao meio ambiente e inovação tecnológica.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto pb-16 text-center pt-8">
        <h2 className="text-2xl font-bold text-blue-1000 mb-6">Conheça o time</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {participantes.map((p, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src={p.foto}
                alt={p.nome}
                className="w-auto h-[142px] rounded-full object-cover"
              />
              <span className="mt-2 text-sm font-medium">{p.nome}</span>

              {/* Ícones */}
              <div className="flex gap-2 mt-1">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl hover:text-gray-600" />
                </a>
                <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-xl text-blue-600 hover:text-blue-800" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
