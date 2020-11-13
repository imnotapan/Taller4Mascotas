import { Box, Tab, TabList, Tabs, Stack } from "@chakra-ui/core";
import { useRouter } from "next/router";

const routes =[{
    path: "/prueba",
    text: "Prueba"
},{
    path: "/prueba2",
    text: "Prueba 2"
}]

export const Navigation = ({children}) =>{
    const { push, pathname} = useRouter();
    return (
    <Stack>
        <Tabs index = {routes.findIndex(ruta => ruta.path === pathname)} alignSelf="center">
            <TabList>
                {routes.map(ruta => {
                    return <Tab
                    key={ruta.path}
                    onClick={() => {
                        push(ruta.path)
                    }}
                    >
                        {ruta.text}
                    </Tab>
                })}
                
            </TabList>
        </Tabs>
        {children}
    </Stack>
    );
};