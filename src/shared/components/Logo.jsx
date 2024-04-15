import ForumIcon from './Icons/ForumIcon'

const Logo = ({ className, accent1 = '#508ddd', accent2 = '#1976D2' }) => {
  return (
    <div className={`flex gap-2 ${className || ''}`}>
      <ForumIcon accent={accent1}/>
      <p>
        <span className="font-bold">Juniors</span>
        <span className={`font-bold ${accent2}`}>.tech</span>
      </p>
    </div>
  )
}

export default Logo
