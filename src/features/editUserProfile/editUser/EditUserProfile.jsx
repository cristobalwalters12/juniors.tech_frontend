import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Textarea,
  IconButton,
  Input,
  Radio,
  Checkbox,
  Button
} from '@material-tailwind/react'
import ProfileAvatar from '../../../shared/components/ProfileAvatar'
import { useAuthStore } from '../../../stores/authStore'
import {
  CountryDiccionary,
  PronounDiccionary, LanguageDictionary,
  EmploymentStatusDictionary,
  ItFieldDictionary,
  EducationDictionary,
  TechnologyDictionary
} from '../Dictionary/index'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { useUserEditUser } from './useUserEditProfile'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { showErrorToast } from '../../../shared/utils/showErrorToast'

const EditUserProfile = () => {
  const user = useAuthStore(state => state.user)
  const idUser = useAuthStore(state => state.id)
  const { register, handleSubmit, control, getValues } = useForm()
  const { editUser } = useUserEditUser()
  const navigate = useNavigate()
  let socialNetworks = []
  const handleClick = () => {
    const githubValue = getValues('Github')
    const linkedinValue = getValues('Linkedin')

    if (githubValue) {
      const githubObject = {
        id: 'ep54y-_428',
        url: `https://www.github.com/${githubValue}`
      }

      socialNetworks = socialNetworks.filter(network => network.id !== githubObject.id)

      socialNetworks.push(githubObject)
    }

    if (linkedinValue) {
      const linkedinObject = {
        id: 't6StFTqu_g',
        url: `https://www.linkedin.com/in/${linkedinValue}`
      }
      socialNetworks = socialNetworks.filter(network => network.id !== linkedinObject.id)
      socialNetworks.push(linkedinObject)
    }
  }
  const onSubmit = data => {
    const userData = {
      usernameId: idUser
    }
    if (data.imgURL) {
      userData.avatarUrl = data.imgURL
    }

    if (data.availableToWork) {
      userData.openToWork = data.availableToWork
    }

    if (data.about) {
      userData.about = data.about
    }

    if (data.employmentStatus) {
      userData.employmentStatusId = data.employmentStatus
    }

    if (data.pronouns?.value) {
      userData.pronounId = data.pronouns.value
    }

    if (data.countryId?.value) {
      userData.countryId = data.countryId.value
    }

    if (data.itField?.value) {
      userData.itFieldId = data.itField.value
    }

    if (Array.isArray(data.Language) && data.Language.length > 0) {
      userData.language = data.Language.map(language => language.value)
    }

    if (Array.isArray(data.technologies) && data.technologies.length > 0) {
      userData.technology = data.technologies.map(technology => technology.value)
    }

    if (Array.isArray(data.education) && data.education.length > 0) {
      userData.education = data.education
    }

    if (socialNetworks.length > 0) {
      userData.socialNetwork = socialNetworks
    }
    editUser(userData, {
      onSuccess: () => {
        navigate(`/users/${user}`)
        toast.success('Usuario actualizado correctamente')
      },
      onError: (error) => {
        showErrorToast(error, 'Error al actualizar usuario')
      }
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className='w-full sm:w-96'>
                <Input type="text" label='Imagen de perfil' {...register('imgURL')} />
            </div>
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
                        <Controller
                            name="countryId"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                            <Select
                                {...field}
                                options={CountryDiccionary}
                            >
                            </Select>
                            )}
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <Typography color='black' variant='h4' className='mt-6'>
                        Pronombres personales
                    </Typography>
                    <div className="w-full sm:w-96">
                        <Controller
                            name="pronouns"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                {...field}
                                options={PronounDiccionary}
                                >
                                </Select>
                            )}
                            />
                    </div>
                </div>
                <div className="w-full sm:w-9/12 mt-6">
                    <Typography color='black' variant='h4'>
                        Descripción
                    </Typography>
                    <Textarea label="Sobre Ti" {...register('about')} />
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
                        <Controller
                            name="Language"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                {...field}
                                options={LanguageDictionary}
                                isMulti
                                >
                                </Select>
                            )}
                            />
                        </div>
                    </div>
                </div>
            <div className='mt-6'>
                <Typography color='black' variant='h3'>
                    Información de Contacto
                </Typography>
                <div className='mt-6 flex flex-col'>
                    <div className='flex'>
                        <IconButton className="rounded bg-[#0D47A1] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                        <i className="fab fa-github text-lg" />
                        </IconButton>
                        <div className='w-full sm:w-6/12 ml-2 '>
                        <Controller
                            name="Github"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input {...field} label="Github" />}
                            />
                        </div>

                    </div>
                    <div className='flex mt-3'>
                        <IconButton className="rounded bg-[#0D47A1] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                        <i className="fab fa-linkedin text-lg" />
                        </IconButton>
                        <div className='w-full sm:w-6/12 ml-2 '>
                        <Controller
                            name="Linkedin"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input {...field} label="Linkedin" />}
                        />
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
                        <Controller
                        key={index}
                        name="employmentStatus"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Radio {...field} value={status.id} label={status.name} />
                        )}
                        />
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
                    <Controller
                        name="availableToWork"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                        <Checkbox {...field} label="Disponible para trabajar" />
                        )}
                    />
                    </div>
                </div>
                <div className='flex flex-col'>
                        <div className='mt-6'>
                            <Typography color='black' variant='h3'>
                                Área de especialidad en IT
                            </Typography>
                        </div>
                        <div className="w-full  sm:w-96 mt-5">
                        <Controller
                            name="itField"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                {...field}
                                options={ItFieldDictionary}
                                >
                                </Select>
                            )}
                            />

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
                            <Controller
                            key={index}
                            name="education"
                            control={control}
                            defaultValue={[]}
                            render={({ field: { onChange, value } }) => (
                                <Checkbox
                                value={education.id}
                                label={education.name}
                                checked={value.includes(education.id)}
                                onChange={e => {
                                  if (e.target.checked) {
                                    onChange([...value, education.id])
                                  } else {
                                    onChange(value.filter(id => id !== education.id))
                                  }
                                }}
                                />
                            )}
                            />
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
                        <Controller
                            name="technologies"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                {...field}
                                options={TechnologyDictionary}
                                isMulti
                                >
                                </Select>
                            )}
                            />

                        </div>
                    </div>
                </div>
            </div>
            </CardBody>
            <CardFooter>
                <div className='flex flex-row'>
                    <div>
                        <Button type="submit" className='bg-[#0D47A1] text-white' onClick={handleClick}>Guardar</Button>
                    </div>
                    <div className='ml-6'>
                        <Button className='bg-[#0D47A1] text-white'>Cancelar</Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    </form>

  )
}
export default EditUserProfile
