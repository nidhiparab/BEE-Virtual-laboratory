var count=0;
var i1,i2,i3,i12,i12,i13,i21,i22,i23;
var c1=0;
var c2=0;
var c3=0;
var dr1,dr2,dr3,dr4,dr5,dr6,dr7,dr8,dr9;
function perform1()
	{
		var r1,r2,r3,v1,v2,s1,s2;
		var flag=0;
r1=parseFloat(document.getElementById('r1').value);
r2=parseFloat(document.getElementById('r2').value);
r3=parseFloat(document.getElementById('r3').value);
v1=parseFloat(document.getElementById('v1').value);
v2=parseFloat(document.getElementById('v2').value);
s1=parseFloat(document.getElementById('s1').value);
s2=parseFloat(document.getElementById('s2').value);
		if (s1==1 && s2==1){
		 document.getElementById("diagram").src = "images/case1.png";
			c1=1;
			i11 = v1/(r1+r3);
			i12 = 0;
			i13 = i11;
			i22 = v2;
			i23 = v2*(r1/(r1+r3));
			i21 = (v2-i23)*(-1);
			i1 = i11 + i21;
			i2 = i12 + i22;
			i3 = i13 + i23;
			
				document.f1.A1.value = i1.toPrecision(5);
				document.f1.A2.value = i2.toPrecision(5);
				document.f1.A3.value = i3.toPrecision(5);
				document.f1.A01.value = i1.toPrecision(5);
				document.f1.A02.value = i2.toPrecision(5);
				document.f1.A03.value = i3.toPrecision(5);

				
			
			
		}
		else
		{
			alert("Please select both S1 and S2 to power for case 1.");
		}
	}
function perform2()	{
var r1,r2,r3,v1,v2,rl1,s1,s2;
r1=parseFloat(document.getElementById('r1').value);
r2=parseFloat(document.getElementById('r2').value);
r3=parseFloat(document.getElementById('r3').value);
v1=parseFloat(document.getElementById('v1').value);
v2=parseFloat(document.getElementById('v2').value);
s1=parseFloat(document.getElementById('s1').value);
s2=parseFloat(document.getElementById('s2').value);
		if (s1==1 && s2==3)
		{
			 document.getElementById("diagram").src = "images/case2.png";
				document.f1.A1.value = i11.toPrecision(5);
			document.f1.A2.value = i12.toPrecision(5);
			document.f1.A3.value = i13.toPrecision(5);
			document.f1.A01.value = i11.toPrecision(5);
			document.f1.A02.value = i12.toPrecision(5);
			document.f1.A03.value = i13.toPrecision(5);
			
		
			
			
		}
		else
		{
			alert("Please select S1 to Power and S2 to Short for case 2.");
		}
	}
function perform3(){	
var r1,r2,r3,v1,v2,rl1,s1,s2;
r1=parseFloat(document.getElementById('r1').value);
r2=parseFloat(document.getElementById('r2').value);
r3=parseFloat(document.getElementById('r3').value);
v1=parseFloat(document.getElementById('v1').value);
v2=parseFloat(document.getElementById('v2').value);
s1=parseFloat(document.getElementById('s1').value);
s2=parseFloat(document.getElementById('s2').value);
		if (s1==2 && s2==1)
		{
			 document.getElementById("diagram").src = "images/case3.png";
		        c3=1;
				document.f1.A1.value = i21.toPrecision(5);
				document.f1.A2.value = i22.toPrecision(5);
				document.f1.A3.value = i23.toPrecision(5);
				document.f1.A01.value = i21.toPrecision(5);
				document.f1.A02.value = i22.toPrecision(5);
				document.f1.A03.value = i23.toPrecision(5);
				
					
			}
		else
		{
			alert("Please select S1 to Short and S2 to Power for case 3.");
		}
	}

        function perform4()
        {         

            var tr= document.createElement("tr");
            var td1=tr.appendChild(document.createElement("td"));
            var td2=tr.appendChild(document.createElement("td"));
            var td3=tr.appendChild(document.createElement("td"));
            var td4=tr.appendChild(document.createElement("td"));
            var td5=tr.appendChild(document.createElement("td"));
            var td6=tr.appendChild(document.createElement("td"));
            var td7=tr.appendChild(document.createElement("td"));
            var td8=tr.appendChild(document.createElement("td"));
            var td9=tr.appendChild(document.createElement("td"));
            td1.innerHTML=i1.toPrecision(5)
            td2.innerHTML=i2.toPrecision(5)
            td3.innerHTML=i3.toPrecision(5)
            td4.innerHTML=i11.toPrecision(5)
            td5.innerHTML=i12.toPrecision(5)
            td6.innerHTML=i13.toPrecision(5)
            td7.innerHTML=i21.toPrecision(5);
            td8.innerHTML=i22.toPrecision(5);
            td9.innerHTML=i23.toPrecision(5);
            
            document.getElementById("tb1").appendChild(tr);

        }


        function delStudent(Stud){
            var s=Stud.parentNode.parentNode;
            s.parentNode.removeChild(s);                  
        }

		var caseTest = 1;

		function divContentChange(caseNumber){
			console.log(caseNumber)
			caseTest = caseNumber
		
			// var contentDiv = document.getElementById('contentDiv')
		
			var headerCase = document.getElementById('headerCase')
			var subheaderCase = document.getElementById('subheaderCase')

		
			if(caseNumber == 1){
				headerCase.textContent = "Determination of branch currents in presence of V and I :"
				subheaderCase.textContent = "Select the switch S1 and S2 to power. And then click on Simulate."
				//case1
				return
			}
			else if(caseNumber == 2){
				headerCase.textContent = "Determination of branch currents in presence of V only :"
				subheaderCase.textContent = "Select the switch S1 and S2 to Open. And then click on Simulate."
				//case2
				return
			}
			else if(caseNumber == 3){
				document.getElementById('case3Btn').style.display = "block"
				headerCase.textContent = "Determination of branch currents in presence of I only :"
				subheaderCase.textContent = "Select the switch S1 to Short and S2 to power. And then click on Simulate."
				return
				//case3
			}
			
		
		}

		function simulate(){
			if(caseTest == 1)
				perform1()
			else if(caseTest == 2)
				perform2()
			else
				perform3()
		}


function picChange(circuitCon){
	if(circuitCon == 2)
		document.getElementById("diagram").src = "images/case3.png";
	else if(circuitCon == 3)
		document.getElementById("diagram").src = "images/case2.png";
	else
		document.getElementById("diagram").src = "images/case1.png";
}