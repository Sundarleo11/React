import React, { Fragment } from "react";


function name(prpos) {
    return <Fragment>
        <h2 className='name'>FirstName : {prpos.firstname}</h2>
        <h2 className='name'>LastName : {prpos.lastname}</h2>

    </Fragment>
}

export default name;
