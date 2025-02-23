import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import s from './DatePicker.module.css';
import sprite from '../../svg/sprite.svg';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const FormDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomTimeInput = ({ date, value, onChange }) => (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ border: 'solid 1px #f5f6fb' }}
    />
  );

  let classes = `${s.border} += ${s.text}`;

  return (
    <>
      <svg className={s.calendar} fill="red" width="20" height="20">
        <use href={`${sprite}#calendar`}></use>
      </svg>
      <DatePicker
        closeOnScroll={true}
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeInput
        customTimeInput={<ExampleCustomTimeInput />}
        showDisabledMonthNavigation
        className={classes}
      />
    </>
  );
};

export default FormDatePicker;
