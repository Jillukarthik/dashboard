import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Box,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      // Set loading state to true
      setLoading(true);
      setTimeout(() => {
        console.log(data);

        // Store user login status in localStorage
        localStorage.setItem("isLoggedIn", "true");

        //storing name for showing
        localStorage.setItem("email",data?.email)
        setLoading(false);
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  // Use useColorModeValue to set colorScheme based on light/dark mode
  const buttonColorScheme = useColorModeValue("teal", "purple");
  const labelColor = useColorModeValue("gray.600", "black");
  const inputField = useColorModeValue("black", "black");

  return (
    <Center
      h="100vh"
      bgGradient={[
        "linear(to-tr, teal.300, yellow.400)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
    >
      <Box
        w={{ base: "80%", sm: "60%", md: "40%" }}
        p="6"
        boxShadow="md"
        rounded="md"
        bgColor={"white"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="4">
            <FormControl isInvalid={errors.email}>
              <FormLabel color={labelColor}>Email</FormLabel>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                color={inputField}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password}>
              <FormLabel color={labelColor}>Password</FormLabel>
              <Input
                {...register("password", { required: "Password is required" })}
                type="password"
                color={inputField}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              colorScheme={buttonColorScheme}
              mt="4"
              w="100%"
              isLoading={isSubmitting || loading}
              spinner={<BeatLoader size={8} color="white" />}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
