import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { commentSchema } from './commentSchema'
import { Button, Typography } from '@material-tailwind/react'
import { TextEditor } from '../posts/TextEditor'
import { useSaveComment } from './useSaveComment'
import { showErrorToast } from '../../shared/utils/showErrorToast'

const SaveCommentForm = ({ comment = {}, onClose, className }) => {
  const saveCommentMutation = useSaveComment()
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

  const saveComment = ({ body }) => {
    saveCommentMutation
      .mutateAsync({ ...comment, body })
      .then(() => {
        onClose()
        reset()
      }).catch((err) => {
        showErrorToast(err)
      })
  }

  return (
    <form
        onSubmit={handleSubmit(saveComment)}
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
            <Button size="sm" color="red" disabled={saveCommentMutation.isPending} variant="text" className="rounded-md" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={!isValid || saveCommentMutation.isPending} loading={saveCommentMutation.isPending} size="sm" className="rounded-md">
              Publicar
            </Button>
          </div>
        </div>
      </form>
  )
}

export { SaveCommentForm }
