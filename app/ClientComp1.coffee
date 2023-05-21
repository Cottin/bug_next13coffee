'use client'


export default ClientComp1 = () ->

	onClick = () ->
		console.log('click')

	<div>
		<div onClick={onClick}>ClientComp1</div>
	</div>

