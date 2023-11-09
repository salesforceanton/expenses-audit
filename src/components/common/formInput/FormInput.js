import React, { useState, useRef, forwardRef, useImperativeHandle, useCallback } from 'react';

import styles from './FormInput.module.css';

const FormInput = forwardRef((props, ref) => {
    const [wasInputTouched, setWasInputTouched] = useState(false);
    const inputElementRef = useRef();

    const validateInputValue = useCallback((value = props.value) => {
        return inputElementRef?.current?.validity?.valid &&
            (props.validityFn ? props.validityFn(value) : true) &&
            (props.required ? !!value : true)
    }, [props])

    const setWasInputAction = () => {
        if (!wasInputTouched) {
            setWasInputTouched(true);
        }
    }

    const blurInputHandler = () => {
        setWasInputAction();
    }

    const changeValueHandler = (e) => {
        setWasInputAction();
        props.onChange(e);
    }
       
    useImperativeHandle(ref, () => ({
        reportValidity() {
            const wasInputTouched = true;
            setWasInputTouched(wasInputTouched);
            return !validateInputValue() && wasInputTouched;
        }
    }), [validateInputValue]);

    const isInvalid = !validateInputValue() && wasInputTouched;
    const inputClasses = `${props.className} ${isInvalid ? styles.invalid : ''}`;

    return (
        <div className={inputClasses}>
            <label>{props.label} {props.required && <span>*</span>}</label>
            <input 
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                min={props.min}
                max={props.max}
                step={props.step}
                onChange={changeValueHandler}
                onBlur={blurInputHandler}
                ref={inputElementRef}
            />
            {isInvalid && <p>Value is incorrect</p>}
         </div>
    )
}, [])

export default FormInput;