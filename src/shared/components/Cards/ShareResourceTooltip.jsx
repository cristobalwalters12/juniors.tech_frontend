import { useState } from 'react'
import { Button, Tooltip } from '@material-tailwind/react'
import { useCopyToClipboard } from 'usehooks-ts'
import { CheckIcon, LinkIcon } from '@heroicons/react/24/outline'

const ShareResourceTooltip = ({ link }) => {
  const [, copy] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)

  return (
    <Tooltip content={copied ? 'Copiado' : 'Copiar enlace'}>
      <Button
      variant="text"
      onMouseLeave={() => setCopied(false)}
      onClick={() => {
        copy(`https://juniors-tech-frontend.vercel.app${link}`)
        setCopied(true)
      }}
        className="rounded-full p-1.5"
      >
        <div className="flex items-center gap-1">
          {copied
            ? <CheckIcon className="h-4 w-4" />
            : <LinkIcon className="h-4 w-4" />
          }
        </div>
      </Button>
    </Tooltip>
  )
}

export default ShareResourceTooltip
