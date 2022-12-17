import MetaTags from 'react-meta-tags';
import React from "react"

const MetaTagComp = ({ title_sco }) => {
    return (
        <div>
            <MetaTags> <title> {title_sco} </title> </MetaTags>
        </div>
    )
}

export default MetaTagComp
