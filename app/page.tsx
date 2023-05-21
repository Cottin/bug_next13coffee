import ClientComp1 from './ClientComp1'
import ClientComp2 from './ClientComp2'
import ClientComp3 from './ClientComp3'
import ClientComp4 from './ClientComp4'

export default function Home() {
  return (
    <div>
      <div>Page</div>
      <div>CoffeeScript file not recognized for 'use client':</div>
      <ClientComp1 />

      <div>JS file works as expected:</div>
      {/*<ClientComp2 />*/}

      <div>CoffeeScript file with embeded javascript has same problem:</div>
      {/*<ClientComp3 />*/}

      <div>CoffeeScript file not using any client side functionality works:</div>
      {/*<ClientComp4 />*/}
    </div>
  )
}
