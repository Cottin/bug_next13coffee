'use client'
 

export default function ClientComp2() {

  const onClick = () => {
    console.log('click')
  }

  return (
    <div>
      <div onClick={onClick}>ClientComp2</div>
    </div>
  )
}

