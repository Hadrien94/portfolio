import {
  Stack,
  Text,
  useColorModeValue,
  Box,
  chakra,
  Link as ChakraLink,
  Icon,
  Tooltip,
  Flex,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useQuery } from 'react-query';
import { BsPauseFill } from 'react-icons/bs';
import SocialIcons from './SocialIcons';

const Footer = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const { error, data: currentlyPlaying } = useQuery(
    `currentlyPlaying`,
    () => fetch(`/api/get-now-playing`).then((res) => res.json()),
    { refetchOnMount: true }
  );

  return (
    <Box
      bg={useColorModeValue(`gray.50`, `gray.900`)}
      color={useColorModeValue(`gray.700`, `gray.200`)}
    >
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gridTemplate={{ base: `1fr`, md: `1fr 1fr 1fr` }}
        mx="auto"
        maxW="7xl"
        py={4}
        px={5}
        spacing={4}
        align="center"
      >
        <Flex
          direction="row"
          maxW="full"
          mx={{ base: `auto`, md: 5 }}
          alignItems="center"
        >
          {currentlyPlaying?.isPlaying ? (
            <Icon h={4} w={4} viewBox="0 0 168 168" color="brand.500">
              <path
                fill="currentColor"
                d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
              />
            </Icon>
          ) : (
            <Icon color="brand.500" boxSize="1.4em" as={BsPauseFill} />
          )}

          <Flex ml={2} isTruncated>
            {currentlyPlaying?.songUrl ? (
              <chakra.a
                color={colorMode === 'light' ? `gray.900` : `gray.200`}
                fontSize="md"
                fontWeight="semibold"
                maxW="60%"
                isTruncated
                href={currentlyPlaying.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentlyPlaying.name}
              </chakra.a>
            ) : (
              <chakra.p
                color={colorMode === 'light' ? `gray.900` : `gray.200`}
                fontSize="md"
                maxW="60%"
                isTruncated
                fontWeight="semibold"
              >
                {error ? `There was an error` : `Not Playing`}
              </chakra.p>
            )}
            <chakra.span
              mx={2}
              color={useColorModeValue(`gray.600`, `gray.300`)}
              display={{ base: `hidden`, sm: `block` }}
            >
              {` – `}
            </chakra.span>
            <chakra.p color="gray.600" isTruncated maxW="full">
              {currentlyPlaying?.artist ?? `Spotify`}
            </chakra.p>
          </Flex>
        </Flex>
        <Text display="flex" alignSelf="center" mx="auto">
          Built with:
          <Tooltip label="NextJS">
            <ChakraLink href="https://nextjs.org/" display="flex">
              <Icon
                color={useColorModeValue(`gray.800`, `white`)}
                viewBox="0 0 256 256"
                my="auto"
                mx={1}
                alignSelf="center"
              >
                <path
                  d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                  fill="currentColor"
                />
              </Icon>
            </ChakraLink>
          </Tooltip>
          /
          <Tooltip label="TypeScript">
            <ChakraLink href="https://www.typescriptlang.org/" display="flex">
              <Icon
                color={useColorModeValue(`gray.800`, `white`)}
                viewBox="0 0 512 512"
                my="auto"
                mx={1}
                alignSelf="center"
              >
                <rect fill="currentColor" height="512" rx="50" width="512" />
                <rect fill="currentColor" height="512" rx="50" width="512" />
                <path
                  d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
                  fill={useColorModeValue(`white`, `gray.800`)}
                />
              </Icon>
            </ChakraLink>
          </Tooltip>
          /
          <Tooltip label="Chakra-UI">
            <ChakraLink href="https://chakra-ui.com/" display="flex">
              <Icon
                color={useColorModeValue(`gray.800`, `white`)}
                viewBox="0 0 256 256"
                my="auto"
                mx={1}
                alignSelf="center"
              >
                <rect width="256" height="256" rx="128.5" fill="currentColor" />
                <path
                  d="M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z"
                  fill={useColorModeValue(`white`, `gray.800`)}
                />
              </Icon>
            </ChakraLink>
          </Tooltip>
        </Text>
        <Stack
          direction="row"
          spacing={6}
          ml="auto"
          mr={{ base: `auto`, md: 5 }}
        >
          <SocialIcons label="GitHub" href="https://github.com/mah51/">
            <FaGithub />
          </SocialIcons>
          <SocialIcons
            label="LinkedIn"
            href="https://www.linkedin.com/in/michael-hall-86616b17b/"
          >
            <FaLinkedin />
          </SocialIcons>

          <SocialIcons label="Email" href="mailto:michael.hall17@icloud.com">
            <HiOutlineMail />
          </SocialIcons>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
export default Footer;
