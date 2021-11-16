import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePickerTest = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div>
            <h1>Date Picker Demo</h1>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                // minDate={new Date()}
                // maxDate={new Date()}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                // isClearable
                // showYearDropdown
                // scrollableMonthYearDropdown
            />
        </div>
    )
}
