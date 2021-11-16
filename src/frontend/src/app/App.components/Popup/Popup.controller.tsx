import * as PropTypes from "prop-types";
import * as React from "react";

import { PopupView } from "./Popup.view";
type PopupProps = {
    closePopup: () => void,
    open: boolean
};

export const Popup = ({ closePopup, open }: PopupProps) => {
    return <PopupView closePopup={closePopup} open={open} />;
};

Popup.propTypes = {
    closePopup: PropTypes.func,
    open: PropTypes.bool
};
