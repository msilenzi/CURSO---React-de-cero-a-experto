import { useEffect, useState } from 'react'

function Message() {
  const [cords, setCords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e) {
      const newCords = { x: e.x, y: e.y }
      console.log(newCords)
      setCords(newCords)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="form-text text-danger">
      El texto no puede estar vacío <code>{JSON.stringify(cords)}</code>
    </div>
  )
}

export default Message
