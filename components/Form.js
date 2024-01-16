"use client";
import {FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Button, Text, useToast, Checkbox} from "@chakra-ui/react";
import { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import {sendContactForm} from "../lib/api"

const initValues = {
name: "",
email: "",
role:"",
website: "",
links: "",
forum:"",
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
        <div className="flex flex-col lg:flex-row lg:gap-[20px] space-y-[20px] lg:space-y-0">
        <FormControl className="lg:w-1/2" isRequired isInvalid={touched.role && !values.role}>
            <FormLabel className="text-white">Role</FormLabel>
            <Input
            className="w-full bg-transparent"
            type="text"
            placeholder="Your Role"
            name="role"
            value={values.role}
            onChange={handleChange}
            onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl className="lg:w-1/2">
            <FormLabel className="text-white">Project Website</FormLabel>
            <Input
            className="w-full"
            type="text"
            placeholder="Your Project Website"
            name="website"
            value={values.website}
            onChange={handleChange}
            onBlur={onBlur}
            />
        </FormControl>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-[20px] space-y-[20px] lg:space-y-0">
        <FormControl className="lg:w-1/2">
            <FormLabel className="text-white">Social Media Links</FormLabel>
            <Input
            className="w-full bg-transparent"
            type="text"
            placeholder="Social Media Links"
            name="links"
            value={values.links}
            onChange={handleChange}
            onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl className="lg:w-1/2">
            <FormLabel className="text-white">Governance Forum Link</FormLabel>
            <Input
            className="w-full"
            type="text"
            placeholder="Governance Forum Link"
            name="forum"
            value={values.forum}
            onChange={handleChange}
            onBlur={onBlur}
            />
        </FormControl>
        </div>

        <FormControl isRequired isInvalid={touched.service && !values.service}>
        <FormLabel className="text-white">Services Inquiry</FormLabel>
        <Select
            className="w-full"
            name="service"
            value={values.service}
            onChange={handleChange}
            onBlur={onBlur}
        >
            <option>Operations Management Consulting Services</option>
            <option>Operations Management Consulting Services</option>
        </Select>
        <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl>
            <FormLabel className="text-white">Upload your Whitepaper</FormLabel>
            <Input
            className="file"
            type="file"></Input>
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
            isLoading={isLoading}
            isDisabled={!values.name || !values.email || !values.service || !values.message || !values.role} //Required
            onClick={onSubmit}>
            Submit
        </Button>
        </div>
    </div>
    </ChakraProvider>
);
}
