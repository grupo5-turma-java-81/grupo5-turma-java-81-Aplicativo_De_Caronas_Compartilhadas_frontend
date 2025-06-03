function Home() {
    return (
        <section className="bg-white flex justify-center px-6 py-8">
            <div className="container grid grid-cols-2 items-center gap-10">
              
                <div className="flex flex-col items-center gap-8 text-2xl text-black">
                    <h1 className="text-7xl font-bold text-blue-950 text-center">
                        Vamo de Karona!
                    </h1>
                    <h2 className="text-3xl text-black text-center">
                        "Fala que eu te busco."
                    </h2>

                   
                    <div className="text-justify space-y-4">
                        <p>
                            Cansado de gastar demais com transporte ou enfrentar ônibus lotados?
                            O Vamo de Karona é a solução inteligente para quem busca praticidade, economia e sustentabilidade no dia a dia.
                            Conectamos pessoas que desejam oferecer ou encontrar caronas de forma rápida, segura e organizada.
                            Ideal para estudantes, trabalhadores e viajantes ocasionais, nossa plataforma transforma viagens solitárias em oportunidades de compartilhar trajetos, reduzir custos e até fazer novas conexões.
                        </p>
                        <p>
                            💡 Menos trânsito, mais economia, mais conexão. Experimente o futuro da mobilidade compartilhada com o Vamo de Karona.
                        </p>
                    </div>

                    
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full text-xl font-semibold hover:bg-blue-800 transition duration-300">
                        Ache sua Karona
                    </button>
                </div>

                
                <div className="flex justify-end ml-20 h-full w-full">
                    <img
                        src="https://ik.imagekit.io/lml7cc5ua/imagem-home.png?updatedAt=1748958024955"
                        alt="Imagem Página Home"
                        className="h-screen w-auto rounded-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;
