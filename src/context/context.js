import React, { useCallback, useEffect, useState } from 'react'

import { client } from './client'
import { cleanUpAbout, cleanUpCarouselSlides, cleanUpCategories, cleanUpRecipies } from './helpers';

const Context = React.createContext()

const Provider = (props) => {
    //Declaring all Data and Loading state
    const [isCarouselLoading, setisCarouselLoading] = useState(false);
    const [carouselSlides, setCarouselSlides] = useState([]);
    const [isAboutLoading, setIsAboutLoading] = useState(false);
    const [about, setAbout] = useState({});
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [isRecipiesLoading, setIsRecipiesLoading] = useState(false);
    const [recipies, setRecipies] = useState([]);

    // Recieving the clean Data
    const saveCarouselData = useCallback((rawData) => {
        const cleanCarouselData = cleanUpCarouselSlides(rawData);
        setCarouselSlides(cleanCarouselData)
    }, [])
    const saveAboutData = useCallback((rawData) => {
        const cleanAboutData = cleanUpAbout(rawData);
        setAbout(cleanAboutData)
    }, [])
    const saveCategoriesData = useCallback((rawData) => {
        const cleanCategoriesData = cleanUpCategories(rawData);
        setCategories(cleanCategoriesData)
    }, [])
    const saveRecipiesData = useCallback((rawData) => {
        const cleanRecipiesData = cleanUpRecipies(rawData);
        setRecipies(cleanRecipiesData)
    }, [])

    // Fetching the Data from contentful API
    const getCarouselSlides = useCallback(async () => {
        setisCarouselLoading(true);
        try {
            const response = await client.getEntries({ content_type: 'kitchenCarousel' })
            const responseData = response.items;
            if(responseData) saveCarouselData(responseData)
            else setCarouselSlides();
            setisCarouselLoading(false);
        } catch (error) {
            alert(error);
            setisCarouselLoading(false);
        }
    }, [])
    const getAbout = useCallback(async () => {
        setIsAboutLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'kitchenAbout' })
            const responseData = response.items
            if (responseData) saveAboutData(responseData)
            else setAbout({});
            setIsAboutLoading(false)
        } catch (error) {
            alert(error);
            setIsAboutLoading(false)
        }
    }, [])
    const getCategories = useCallback(async () => {
        setIsCategoriesLoading(true);
        try {
            const response = await client.getEntries({ content_type: 'kitchenCategories'})
            const responseData = response.items;
            if(responseData) saveCategoriesData(responseData)
            else setCategories([]);
            setIsCategoriesLoading(false);
        } catch (error) {
            alert(error)
            setIsCategoriesLoading(false);
        }
    }, [])
    const getRecipies = useCallback(async () => {
        setIsRecipiesLoading(true);
        try {
            const response = await client.getEntries({ content_type: 'kitchenRecipies'})
            const responseData = response.items;
            if(responseData) saveRecipiesData(responseData)
            else setRecipies([]);
            setIsRecipiesLoading(false);
        } catch (error) {
            alert(error)
            setIsRecipiesLoading(false);
        }
    }, [])

    useEffect(()=>{
        getAbout();
        getCarouselSlides();
        getCategories();
        getRecipies();
    }, [])

    // all the data that needs to be passed to children component
    const contextData = {
        carouselSlides,
        isCarouselLoading,
        about,
        isAboutLoading,
        categories,
        isCategoriesLoading,
        recipies,
        isRecipiesLoading,
    }

    return (
        <Context.Provider value={contextData}>
            {props.children}
        </Context.Provider>
    )
}

export {
    Context,
    Provider
}