import React from 'react';

function ButtonLink(props) {
    return(
        <a href={props.href} className={props.className}>
            Novo vídeos
        </a>
    )
}

export default ButtonLink;