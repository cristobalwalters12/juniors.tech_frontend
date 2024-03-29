import { Typography } from '@material-tailwind/react'

const DEVELOPERS = [
  { name: 'Jonathan Araos', path: 'https://github.com/jonaisenberg/' },
  { name: 'Ayxa Chaverra', path: 'https://github.com/achaverrar/' },
  { name: 'Cristobal Walters', path: 'https://github.com/cristobalwalters12/' },
  { name: 'Nicolás Contreras', path: 'https://github.com/lukitas0606/' }
]

const INSTRUCTORS = [
  'Emiliano Rotta',
  'Fabian Pino',
  'Loreto Bustos',
  'Raúl Farias'
]

export function Footer () {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
          <div className="text-center">
            <Typography variant="lg" className="font-bold mb-4">
              JUNIORS.TECH
            </Typography>
            <ul className="space-y-2">
              <Typography as="li">Acerca del proyecto</Typography>
              <Typography as="li">Políticas de privacidad</Typography>
              <Typography as="li">Términos de uso</Typography>
            </ul>
          </div>
          <div className="text-center">
            <Typography variant="lg" className="font-bold mb-4">
              DESARROLLADORES
            </Typography>
            <div className="grid grid-cols-1 gap-2">
              {DEVELOPERS.map((developer, index) => (
                <Typography key={index} as="p">
                  <a href={developer.path} target="_blank" rel="noopener noreferrer">{developer.name}</a>
                </Typography>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Typography variant="lg" className="font-bold mb-4">
              INSTRUCTORES
            </Typography>
            <div className="grid grid-cols-1 gap-2">
              {INSTRUCTORS.map((instructor, index) => (
                <Typography key={index} as="p">
                  {instructor}
                </Typography>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center mt-8">
          &copy; {currentYear} Todos los derechos reservados. Juniors.TECH
        </p>
      </div>
    </footer>
  )
}
