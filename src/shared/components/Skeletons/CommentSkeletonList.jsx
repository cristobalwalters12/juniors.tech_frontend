import { CommentSkeleton } from './CommentSkeleton'

const CommentSkeletonList = ({ totalSkeletons, className }) => {
  return (
    <div className={className}>
      {Array(totalSkeletons)
        .fill(null).map((_, index) => (
          <CommentSkeleton
            key={index}
            className={index !== 0 ? 'mt-4' : ''}
          />)
        )}
    </div>
  )
}

export { CommentSkeletonList }
