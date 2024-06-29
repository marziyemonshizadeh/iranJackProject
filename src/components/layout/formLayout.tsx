import React from 'react'

type FormLayoutProps = { children: React.ReactNode };


const FormLayout = ({ children }: FormLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default FormLayout
