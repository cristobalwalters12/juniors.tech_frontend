import TimeAgo from 'react-timeago'
import spanishStrings from 'react-timeago/lib/language-strings/es'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(spanishStrings)

const FormattedDate = ({ date }) => {
  return (
    <TimeAgo date={date} formatter={formatter}/>
  )
}

export { FormattedDate }
