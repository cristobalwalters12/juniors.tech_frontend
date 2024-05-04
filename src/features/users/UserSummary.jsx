import React from 'react'
import { Card, Chip } from '@material-tailwind/react'
import { LanguageDictionary, TechnologyDictionary, ItFieldDictionary, CountryDiccionary } from '../editUserProfile/Dictionary'
import getFullResourcesFromDictionaryByIds from '../../shared/utils/getFullResourcesFromDictionaryByIds'
import UserAvatar from '../../shared/components/UserAvatar'
import { BriefcaseIcon, GlobeAmericasIcon } from '@heroicons/react/24/solid'

const UserSummary = ({ user }) => {
  const country = user.countryId && CountryDiccionary.find(field => field.value === user.countryId).label
  const itField = user.itFieldId && ItFieldDictionary.find(field => field.value === user.itFieldId).label
  const languages = getFullResourcesFromDictionaryByIds({ ids: user.languages, dictionary: LanguageDictionary })
  const technologies = getFullResourcesFromDictionaryByIds({ ids: user.technologies, dictionary: TechnologyDictionary })

  return (
    <Card className='flex gap-2 w-full p-4 pt-5'>
      <div className='flex gap-4'>
        <div className='self-center min-w-14 min-h-14 w-full h-full max-w-24 max-h-24'>
          <UserAvatar avatarUrl={user.avatarUrl} className="w-full h-full" />
        </div>
        <div className='text-grey-dark'>
          <div>
            <span className='font-bold text-lg text-accent-dark'>{user.username}</span>
            <span className='font-semibold mx-2'>&middot;</span>
            {country && <span className='font-bold text-lg text-grey-dark'>{country}</span>}
          </div>
          <div className='flex flex-col gap-1 mt-2 text-md'>
            <div>
              <span>{user.score} pts</span>
              {
                user.itFieldId && (
                <>
                  <span className='font-semibold mx-2'>&middot;</span>
                  <span>{itField}</span>
                </>
                )
              }
            </div>
            {user.openToWork && (
              <div className='flex items-center gap-2 font-semibold'>
                <BriefcaseIcon className='w-4 h-4' />En busca de ofertas
              </div>
            )}
            {languages.length > 0 &&
              <div className='flex items-center flex-wrap gap-2 my-1 leading-none'>
                <GlobeAmericasIcon className='w-4 h-4' />
                {languages.map((lang, index) => (
                  <React.Fragment key={lang.value}>
                    {index !== 0 && <span className='font-semibold'>&middot;</span>}
                    <span>{lang.label}</span>
                  </React.Fragment>
                ))
                }
              </div>
            }
          </div>
        </div>
      </div>
      {technologies.length > 0 &&
        <div className='flex flex-wrap gap-2 mt-2'>
          {technologies.map((tech) => (
            <Chip
              key={tech.value}
              variant="ghost"
              value={tech.label}
              size="sm"
              color="blue"
              className="normal-case text-sm rounded-full"
              />
          ))}
        </div>
      }
    </Card>
  )
}

export default UserSummary
