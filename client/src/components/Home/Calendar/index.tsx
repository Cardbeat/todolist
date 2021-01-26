import React, { useContext, useEffect, useState } from 'react'
import { ptBR } from 'date-fns/locale'
import { Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { ITodo, TodoContext } from '../../../context'
import { getDay, isSameDay } from 'date-fns'
import { Types } from '../../../context/types'

const TodoCalendar = () => {
    const [selectedDates, setSelectedDates] = useState<any>([
    ])
    const { state, dispatch } = useContext(TodoContext)

    const modifiers = {
        selected: (date: number | Date) =>
            selectedDates.some((selectedDate: number | Date) =>
                isSameDay(selectedDate, date)),
        highlight: (date: any) => getDay(date) === 2
    }

    const modifiersClassNames = {
        highlight: '-highlight'
    }

    useEffect(() => {
        const dates: Date[] = []
        state?.todos.map((element: ITodo) => {
            dates.push(new Date(element.date))
        })
        setSelectedDates([...selectedDates, ...dates])
    }, [state?.todos])

    const handleDayClick = (date: any) => {
        dispatch({ type: Types.New, payload: { ...state?.todo, date: date } })
    }

    return (
        <div>
            <Calendar
                modifiers={modifiers}
                onDayClick={handleDayClick}
                locale={ptBR} />
        </div>
    )
}

export default TodoCalendar;