import {Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,} from "@chakra-ui/core"
import {PhoneIcon, AddIcon, WarningIcon} from '@chakra-ui/icons'
import { Image } from "@chakra-ui/core"

import { Avatar, AvatarBadge } from "@chakra-ui/core";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/core";

 




import React from 'react';
import { Heading, Stack } from "@chakra-ui/core";

const Login = () =>{
    return (
        <Stack direction="row" spacing="45px" padding="5px" margin="10px" border="1px solid blue"> 
        <Heading> El mismisimo </Heading>
        
        <Breadcrumb>
        <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
            <BreadcrumbLink href="#">Docum</BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
        
        <Accordion width="500px">
        <AccordionItem>
            <AccordionButton>
            <Box flex="1" textAlign="right" border="1px solid black" bg="tomato" w="100%" p={4} color="white">
                Perro
            </Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel 
            pb={4} 
            border="1px solid blue" 
            borderRadius="11px"
            >
            Soy un perro
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <AccordionButton>
            <Box flex="1" textAlign="left">
                Gato
            </Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            Soy un gato
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
        <Heading> Ola</Heading>

        <Stack isInline>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        </Stack>

       


        <PhoneIcon />
        <AddIcon boxSize={6} />
        <WarningIcon boxSize={8} color="purple.500" />
        <img boxSize="100px" objectFit="cover" src = "https://media1.tenor.com/images/1acd5803a53315fb8a6c3c1a76e33b3a/tenor.gif?itemid=17798728" alt="pato"></img>



        </Stack>
    );
}




export default Login;
