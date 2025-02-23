import React from 'react';
import Button from '../Button/Button';
import s from './ProductSelection.module.css';
import sprite from '../../svg/sprite.svg';
import Media from 'react-media';
import FormDatePicker from '../../components/DatePicker/DatePicker';
import Selector from '../Selector/Selector';

const ProductSelection = () => {
  return (
    <div className={s.container}>
      <div className={s.outcomes_div}>
        <Media queries={{ small: { maxWidth: 767 } }}>
          {matches => (matches.small ? <></> : <FormDatePicker />)}
        </Media>
        <form className={s.form}>
          <Selector>Категория товара</Selector>
          <div className={s.currency_div}>
            <Media queries={{ small: { maxWidth: 767 } }}>
              {matches =>
                matches.small ? (
                  <>
                    <input
                      className={s.input_price}
                      type="number"
                      data-type="currency"
                      placeholder="00.00 UAH"
                      step="0.01"
                      min="0,01"
                    />
                    <div className={s.culc_div}>
                      <svg
                        className={s.culculator}
                        fill=" #52555F"
                        width="20"
                        height="20"
                      >
                        <use href={`${sprite}#calculator`}></use>
                      </svg>
                    </div>
                  </>
                ) : (
                  <>
                    <input
                      className={s.input_price}
                      type="number"
                      data-type="currency"
                      placeholder="00.00"
                      step="0.01"
                      min="0,00000001"
                    ></input>
                    <svg
                      className={s.culculator}
                      fill=" #52555F"
                      width="20"
                      height="20"
                    >
                      <use href={`${sprite}#calculator`}></use>
                    </svg>
                  </>
                )
              }
            </Media>
          </div>
        </form>
      </div>

      <div className={s.button_div}>
        <Button type="button" name="Ввод" isPrimary></Button>
        <Button type="button" name="Очистить"></Button>
      </div>
    </div>
  );
};

export default ProductSelection;
