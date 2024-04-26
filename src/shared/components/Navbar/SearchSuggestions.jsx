import { Link } from 'react-router-dom'

const SearchSuggestions = ({ posts, users, onClick }) => {
  return (
    <>
    {posts && posts?.map(({ id, title, slug }) => (
      <Link
        key={id}
        to={`/posts/${id}/${slug}`}
        onClick={onClick}
        className='flex items-center w-full p-2 text-ellipsis hover:bg-blue-gray-50'>
        {title}
      </Link>)
    )}
    {users && users?.map(({ id, username }) => (
      <Link
        key={id}
        to={`/users/${encodeURI(username)}`}
        onClick={onClick}
        className='flex items-center w-full p-2 text-ellipsis hover:bg-blue-gray-50'>
        {username}
      </Link>)
    )}
    </>)
}

export default SearchSuggestions
