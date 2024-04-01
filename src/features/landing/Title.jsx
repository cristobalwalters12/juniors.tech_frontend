import { Typography } from '@material-tailwind/react'

export function Title () {
  return (
    <div className="grid place-items-center">
      <div className="text-center mt-6">
        <Typography variant="h1" color="white">Juniors.tech</Typography>

        <Typography variant="lead" color="white">
          El foro que conecta a los juniors de latinoamerica.
        </Typography>
      </div>
    </div>
  )
}
