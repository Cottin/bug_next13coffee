```
'use client';
 

export default function ClientComp3() {

  const onClick = () => {
    console.log('click')
  }

  return (
    <div>
      <div onClick={onClick}>ClientComp3</div>
    </div>
  )
}
```