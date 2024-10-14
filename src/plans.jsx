import React from 'react'
import Ani from './animation button'

function Plans() {
 
  return (
    <div className='table-box'>
      <div className='table-heding'>
        <h1>Pick the plan that works best for you</h1>
      </div>
      <div className='table-planig'>
      <table>
  <tr >
  <th><h2>Pricing and Features</h2></th>
  <th><img className='N-ni' src="src\nitro-assets\Nitro.png" alt="" /></th>
  <th><img className='N-basic' src="src\nitro-assets\N.png" alt="" /></th>
  </tr>
 <tr>
  <td>Price</td>
  <td>$2.99/month</td>
  <td>$9.99/month</td>
  </tr>
  <tr>
  <td>Custom emoji anywhere and make them animated</td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  </tr>
  <tr>
  <td>Custom stickers anywhere plus 300+ Nitro exclusives</td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  </tr>
  <tr>
  <td>Custom App Icons</td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  
  <Ani/>

</tr>
  <tr>
  <td>Super Reactions
  </td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  </tr>
  <tr>
  <td>Bigger file sharing</td>
  <td>50MB</td>
  <td>500MB</td>
  </tr>
  <tr>
  <td>HD streaming</td>
  <td>  <img src="src\nitro-assets\icons8-close-24.png" alt="" /></td>
  <td>UP To 4K and 60fps</td>
  </tr>
  <tr>
  <td>2 Boosts + 30% off extra Boosts</td>
  <td>  <img src="src\nitro-assets\icons8-close-24.png" alt="" />
  </td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  </tr>
  <tr>
  <td>Animated avatar, banner, and profile theme</td>
  <td>  <img src="src\nitro-assets\icons8-close-24.png" alt="" />
  </td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  </tr>
  <tr>
  <td>Custom server profiles</td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
 </tr>
  <tr>
  <td>Join up to 200 servers</td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
 </tr>
  <tr>
  <td>Longer messages up to 4000 characters</td>
  <td> <img src="src\nitro-assets\icons8-close-24.png" alt="" /></td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  </tr>
  <tr>
  <td>3 Nitro friend passes</td>
  <td>  <img src="src\nitro-assets\icons8-close-24.png" alt="" /></td>
  <td><img src="src\nitro-assets\icons8-tick-mark-24.png" alt="" /></td>
  </tr>
</table>
      </div>
      <div className='frog-frame'>
         <img className='frog-img' src="src\nitro-assets\frog.svg" alt="" />
      </div>
    </div>
  )
}


export default Plans



