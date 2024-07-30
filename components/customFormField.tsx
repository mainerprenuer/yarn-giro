'use client'

import React from 'react'
import { 
    FormField, 
    FormItem, 
    FormLabel, 
    FormControl, 
    FormMessage 
} from './ui/form'
import { Input } from './ui/input'
import { Control } from 'react-hook-form'
import Image from 'next/image'
// import 'react-phone-number-input/style.css'

// import "react-datepicker/dist/react-datepicker.css"; 

export enum FormFieldType  {
    INPUT = 'input',
    CHECKBOX = 'checkbox',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
   }
    
interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,  
}

const RenderField = ({ field, props }: {field: any; props: CustomProps }) => {
    const { 
        fieldType,
        iconSrc, 
        iconAlt, 
        placeholder,
        showTimeSelect,
        dateFormat,
        renderSkeleton,
    } = props;

   switch (fieldType) {
    case FormFieldType.INPUT:
        return (
            <div className='flex rounded-md border border-dark-500 bg-dark-400'>
                {iconSrc && (
                    <Image
                      src={iconSrc}
                      height={24}
                      width={24}
                      alt={iconAlt || 'icon'}
                      className='ml-2'
                    />
                )}
                <FormControl>
                    <Input
                      placeholder={placeholder}
                      {...field}
                      className='shad-input border-0'
                      />
                      
                </FormControl>
            </div>
        
    

)}}

const CustomFormField = (props: CustomProps) => {
    const {control, fieldType, name, label} = props;

  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
         <FormItem className='flex-1'>
            {fieldType !== FormFieldType.CHECKBOX && label && (
                <FormLabel>{label}</FormLabel>
            )}

            <RenderField field={field} props={props}/>

            <FormMessage className='shad-error' />
         </FormItem>
    )}
  />
  )
}
   

export default CustomFormField