import React from "react";

function Header(){
    return(
        <div className="header">
            {/* 1st box */}
            <ul>
                <li>
                    <a>Gourmet au catering</a>
                </li>
            </ul>
            {/* 2nd box */}
            <ul>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>
                        Menu
                    </a>
                </li>
                <li>
                    <a>
                        contact
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Header;