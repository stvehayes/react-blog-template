import React from "react"
import ScrollProgressRead from "react-scroll-progress-read"

const initialState = {
  backgroundColor: "#CCC",
  barColor: "red",
  height: "10px",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const Container = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const update = e => {
    const { name, value } = e.currentTarget
    const payload = { [name]: value }
    dispatch({ type: "update", payload })
  }
  return (
    <>
      <div
        style={{ margin: 0, padding: 0, position: "fixed", left: 0, top: 0 }}
      >
        <ScrollProgressRead {...state} />
      </div>
      <h3>Change props with select</h3>
      <div>
        <select onChange={update} name="barColor">
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="orange">orange</option>
        </select>
        <select onChange={update} name="backgroundColor">
          <option value="grey">grey</option>
          <option value="gold">gold</option>
          <option value="#AAA">#AAA</option>
        </select>
        <select onChange={update} name="height">
          <option value="1px">1px</option>
          <option value="5px">5px</option>
          <option value="10px">10px</option>
          <option value="15px">15px</option>
          <option value="20px">20px</option>
        </select>
        <br />
        <br />
      </div>
      <p id="read-container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
        faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
        qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
        quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
        me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
        igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
      </p>
    </>
  )
}

export default Container
