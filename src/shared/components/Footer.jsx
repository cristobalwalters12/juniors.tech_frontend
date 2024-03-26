export function Footer () {
  return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-center md:space-x-12 mb-4">
                    <div className="text-center mb-8 md:mb-0">
                        <h2 className="text-lg font-bold mb-4">JUNIORS.TECH</h2>
                        <p className="mb-2">Acerca del proyecto</p>
                        <p className="mb-2">Políticas de privacidad</p>
                        <p className="mb-2">Términos de uso</p>
                    </div>
                    <div className="text-center mb-8 md:mb-0">
                        <h2 className="text-lg font-bold mb-4">
                            DESARROLLADORES
                        </h2>
                        <p className="mb-2">Jonathan Araos</p>
                        <p className="mb-2">Ayxa Chaverra</p>
                        <p className="mb-2">Cristobal Walters</p>
                        <p className="mb-2">Nicolás Contreras</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-bold mb-4">INSTRUCTORES</h2>
                        <p className="mb-2">Emiliano Rotta</p>
                        <p className="mb-2">Fabian Pino</p>
                        <p className="mb-2">Loreto Bustos</p>
                        <p className="mb-2">Raúl Farias</p>
                    </div>
                </div>
                <p className="text-center mt-8">
                    © 2024 Todos los derechos reservados. Juniors.TECH
                </p>
            </div>
        </footer>
  )
}
