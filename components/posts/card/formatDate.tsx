import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const FormatDate = ({date}: {date: string}) => {
  return (
    <h2 className="text-xs text-gray-400 font-bold tracking-tight">{timeAgo.format(new Date(date))}</h2>
  )
}

export default FormatDate