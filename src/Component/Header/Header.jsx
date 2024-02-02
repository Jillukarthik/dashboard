import React, { useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { FaSun, FaMoon, FaUserCircle } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate()
  const { toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue('gray.600', 'gray.300');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLogoutAlertOpen, setIsLogoutAlertOpen] = useState(false);

  const onLogout = () => {
    localStorage.setItem("isLoggedIn",false)
    navigate('/')
    setIsLogoutAlertOpen(false);
  };

  const toggleMode = () => {
    toggleColorMode();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box as="header" bg={useColorModeValue('gray.300', 'gray.1000')} h="50px" w="100%" boxShadow="sm">
      <Flex align="center" h="100%" padding={{ base: '0.5rem', md: '1rem' }}>
        <Box>
        <span style={{ fontWeight: 'bold', fontSize: { base: '20px', md: '30px' } }}>Analytics dashboard</span>
        </Box>
        <Spacer />
        {/* Dark/Light Mode Toggle */}
        <IconButton
          aria-label="Toggle Dark/Light Mode"
          icon={isDarkMode ? <FaSun /> : <FaMoon />}
          onClick={toggleMode}
          color={iconColor}
          variant="ghost"
        />

        {/* Profile Button with Popover */}
        <Popover>
          <PopoverTrigger>
            <Button
              leftIcon={<FaUserCircle />}
              color={useColorModeValue('gray.600', 'gray.300')}
              variant="ghost"
            >
              Profile
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>{localStorage.getItem('email')}</PopoverHeader>
            <PopoverBody>
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => setIsLogoutAlertOpen(true)}
              >
                Logout
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        {/* Logout Confirmation AlertDialog */}
        <AlertDialog
          isOpen={isLogoutAlertOpen}
          onClose={() => setIsLogoutAlertOpen(false)}
          leastDestructiveRef={undefined}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Logout
              </AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                Are you sure you want to log out?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={() => setIsLogoutAlertOpen(false)}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={onLogout} ml={3}>
                  Logout
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Flex>
    </Box>
  );
};

export default Header;
