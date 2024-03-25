import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useCreatePost } from './useCreatePost'
import { postSchema } from './postSchema'

const CreatePostForm = () => {
  const { createPost } = useCreatePost()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: 'onTouched',
    resolver: joiResolver(postSchema)
  })

  const onSubmit = (data) => {
    createPost(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <select name="category" id="category" {...register('category')}>
          <option value="Portafolio">Portafolio</option>
          <option value="Proyectos">Proyectos</option>
        </select>
        {errors.category && (
          <p className="text-red-200">{errors.category.message}</p>
        )}
      </div>
      <div>
        <input
          {...register('title')}
          type="text"
          name="title"
          id="title"
          placeholder="Título"
        />
        {errors.title && <p className="text-red-200">{errors.title.message}</p>}
      </div>
      <div>
        <textarea
          name="body"
          id="body"
          placeholder="Cuerpo"
          {...register('body')}
        />
        {errors.body && <p className="text-red-200">{errors.body.message}</p>}
      </div>
      <button type="submit" disabled={!isValid} className={isValid ? 'bg-gray-600' : undefined}>
        Publicar
      </button>
    </form>
  )
}

export default CreatePostForm
