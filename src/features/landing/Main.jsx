import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from '@material-tailwind/react'
import imagen1 from '../../assets/images/imagen1.png'
import imagen2 from '../../assets/images/imagen2.png'
import imagen3 from '../../assets/images/imagen3.png'
import imagen4 from '../../assets/images/imagen4.png'
import imagen5 from '../../assets/images/imagen5.png'
import imagen6 from '../../assets/images/imagen6.png'
import imagen7 from '../../assets/images/imagen7.png'

export function CardsList () {
  const cardData = [
    {
      text: 'Los colegas para emprender en tu próximo proyecto',
      imageSrc: imagen1
    },
    {
      text: 'Los compañeros de estudio para avanzar en tus cursos',
      imageSrc: imagen2
    },
    {
      text: 'Las anécdotas de los que están cursando una carrera de tecnología',
      imageSrc: imagen3
    },
    {
      text: 'Los egresados del bootcamp que te interesa',
      imageSrc: imagen4
    },
    {
      text: 'Los aprendizajes de los que consiguieron su primer empleo en tecnología',
      imageSrc: imagen5
    },
    {
      text: 'Los consejos que buscas para mejorar tu hoja de vida',
      imageSrc: imagen6
    },
    {
      text: 'Las historias de superación que te inspiran a seguir creciendo',
      imageSrc: imagen7
    }
  ]

  return (
        <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 gap-10">
                {cardData.map((card, index) => (
                    <Card key={index} className="w-full max-w-[48rem] flex-row">
                        {index % 2 === 0
                          ? (
                            <>
                                <CardBody>
                                    <Typography
                                        variant="h4"
                                        color="black"
                                        className="mt-5"
                                    >
                                        {card.text}
                                    </Typography>
                                </CardBody>
                                <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 w-2/5 shrink-0 rounded-l-none"
                                >
                                    <img
                                        src={card.imageSrc}
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                            </>
                            )
                          : (
                            <>
                                <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                                >
                                    <img
                                        src={card.imageSrc}
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography
                                        variant="h4"
                                        color="black"
                                        className="mt-5"
                                    >
                                        {card.text}
                                    </Typography>
                                </CardBody>
                            </>
                            )}
                    </Card>
                ))}
            </div>
        </div>
  )
}

export function BottomTextWithButtons () {
  return (
        <div className="flex flex-col items-center mt-10 mb-10">
            <Typography
                variant="paragraph"
                color="white"
                className="mb-3 text-center"
            >
                Aquí están los juniors de Latinoamérica. ¡Solo faltas tú!
            </Typography>
            <Typography
                variant="h6"
                color="black"
                className="mb-3 text-center font-semibold"
            >
                ¿Qué esperas para unirte?
            </Typography>
            <div className="flex gap-5">
                <a href="/register">
                    <Button variant="outlined" color="black">
                        Crear cuenta
                    </Button>
                </a>
                <a href="/home">
                    <Button variant="gradient" color="blue">
                        Ingresar al foro
                    </Button>
                </a>
            </div>
        </div>
  )
}
