import UserSummarySkeleton from './UserSummarySkeleton'

const UserSkeletonList = ({ totalSkeletons, className }) => {
  return (
    <div className={`flex flex-col gap-4 w-full h-full ${className || ''}`}>
      {Array(totalSkeletons).fill(null).map((_, index) => (
        <UserSummarySkeleton key={index} />
      ))}
    </div>
  )
}

export default UserSkeletonList
