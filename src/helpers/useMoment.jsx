import React from 'react'
import moment from 'moment/moment'

export default function getCurrentTimeStamp(timeformat) {
  return  moment().format(timeformat)
}
