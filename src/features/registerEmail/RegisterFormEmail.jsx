import { useForm, Controller } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { userSchema } from './userSchema'
import {
  Input,
  Checkbox,
  Button,
  Typography,
  Select, Option
} from '@material-tailwind/react'
import './css/registerFormEmail.css'
import { useCreateUser } from './userCreateUser'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { showErrorToast } from '../../shared/utils/showErrorToast'
const RegisterFormEmail = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onTouched',
    resolver: joiResolver(userSchema)
  })
  const { createUser } = useCreateUser()
  const navigate = useNavigate()

  const onSubmit = data => {
    if (data.month && data.year && data.day) {
      const date = new Date(`${data.year}-${data.month}-${data.day}`)
      const birthdate = date.toISOString().split('T')[0]
      const user = {
        email: data.email,
        username: data.username,
        password: data.password,
        birthdate
      }
      createUser(user, {
        onSuccess: () => {
          navigate('/home')
          toast.success('Usuario creado correctamente')
        },
        onError: (error) => {
          showErrorToast(error, 'Error al crear usuario')
        }
      })
    }
  }

  return (
    <div className='w-11/12 sm:w-8/12'>
      <Typography variant="h2" color="blue-gray" className='text-center mt-4'>
        Registrate
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 ">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Correo Electronico
          </Typography>
          <Input
            {...register('email')}

            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none'
            }}
          />
          {errors.email && <p className="text-red-200">{errors.email.message}</p>}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nombre de Usuario
          </Typography>
          <Input

            {...register('username')}

            size="lg"
            placeholder="name123"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: 'before:content-none after:content-none'
            }}
          />
          {errors.username && <p className="text-red-200">{errors.username.message}</p>}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            {...register('password')}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none'
            }}
          />
          {errors.password && <p className="text-red-200">{errors.password.message}</p>}
        </div>
        <Typography variant="h6" color="blue-gray" className="-mb-3 mt-6">
            Fecha de nacimiento
        </Typography>
        <div className='flex mt-4'>
          <div className='inputs'>
            <Input
              {...register('day')}
              placeholder="1234567890"
              className="inputs !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none'
              }}
            />
          </div>
          <div className='ml-5 '>
          <Controller
            name="month"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select {...field} label="Seleccionar mes ">
                <Option value="01">Enero</Option>
                <Option value="02">Febrero</Option>
                <Option value="03">Marzo</Option>
                <Option value="04">Abril</Option>
                <Option value="05">Mayo</Option>
                <Option value="06">Junio</Option>
                <Option value="07">Julio</Option>
                <Option value="08">Agosto</Option>
                <Option value="09">Septiembre</Option>
                <Option value="10">Octubre</Option>
                <Option value="11">Noviembre</Option>
                <Option value="12">Diciembre</Option>
              </Select>
            )}
          />
          </div>
          <div className='inputs ml-5'>
            <Input
              {...register('year')}
              placeholder="1234567890"
              className=" inputs !border-t-blue-gray-200 focus:!border-t-gray-900 "
              labelProps={{
                className: 'before:content-none after:content-none'
              }}
            />
          </div>
        </div>
        <Checkbox
          {...register('terms')}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Estoy de acuerdo con los
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900 "
              >
                &nbsp;Terminos y Condiciones
              </a>
            </Typography>
          }
          containerProps={{ className: '-ml-2.5' }}
        />
        {errors.terms && <p className="text-red-200">{errors.terms.message}</p>}
        <Button className="mt-6 bg-[#0D47A1] text-white" fullWidth type="submit">
          Registrarse
        </Button>
      </form>
      <Typography variant='h6' className='mt-6 text-center'>
          ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
      </Typography>
      <Typography variant='h6' className='mt-6 text-center sm:text-left'>
        al continuar, aceptas nuestros <a href="/login">Términos de servicio</a> y <a href="/login">Política de privacidad</a>
      </Typography>
    </div>
  )
}

export default RegisterFormEmail
