// import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { commentSchema } from './commentSchema'
import { Button, Typography } from '@material-tailwind/react'
import { TextEditor } from '../posts/TextEditor'

const CreateCommentForm = ({ comment = {}, submitReply, close, className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: 'onTouched',
    resolver: joiResolver(commentSchema),
    defaultValues: { body: comment.body || '' }
  })

  const onSubmit = (data) => {
    if (comment.id) {
      comment.body = data.body
      submitReply(comment)
    } else {
      submitReply(data)
      close()
      reset()
    }
  }

  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className={`my-2 w-full pl-5 ${className || ''}`}
      >
        <div className="pb-1 flex flex-col gap-2 w-full">
          <TextEditor
            id="body"
            label="Comentario"
            register={register}
            registerKey="body"
            className="bg-white"
          />
          {errors.body && (
            <Typography variant="small" color="red" className="font-normal">
              {errors.body.message}
            </Typography>
          )}
          <div className="flex gap-2">
            <Button size="sm" color="red" variant="text" className="rounded-md" onClick={close}>
              Cancelar
            </Button>
            <Button type="submit" disabled={!isValid} size="sm" className="rounded-md">
              Publicar
            </Button>
          </div>
        </div>
      </form>
  )
}

export { CreateCommentForm }
