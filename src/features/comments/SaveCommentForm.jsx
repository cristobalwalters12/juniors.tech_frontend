import { Controller, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { commentSchema } from './commentSchema'
import { Button, Typography } from '@material-tailwind/react'
import { useSaveComment } from './useSaveComment'
import { showErrorToast } from '../../shared/utils/showErrorToast'
import PostContentEditor from '../../shared/components/TextEditors/ContentEditor'

const SaveCommentForm = ({ comment = {}, onClose, className }) => {
  const saveCommentMutation = useSaveComment()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset
  } = useForm({
    mode: 'onTouched',
    resolver: joiResolver(commentSchema),
    defaultValues: { content: comment.body }
  })

  const saveComment = ({ content: { body } }) => {
    saveCommentMutation
      .mutateAsync({
        ...comment,
        commentId: comment.id,
        body
      })
      .then(() => {
        onClose()
        reset()
      }).catch((err) => {
        showErrorToast(err)
      })
  }

  const contentLength = watch('content')?.text?.trim().length

  return (
    <form
        onSubmit={handleSubmit(saveComment)}
        className={`w-full ${className || ''}`}
      >
        <div className="pb-1 flex flex-col gap-2 w-full">
          <Controller
            name="content"
            defaultValue={{ content: comment.body }}
            control={control}
            render={({ field }) => {
              const { ref, ...rest } = field
              return (
                <PostContentEditor
                  id="content"
                  {...rest}
                  initialValue={comment.body}
                  className="ql-comment"
                />
              )
            }}
          />
          <div className="flex justify-end">
            <div className='flex flex-col gap-2 justify-start flex-1'>
              {errors.content && (
              <Typography variant="small" color="red" className="font-normal ">
                {errors.content.message}
              </Typography>
              )}
              <div className='flex gap-2'>
                <Button size="sm" color="red" disabled={saveCommentMutation.isPending} variant="text" className="rounded-md" onClick={onClose}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={!isValid || saveCommentMutation.isPending} loading={saveCommentMutation.isPending} size="sm" className="rounded-md">
                  Publicar
                </Button>
              </div>
            </div>
            <span className={`${contentLength < 4 || contentLength > 10000 ? 'text-red-500' : ''} inline-block text-right text-sm`}>{contentLength}/10.000</span>
          </div>
        </div>
      </form>
  )
}

export { SaveCommentForm }
