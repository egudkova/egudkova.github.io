	var a = prompt("Введите коэффицент а", "");
	var b = prompt("Введите коэффицент b", "");
	var c = prompt("Введите коэффицент c", "");

	if (a != 0 && b != 0 && c != 0) {
		var d = b * b - 4 * a * c;

		if (d > 0) {
			alert("Дискриминант больше нуля. (два корня)");
			var x1 = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
			var x2 = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
			document.write("x1 = ", x1);
			document.write ("<br \/>");
			document.write("x2 = ", x2);
		} else if (d == 0) {
			var x1 = -b / ( 2 * a );
			document.write("Дискриминант равен нулю. (два одинаковых корня)");
			document.write("x1, x2 = ", x1);
		} else if (d < 0) {
			alert("Дискриминант отрицательный (Комплексные корни)");
			document.write("x1 = ");
			document.write("(", -b, "+", "√(", - d, ")","i", ")", "/", 2 * a);
			document.write ("<br \/>");
			document.write("   ", " ", "x2 = ");
			document.write("(", -b, "-", "√(", - d, ")","i", ")", "/", 2 * a);
		}

	} else if (a == 0 && b != 0 && c != 0) {
		var x = -c / b;
		document.write("x = ",x);
	} else if (a != 0 && b == 0 && c != 0) {
		if (c < 0) {
			var x = -c/a;
			x = Math.sqrt(x);
			document.write("x = ",x);
		} else if (c > 0) {
			document.write("x = ", "√", -c/a);
		}
	} else if (a == 0 && b == 0 && c != 0){
		document.write("Циферка не равна нулю :(");
	} else if (c == 0) {
		document.write("x = ", "0");
	}