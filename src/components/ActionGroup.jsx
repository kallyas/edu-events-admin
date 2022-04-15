import React, { useState } from 'react'
import { IconDots } from '@tabler/icons'

const ActionGroup = () => {
    const [expand, setExpand] = useState(false);
    const handleClick = () => { setExpand(!expand); }

    return (
        <div className="btn-list flex-nowrap">
            <div className="dropdown">
                <span className={`align-text-top ${expand ? 'show' : ''}`} onClick={handleClick} data-bs-toggle="dropdown" aria-expanded={expand}>
                    <IconDots />
                </span>
                <div className={`dropdown-menu dropdown-menu-end show-left ${expand ? 'show' : ''}`}>
                    <a className="dropdown-item" onClick={handleClick} href="#/">
                        Edit
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" onClick={handleClick} href="#/">
                        Delete
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" onClick={handleClick} href="#/">
                        View
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ActionGroup