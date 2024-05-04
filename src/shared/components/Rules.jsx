import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, Typography } from '@material-tailwind/react'

const Rules = ({ className }) => {
  return (
    <Card className={`w-full max-w-80 ${className || ''}`}>
      <CardBody className='p-0'>
      <Typography variant="h2" className="flex items-center text-lg gap-2 bg-grey-lighter p-3 rounded-t-xl">
        <ClipboardDocumentCheckIcon className="w-7 h-7" strokeWidth={2} />
          Al publicar en Juniors.tech
        </Typography>
        <ol className='p-4 !list-decimal ml-4 space-y-2'>
          <li>Expresa tus ideas con respeto</li>
          <li>Evita hacer spam</li>
          <li>Verifica que tu contenido no infrinja derechos de autor</li>
          <li>Revisa que no haya duplicados de tu publicación</li>
        </ol>
      </CardBody>
    </Card>
  )
}

export default Rules
