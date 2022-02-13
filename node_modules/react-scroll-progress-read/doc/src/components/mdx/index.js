import React from "react"

import ScrollProgressRead from "react-scroll-progress-read"

import ContainerRef from "../ContainerRef"
import ContainerID from "../ContainerID"
import Container from "../Container"
import Link from "../Link"

import Paragraph from "./Paragraph"
import H2 from "./H2"
import H3 from "./H3"

export const MDXLayoutComponents = {
  p: props => <Paragraph {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
}

export const MDXGlobalComponents = {
  Link,
  ScrollProgressRead,
  ContainerRef,
  ContainerID,
  Container,
}
