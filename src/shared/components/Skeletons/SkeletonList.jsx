import PostSummarySkeleton from './PostSummarySkeleton'

const SkeletonList = ({ totalSkeletons }) => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[48rem]">
      {Array(totalSkeletons)
        .fill(null)
        .map((_, index) => (
          <PostSummarySkeleton key={`summary-skeleton-${index}`} />
        ))}
    </div>
  )
}

export default SkeletonList
