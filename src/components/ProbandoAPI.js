import { Button, Text, useToast } from "@chakra-ui/core";
import Axios from "axios";
import { useState } from "react";
import { MdHttp } from "react-icons/md";
export const ProbandoAPI = () => {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  return (
    <>
      {apiData ? <Text>{apiData}</Text> : null}
      <Button
        width="250px"
        isLoading={isLoading}
        leftIcon={<MdHttp size="30px" />}
        onClick={async () => {
          setIsLoading(true);

          const { data } = await Axios.post("/api/hello_world");
          setIsLoading(false);

          setApiData(data);

          toast({
            status: "success",
            title: data,
            isClosable: true,
          });
        }}
        colorScheme="teal"
      >
        Request to API
      </Button>
    </>
  );
};
