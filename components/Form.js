"use client";
import {FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Button, Text, useToast} from "@chakra-ui/react";
import { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import {sendContactForm} from "../lib/api"

const initValues = {
name: "",
email: "",
service: "",
message: "",
};

const initState = { values: initValues };

export default function Contact() {
const toast = useToast() ;
const [state, setState] = useState(initState);
const [touched, setTouched] =useState ({});

const { values, isLoading, error } = state;

const onBlur = ({target}) => setTouched((prev) => ({...prev,
[target.name]:true
}))


const handleChange = ({ target }) =>
    setState((prev) => ({
    ...prev,
    values: {
        ...prev.values,
        [target.name]: target.value,
    },
    }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading:true
        }));
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title:"Message Sent.",
                status:"success",
                duration:2000,
                position:"top",
            })
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading:false,
                error:error.message,
            }))
        }
       
    };

return (
    <ChakraProvider>
    <div className="flex flex-col lg:space-y-[50px] space-y-[20px] ">

    {error && (
        <Text color="red.300">{error}</Text>
    )}
        <div className="flex flex-col lg:flex-row lg:gap-[20px] space-y-[20px] lg:space-y-0">
        <FormControl className="lg:w-1/2" isRequired isInvalid={touched.name && !values.name}>
            <FormLabel className="text-white">Name</FormLabel>
            <Input
            className="w-full bg-transparent"
            type="text"
            placeholder="Full Name"
            name="name"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl className="lg:w-1/2" isRequired isInvalid={touched.email && !values.email}>
            <FormLabel className="text-white">Email</FormLabel>
            <Input
            className="w-full"
            type="email"
            placeholder="Your Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        </div>
        <FormControl isRequired isInvalid={touched.service && !values.service}>
        <FormLabel className="text-white">Services Enquiry</FormLabel>
        <Select
            className="w-full"
            name="service"
            value={values.service}
            onChange={handleChange}
            onBlur={onBlur}
        >
            <option value="" disabled selected>Select one...</option>
            <option>Option 1</option>
            <option>Option 2</option>
        </Select>
        <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.message && !values.message}>
        <FormLabel className="text-white">Project Summary</FormLabel>
        <Textarea
            className="w-full"
            placeholder="What's your brief"
            name="message"
            rows={10}
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <div className="flex">
        <Button
            variant="outline"
            isLoading={isLoading}
            isDisabled={!values.name || !values.email || !values.service || !values.message}
            onClick={onSubmit}>
            Submit
        </Button>
        </div>
    </div>
    </ChakraProvider>
);
}
