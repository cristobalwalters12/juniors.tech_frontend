import { Link } from 'react-router-dom'
import { CountryDiccionary, ItFieldDictionary, LanguageDictionary, TechnologyDictionary } from '../editUserProfile/Dictionary'
import UserAvatar from '../../shared/components/UserAvatar'

const UserSummary = ({ user }) => {
  return (
    <Link to={`/users/${encodeURIComponent(user.username)}`} key={user.id} className="max-w-3xl w-full mx-auto">
      <div className="flex flex-col">
        <div className="bg-white border border-white shadow-lg rounded-3xl p-4 m-4">
          <div className="flex-none sm:flex">
            <UserAvatar avatarUrl={user.avatarUrl} username={user.username} size="lg" />
            <div className="flex-auto sm:ml-5 justify-evenly">
              <div className="flex items-center justify-between sm:mt-2">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="w-full flex-none text-lg text-accent-dark font-bold leading-none">
                      <span>{user.username}</span>
                      {user.countryId && (
                        <>
                          <span className="text-accent-dark mx-1">·</span>
                          <span className="text-grey-dark">{CountryDiccionary.find(country => country.value === user.countryId)?.label}</span>
                        </>
                      )}
                    </div>
                    <div className="flex text-gray-500 my-1">
                      <span className="mr-3">{user.score} {user.score === 1 ? 'punto' : 'puntos'}</span>
                      <div>
                      {user.openToWork && (
                        <>
                          <span className="mr-3 border-r border-gray-200  max-h-0"></span>
                          <span>Abierto a ofertas</span>
                        </>
                      )}
                      </div>
                    </div>
                    {user.languages.length > 0 && (
                      <div className="flex-auto text-gray-500 my-1">
                        {user.languages.map((langId, index) => (
                          <span key={langId}>
                            {LanguageDictionary.find(lang => lang.value === langId)?.label}
                            {index !== user.languages.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </div>
                    )}
                    {user.itFieldId && (
                      <div className="flex-auto text-gray-500 my-1">
                        <span>{ItFieldDictionary.find(field => field.value === user.itFieldId)?.label}</span>
                      </div>
                    )}
                    {user.technologies.length > 0 && (
                      <div className="flex-auto text-primary-dark font-bold my-1">
                        {user.technologies.map((techId, index) => (
                          <span key={techId}>
                            {TechnologyDictionary.find(tech => tech.value === techId)?.label}
                            {index !== user.technologies.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
  )
}

export default UserSummary
