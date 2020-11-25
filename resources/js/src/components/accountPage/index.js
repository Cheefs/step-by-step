import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { SidePanel } from "./sidePanel";
import { User } from "../../models/User";

export function AccountPage( props ) {
    const { navList, isAuthorized, user } = props;
    const [ activeItem, setActiveItem ] = useState( navList[ 0 ].id || 0 );

    if ( !isAuthorized ) {
        return <Redirect to={ '/' } />;
    }

    return (
        <Fragment>
            <div>
            {/*   @todo place for -> return to main page button  */}
            </div>
            {/* @todo Убрать инлайн стили когда будем собирать страницу */}
            <div className="content-grid" style={{ display: 'grid', height: '100%' }}>
                <SidePanel
                    selectedId={ activeItem }
                    user={ user }
                    navItems={ navList }
                    onSelect={ setActiveItem }
                />
            </div>
        </Fragment>
    );
}

AccountPage.propTypes = {
    user: PropTypes.instanceOf( User ),
    isAuthorized: PropTypes.bool.isRequired,
    navList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            icon:  PropTypes.any.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
}
