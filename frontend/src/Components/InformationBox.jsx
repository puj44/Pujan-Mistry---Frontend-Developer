import React from 'react'

export default function InformationBox() {
  return (
    <table className="flex-row justify-center" style={{display:"flex"}}>
        <tbody>

        <tr>
            <td className="align-top">
                <img
                  src={'/images/info-box-image.svg'}
                  className="info-box-image p-0"
                  alt="rocket"
                />
            </td>
            <td className="info-box">
                <span className="number-label">237</span>
                <span className="text-label">TOTAL LAUNCHES</span>
            </td>
        </tr>
        <tr >
            <td >
                <div className="info-box">
                    <span className="number-label">196</span>
                    <span className="text-label">TOTAL LANDINGS</span>
                </div>
            </td>
            <td >
                <div className="info-box">
                    <span className="number-label">171</span>
                    <span className="text-label">TOTAL REFLIGHTS</span>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
  )
}
