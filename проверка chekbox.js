inputs=document.getElementsByTagName("input");
for(var i=0;i<inputs.length;i++)
	{
	if(inputs[i].type=="checkbox")
		{
		inputs[i].onchange=function()
			{
			inputs=document.getElementsByTagName("input");
			for(var i=0;i<inputs.length;i++)
				{
				if(inputs[i].type=="checkbox")
					{
					inputs[i].checked=false;
					}
					this.checked=true;
				}
			}
		}
	}

	
	
	