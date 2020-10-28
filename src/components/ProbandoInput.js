import { Button, Input, Stack, useToast } from "@chakra-ui/core";
import { useState } from "react";
import { HiCursorClick } from "react-icons/hi";

export const ProbandoInput = () => {
  const [valueInput, setValueInput] = useState("default");
  const toast = useToast();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Stack
          shadow="md"
          borderWidth="1px"
          width="fit-content"
          padding="20px"
          borderRadius="10px"
        >
          <Input
            width="400px"
            value={valueInput}
            onChange={({ target: { value } }) => {
              setValueInput(value);
            }}
          />
          <Button
            colorScheme="red"
            width="250px"
            type="submit"
            leftIcon={<HiCursorClick size="30px" />}
            onClick={() => {
              toast({
                title: valueInput,
                duration: 1000,
              });
            }}
          >
            Click me
          </Button>
        </Stack>
      </form>
    </>
  );
};
