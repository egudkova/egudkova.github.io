alert("Квадратное уравнение ax^2+bx+c");
var a = prompt ("Введите значения a", " ");
var b = prompt ("Введите значения b", " ");
var c = prompt ("Введите значения c", " ");
Diskr = (b*b)-(4*a*c);
if (c != 0 && a != 0 && b != 0)
{	
if (Diskr > 0)
		{
			x1 = (-b + Math.sqrt(Diskr))/2*a;
			x2 = (-b - Math.sqrt(Diskr))/2*a;
			document.write("x1 = ",x1 );
			document.write(" x2 = ",x2 );;
		}
	else if (Diskr == 0)
		{
			x1 = (-b/2*a);
			document.write("x1 = ",x1 );
		
		}
	else if (Diskr < 0)
		{
			Diskr = Math.abs(Diskr);
			x1 = miss*b + "/" + 2*a + "+" + Diskr**(1/2) + "*i" + "/" + 2*a;
			x2 = miss*b + "/" + 2*a + "-" + Diskr**(1/2) + "*i" + "/" + 2*a;
			document.write("x1 = ",x1 );
			document.write(" x2 = ",x2 );
		}
}

 if (c == 0)
{
	if (Diskr > 0)
		{
			x1 = (-b + Math.sqrt(Diskr))/2*a;
			x2 = (-b - Math.sqrt(Diskr))/2*a;
			document.write("x1 = ",x1 );
			document.write(" x2 = ",x2 );
	
		}
	else if (Diskr == 0)
		{
			x1 = (-b/2*a);
			document.write("x1 =", x1 );
			
		}
	else if (Diskr < 0)
		{
			Diskr = Math.abs(Dis);
			x1 = miss*b + "/" + 2*a + "+" + Diskr**(1/2) + "*i" + "/" + 2*a;
			x2 = miss*b + "/" + 2*a + "-" + Diskr**(1/2) + "*i" + "/" + 2*a;
			document.write("x1 = ",x1 );
			document.write(" x2 = ",x2 );
		}
	
}

 if (a == 0 && b !=0 && c != 0)
{
	x = -c / b;
	document.write("x1 = ",x1 );

}

if (a != 0 && b == 0 && c != 0)
{	if (c < 0)
		x = Math.sqrt(-c / a);
	else
		{
			x = "("+"i^2*" +  c +"/"+ a+")"+"^(1/2)";
		}
		document.write("x1 = ",x ); 
		document.write(" x2 = -",x );

}
  if (a == 0 && b ==0 && c != 0)
{
	document.write("Нет корней" );

}



