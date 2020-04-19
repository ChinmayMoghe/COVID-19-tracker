import React from 'react';
import {useState,useEffect} from 'react';
import styles from './CountryPicker.module.css';
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api';
const CountryPicker = ({handleCountryChange})=> {
    const [fetchedCountries,setfetchedCountries] = useState([])
    useEffect(()=>{
        const getCountries = async()=>{
            setfetchedCountries(await fetchCountries())
        }
        getCountries();
    },[setfetchedCountries]);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
    {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;