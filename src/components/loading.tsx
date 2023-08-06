import React, { lazy } from 'react'

const WithLoadingComponent = (component: JSX.Element) => (
    <React.Suspense fallback={(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <img src='src\assets\images\loading.gif' alt="" />
                <span>Loading...</span>
            </div>
        </div>
        )}>
        {component}
    </React.Suspense>
)

export default WithLoadingComponent