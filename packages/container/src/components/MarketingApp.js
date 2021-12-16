import React, { useRef, useEffect, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp'

export default () => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current)
    }, [])

    return <div ref={ref} />
}