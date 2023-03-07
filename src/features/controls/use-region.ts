import { useSelector } from 'react-redux'

import { setRegion } from './controls-slice';
import { useAppDispatch } from "store";

import { selectRegion } from "./controls-selectros";
import { CountryOption } from "./CustomSelect";
import { Region } from "types";
import { SingleValue } from "react-select";

type onSelect = (reg: SingleValue<CountryOption>) => void;

export const useRegion = (): [Region | "" , onSelect] => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);

  const handleSelect: onSelect = (reg) => {
    if  (reg) {
      dispatch(setRegion(reg.value))
    } else {
      dispatch(setRegion(''))
    }
  }

  return [region, handleSelect];
}
