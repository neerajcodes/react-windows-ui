import React from 'react'

const Alert = (props) => {

  const setThemeLight = () => {
    return props.setTheme === 'system' ? 'light' : '';
  }

  return (
    <>
    <div
      className={ props.isVisible ? "app-dim-overlay show" : "app-dim-overlay" }
      style={props.isVisible ? { visibility: "visible"} : { visibility : "hidden" }}
      onClick={props.onBackdropPress}>
    </div>
    <div
      className={
          props.isVisible ?
          `app-alert show ${setThemeLight()}`
        : `app-alert ${setThemeLight()}`
      }>
        <h1>{props.title}</h1>
        <div className="alert-message">{props.message}</div>
        <div className="btn-container">
          {props.children}
        </div>
    </div>
    </>
  )
}

Alert.defaultProps = {
  isVisible: false
}

export default Alert;