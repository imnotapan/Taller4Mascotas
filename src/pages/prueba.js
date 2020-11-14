import {Heading, Stack, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, Flex} from "@chakra-ui/core";
import { useState } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import { HiCursorClick } from "react-icons/hi";
import { Navigation } from "../components/Navigation";

export default () => {

    const [checkedItems, setCheckedItems] = React.useState([false, false]);

    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

    const [ isVisible, setIsVisible] = useState(true);
    return (
    <Navigation>
        <Heading border="3px solid orange" width="500px">Sirugia</Heading>
        <Accordion width="1000px" border="3px solid orange" hidden={!isVisible} defaultIndex={[0]} allowMultiple >
            <AccordionItem>
                <AccordionButton>
                <Box flex="1" textAlign="left">
                    Vaca
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                <img src = "https://www.gifsanimados.org/data/media/211/vaca-imagen-animada-0277.gif" alt="Vaca"></img>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                <Box flex="1" textAlign="left">
                    Perro
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                <img src = "https://media1.tenor.com/images/bb58375a91f5e1222affc155715fd19e/tenor.gif" alt="Perro"></img>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionButton>
                <Box flex="1" textAlign="left">
                    Pato
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                <img src = "https://media1.tenor.com/images/1acd5803a53315fb8a6c3c1a76e33b3a/tenor.gif?itemid=17798728" alt="pato"></img>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        
        
        <Button 
            width="500px"
            leftIcon={<HiCursorClick size="30px" />} 
            onClick={() =>{
                setIsVisible(!isVisible);
            }}
            colorScheme={isVisible ? "red" : "blue"}
        >
            {isVisible ? "Ocultar" : "Mostrar"}
        </Button>


        <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
        children="Fugit"
        />
        <Stack pl={6} mt={1} spacing={1}>
            <Checkbox
            isChecked={checkedItems[0]}
            onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
            children="Alcoholico"
            />
            <Checkbox
            isChecked={checkedItems[1]}
            onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
            children="Bello"
            />
            <Checkbox
            isChecked={checkedItems[1]}
            onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
            children="Precioso"
            />
        </Stack>

    </Navigation>
    
    );   
}