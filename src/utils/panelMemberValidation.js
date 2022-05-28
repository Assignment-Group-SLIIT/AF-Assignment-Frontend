import React from 'react'

export const validate = (input) => {

    let errors = {}

    if (!input.trim()) {
        errors.name = "Please"
    }


    return {
        errors
    }
}