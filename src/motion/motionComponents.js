import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  WrapItem,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const MotionHStack = motion(HStack)
export const MotionStack = motion(Stack)
export const MotionBox = motion(Box)
export const MotionHeading = motion(Heading)
export const MotionText = motion(Text)
export const MotionImage = motion(Image)
export const MotionLink = motion(Link)
export const MotionButton = motion(Button)
export const MotionWrapItem = motion(WrapItem)
