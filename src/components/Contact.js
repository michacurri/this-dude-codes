import React, { Fragment } from 'react'
import { InlineWidget} from "react-calendly"

const Contact = () => {
  return(
    <Fragment>
    <h2>contact</h2>
    <InlineWidget
    color="1f1f1f"
    hideEventTypeDetails="false"
    hideLandingPageDetails="false"
    primaryColo="6987c9"
    textColor="ebebeb"
    height="400px"
    url="https://calendly.com/thisdudecodes"
    />
    </Fragment>
  )
}

export default Contact