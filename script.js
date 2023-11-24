const extendHex = (shortHex) => {
  // write your code here
	let str=""
	for(let i=0;i<shortHex.lenght;i++)
		{
			if(charAt(i)>='a'&&charAt(i)<='z')
			{
				str=str+charAt(i)+charAt(i);
				
			}
			else
			{}
		}
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
