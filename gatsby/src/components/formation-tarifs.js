import React from 'react'

const TarifRow = ({ label, description }) => (
  <tr>
    <td>{label} : </td>
    <td>{description}</td>
  </tr>
)

export default props => (
  <React.Fragment>
    <header className="major">
      <h3>Tarifs</h3>
    </header>
    <div className="table-wrapper">
      <table className="alt">
        <tbody>
          {props.tarifs.map((tarif, index) => (
            <TarifRow key={index} {...tarif} />
          ))}
        </tbody>
      </table>
    </div>
  </React.Fragment>
)
