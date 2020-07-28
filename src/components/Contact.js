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
    // https://tcampb.github.io/react-calendly/?path=/story/components--inlinewidget&knob-url=https://calendly.com/thisdudecodes&knob-styles={"height":"400px"}&knob-prefill={"name":"Jon Snow","firstName":"Jon","lastName":"Snow","email":"test@test.com","customAnswers":{"a1":"a1","a2":"a2","a3":"a3","a4":"a4","a5":"a5","a6":"a6","a7":"a7","a8":"a8","a9":"a9","a10":"a10"}}&knob-utm={"utmCampaign":"Spring Sale 2019","utmSource":"Facebook","utmMedium":"Ad","utmContent":"Shoe and Shirts","utmTerm":"Spring"}&knob-pageSettings={"backgroundColor":"1f1f1f","hideEventTypeDetails":false,"hideLandingPageDetails":false,"primaryColor":"6987c9","textColor":"ebebeb"}
  )
}

export default Contact