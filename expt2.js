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
				document.f1.A11.value = i1.toPrecision(5);
				document.f1.A12.value = i2.toPrecision(5);
				document.f1.A13.value = i3.toPrecision(5);
			
			
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
		if (s1==1 && s2==2)
		{
			 document.getElementById("diagram").src = "images/case2.png";
				document.f1.A1.value = i11.toPrecision(5);
			document.f1.A2.value = i12.toPrecision(5);
			document.f1.A3.value = i13.toPrecision(5);
			document.f1.A21.value = i11.toPrecision(5);
			document.f1.A22.value = i12.toPrecision(5);
			document.f1.A23.value = i13.toPrecision(5);
			
			
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
				document.f1.A31.value = i21.toPrecision(5);
				document.f1.A32.value = i22.toPrecision(5);
				document.f1.A33.value = i23.toPrecision(5);
					
			}
		else
		{
			alert("Please select S1 to Short and S2 to Power for case 3.");
		}
	}

        function perform4()
        {
          var A11=document.f1.A11.value;
            var A12=document.f1.A12.value;
            var A13=document.f1.A13.value;
            var A21=document.f1.A21.value;
            var A22=document.f1.A22.value;
            var A23=document.f1.A23.value;
            var A31=document.f1.A31.value;
            var A32=document.f1.A32.value;
            var A33=document.f1.A33.value;
           

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
            td1.innerHTML=A11;
            td2.innerHTML=A12;
            td3.innerHTML=A13;
            td4.innerHTML=A21;
            td5.innerHTML=A22;
            td6.innerHTML=A23;
            td7.innerHTML=A31;
            td8.innerHTML=A32;
            td9.innerHTML=A33;
            
            document.getElementById("tb1").appendChild(tr);

        }
        function delStudent(Stud){
            var s=Stud.parentNode.parentNode;
            s.parentNode.removeChild(s);                  
        }
		function divContentChange(caseNumber){
			console.log(caseNumber)
		
			// var contentDiv = document.getElementById('contentDiv')
		
			var headerCase1 = document.getElementById('headerCase1')
			var subheaderCase1 = document.getElementById('subheaderCase1')

			var headerCase2 = document.getElementById('headerCase2')
			var subheaderCase2 = document.getElementById('subheaderCase2')

			var headerCase3 = document.getElementById('headerCase3')
			var subheaderCase3 = document.getElementById('subheaderCase3')
			
		
			if(caseNumber == 1){
				headerCase1.textContent = "Determination of branch currents in presence of V and I :"
				subheaderCase1.textContent = "Select the switch S1 and S2 to power. And then click on Simulate."
				element1 = document.getElementById('tab-content1')
				element2 = document.getElementById('tab-content2')
				element3 = document.getElementById('tab-content3')
				element1.style.visibility = 'visible';
				element2.style.visibility = 'hidden';
				element3.style.visibility = 'hidden';
				//case1
				return
			}
			else if(caseNumber == 2){
				headerCase2.textContent = "Determination of branch currents in presence of V only :"
				subheaderCase2.textContent = "Select the switch S1 and S2 to Open. And then click on Simulate."
				element1 = document.getElementById('tab-content1')
				element2 = document.getElementById('tab-content2')
				element3 = document.getElementById('tab-content3')
				element1.style.visibility = 'hidden';
				element2.style.visibility = 'visible';
				element3.style.visibility = 'hidden';
				//case2
				return
			}
			else if(caseNumber == 3){
				headerCase3.textContent = "Determination of branch currents in presence of I only :"
				subheaderCase3.textContent = "Select the switch S1 to Short and S2 to power. And then click on Simulate."
				element1 = document.getElementById('tab-content1')
				element2 = document.getElementById('tab-content2')
				element3 = document.getElementById('tab-content3')
				element1.style.visibility = 'hidden';
				element2.style.visibility = 'hidden';
				element3.style.visibility = 'visible';
				return
				//case3
			}
			
		
		}
