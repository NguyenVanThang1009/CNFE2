import React from 'react'

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    // ĐÃ SỬA: Dùng thẻ <button> viết thường và sửa lại cú pháp `${...}`
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  )
}

export default Button;