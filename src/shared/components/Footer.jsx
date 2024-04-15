import { Typography } from '@material-tailwind/react'
import { DEVELOPERS, INSTRUCTORS } from '../../config/constants/aboutUs'
import { AcademicCapIcon, ChatBubbleLeftRightIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import Logo from './Logo'

export function Footer () {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent-dark text-grey-dark pt-14 pb-6 px-4">
      <div className="max-w-[40rem] mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-4 text-left">
          <div className='w-fit mx-auto'>
            <Typography variant="h6" className="mb-4">
              <Logo accent1='text-grey-dark' accent2='text-grey-dark' />
            </Typography>
            <ul className="space-y-2">
              <Typography as="li">Acerca del proyecto</Typography>
              <Typography as="li">Políticas de privacidad</Typography>
              <Typography as="li">Términos de uso</Typography>
            </ul>
          </div>
          <div>
            <Typography variant="h6" className="mb-4 flex items-center gap-2">
              <CodeBracketIcon width="1em" className='min-w-6' />
              Desarrolladores
            </Typography>
            <div className="flex flex-col gap-2">
              {DEVELOPERS.map((developer, index) => (
                <Typography key={index} as="p">
                  <a href={developer.href} target="_blank" rel="noopener noreferrer" className='transition-colors ease-in-out duration-300 hover:text-accent-light'>{developer.name}</a>
                </Typography>
              ))}
            </div>
          </div>
          <div>
            <Typography variant="h6" className="mb-4 flex items-center gap-2">
            <AcademicCapIcon strokeWidth={2} className='min-w-6 w-6 h-6' /> Instructores
            </Typography>
            <div className="flex flex-col gap-2">
              {INSTRUCTORS.map((instructor, index) => (
                <Typography key={index} as="p">
                  <a href={instructor.href} target="_blank" rel="noopener noreferrer" className='transition-colors ease-in-out duration-300 hover:text-accent-light'>{instructor.name}</a>
                </Typography>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center mt-8">
          <ChatBubbleLeftRightIcon className='w-4 inline-block' /> &copy; {currentYear} Juniors.tech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
