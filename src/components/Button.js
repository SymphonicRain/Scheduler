import React from "react";

import "components/Button.scss";
import classNames from "classnames";


export default function Button(props) {
   const buttonClass = classNames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger
    });

   // classNames("button", {confirm: false}, {danger:false}, {disabled:false}, {onClick: true})
   // if (props.confirm) {
   //   buttonClass += " button--confirm";
   // }
   // if (props.danger) {
   //    buttonClass += " button--danger";
   //  }
    return (
      <button
        className={buttonClass}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
}
