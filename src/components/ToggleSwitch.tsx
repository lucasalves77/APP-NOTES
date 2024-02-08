import './ToggleSwitch.css'

export function ToggleSwitch() {
  return (
    <>
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider"></span>
      </label>
    </>
  )
}

