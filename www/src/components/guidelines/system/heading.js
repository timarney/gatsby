import styled from "@emotion/styled"

import Text from "./text"

const Heading = styled(Text)()

Heading.defaultProps = {
  as: `h1`,
  color: `grey.90`,
  fontSize: 7,
  lineHeight: `dense`,
  letterSpacing: `tight`,
  m: 0,
}

export default Heading
