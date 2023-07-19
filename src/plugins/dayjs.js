import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import isoWeek from 'dayjs/plugin/isoWeek'
import duration from 'dayjs/plugin/duration'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import updateLocale from 'dayjs/plugin/updateLocale'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

export default {
	install(Vue) {
		dayjs.locale(ru)
		dayjs.extend(weekday)
		dayjs.extend(weekOfYear)
		dayjs.extend(weekYear)
		dayjs.extend(isoWeek)
		dayjs.extend(duration)
		dayjs.extend(isLeapYear)
		dayjs.extend(updateLocale)
		dayjs.extend(utc)
		dayjs.extend(timezone)
		dayjs.extend(localizedFormat)
		dayjs.extend(isSameOrBefore)
		dayjs.extend(isSameOrAfter)

		Vue.prototype.$dayjs = dayjs
	},
}
