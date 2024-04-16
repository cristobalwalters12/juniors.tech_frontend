import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Select,
  Option,
  Textarea,
  IconButton,
  Input,
  Radio,
  Checkbox,
  Button
} from '@material-tailwind/react'
import ProfileAvatar from '../../../shared/components/ProfileAvatar'
import { useAuthStore } from '../../../stores/authStore'
import { CountryDiccionary, PronounDiccionary, LanguageDictionary, EmploymentStatusDictionary, ItFieldDictionary, EducationDictionary, TechnologyDictionary } from '../Dictionary/index'
const EditUserProfile = () => {
  const user = useAuthStore(state => state.user)

  return (
    <Card className="mt-6">
        <div className='flex mt-6 ml-6 flex-col'>
        <Typography color='black' variant='h3'>
            Editar Perfil
        </Typography>
         <Typography color='black' className='mt-3 text-xl'>
            {user}
        </Typography>
        </div>
         <div className='flex ml-6  flex-col' >
         <Typography color='black' variant='h3' className='mt-6'>
            Imagen de Perfil
        </Typography>
        <ProfileAvatar alt="avatar" size='xxl' className='mt-6' />
        </div>
        <CardBody>
            <div className='flex flex-col'>
                <Typography color='black' variant='h3'>
                    Información Personal
                </Typography>
                <Typography color='black' variant='h4' className='mt-6'>
                    País de residencia
                </Typography>
                <div className="w-full sm:w-96">
                    <Select label="Selecciona el lenguaje">
                        {CountryDiccionary.map((country, index) => (
                            <Option key={index} value={country.id}>{country.name}</Option>
                        ))}
                    </Select>
                </div>
            </div>
            <div className='flex flex-col'>
                <Typography color='black' variant='h4' className='mt-6'>
                    Pronombres personales
                </Typography>
                <div className="w-full sm:w-96">
                    <Select label="Selecciona el pronombre">
                        {PronounDiccionary.map((pronoun) => (
                            <Option key={pronoun.id}>{pronoun.name}</Option>
                        ))}
                    </Select>
                </div>
            </div>
            <div className="w-full sm:w-9/12 mt-6">
                <Typography color='black' variant='h4'>
                    Descripción
                </Typography>
                <Textarea label="Sobre Ti" />
            </div>
            <div className='flex flex-col'>
                <Typography color='black' variant='h4' className='mt-6'>
                    Idiomas
                </Typography>
                <Typography color='black' className='mt-1 text-l'>
                        (si solo hablas un idioma, selecciona una opcion)
                </Typography>
                <div className='flex flex-col sm:flex-row'>
                    <div className="w-full sm:w-96">
                        <Select label="Selecciona el lenguaje">
                            {LanguageDictionary.map((language) => (
                                <Option key={language.id}>{language.name}</Option>
                            ))}
                        </Select>
                    </div>
                    <div className="w-full sm:w-96 mt-6 sm:mt-0 sm:ml-6">
                        <Select label="Selecciona el lenguaje">
                            {LanguageDictionary.map((language) => (
                                <Option key={language.id}>{language.name}</Option>
                            ))}
                        </Select>
                    </div>
                    <div className="w-full sm:w-96 mt-6 sm:mt-0 sm:ml-6">
                        <Select label="Selecciona el lenguaje">
                            {LanguageDictionary.map((language) => (
                                <Option key={language.id}>{language.name}</Option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
        <div className='mt-6'>
            <Typography color='black' variant='h3'>
                Información de Contacto
            </Typography>
            <div className='mt-6 flex flex-col'>
                <div className='flex'>
                    <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                    <i className="fab fa-github text-lg" />
                    </IconButton>
                    <div className='w-full sm:w-6/12 ml-2 '>
                    <Input label="Github" />
                    </div>

                </div>
                <div className='flex mt-3'>
                    <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                    <i className="fab fa-linkedin text-lg" />
                    </IconButton>
                    <div className='w-full sm:w-6/12 ml-2 '>
                    <Input label="Linkedin" />
                    </div>
                </div>
            </div>
            <div className=' flex flex-col'>
                <div className='mt-6'>
                    <Typography color='black' variant='h3'>
                        Situación Laboral
                    </Typography>
                </div>
                <div className="flex flex-col gap-2">
                    {EmploymentStatusDictionary.map((status, index) => (
                        <Radio key={index} value={status.id} name="employmentStatus" label={status.name} />
                    ))}
                </div>
            </div>
            <div className=' flex flex-col'>
                <div className='mt-6'>
                    <Typography color='black' variant='h3'>
                    Disponibilidad laboral
                    </Typography>
                </div>
                <div className='mt-3'>
                    <Checkbox label="Disponible para trabajar" />
                </div>
            </div>
            <div className='flex flex-col'>
                    <div className='mt-6'>
                        <Typography color='black' variant='h3'>
                            Área de especialidad en IT
                        </Typography>
                    </div>
                    <div className="w-full  sm:w-96 mt-5">
                        <Select label="Selecciona especialidad ">
                            {ItFieldDictionary.map((field) => (
                                <Option key={field.id}>{field.name}</Option>
                            ))}
                        </Select>
                    </div>
            </div>
            <div className='flex flex-col'>
                <div className='mt-6'>
                    <Typography color='black' variant='h3'>
                        Formación en IT
                    </Typography>
                    <Typography color='black' className='mt-1 text-l'>
                        Escoge todas las que apliquen
                    </Typography>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    {EducationDictionary.map((education, index) => (
                        <Checkbox key={index} value={education.id} label={education.name} />
                    ))}
                </div>
            </div>
            <div className='mt-6'>
                <Typography color='black' variant='h3'>
                    Lenguajes y herramientas
                </Typography>
                <Typography color='black' className='mt-1 text-l'>
                Escoge todas las que apliquen
                </Typography>
                <div className='flex flex-col sm:flex-row'>
                    <div className="w-full sm:w-96">
                        <Select label="Selecciona las Technologias">
                            {TechnologyDictionary.map((technology) => (
                                <Option key={technology.id}>{technology.name}</Option>
                            ))}
                        </Select>
                    </div>
                    <div className="w-full sm:w-96 mt-6 sm:mt-0 sm:ml-6">
                        <Select label="Selecciona el Technologias">
                            {TechnologyDictionary.map((technology) => (
                                <Option key={technology.id}>{technology.name}</Option>
                            ))}
                        </Select>
                    </div>
                    <div className="w-full sm:w-96 mt-6 sm:mt-0 sm:ml-6">
                        <Select label="Selecciona el Technologias">
                            {TechnologyDictionary.map((technology) => (
                                <Option key={technology.id}>{technology.name}</Option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
        </div>
        </CardBody>
        <CardFooter>
            <div className='flex flex-row'>
                <div>
                    <Button>Guardar</Button>
                </div>
                <div className='ml-6'>
                    <Button color='gray'>Cancelar</Button>
                </div>
            </div>
        </CardFooter>
    </Card>

  )
}
export default EditUserProfile
