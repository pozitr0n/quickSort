function qsort( data, compare, change ){
    var a = data,
        f_compare = compare,
        f_change  = change;
 	
 	// Данные не являются массивом
    if ( !a instanceof Array ){
        return undefined;
    };
    	// Будем использовать простую функцию (для чисел)
    	if ( f_compare == undefined ){ 
        	f_compare = function( a, b ) {
        		return ( ( a == b ) ? 0 : ( ( a > b ) ? 1 : -1 ) );};
    	};

    		// Будем использовать простую смены (для чисел)
    		if ( f_change == undefined ){ 
        		f_change = function( a, i, j ){
        			var c = a[ i ];
        				a[ i ] = a[ j ];
        				a[ j ] = c;
        			};
    };
 
    var qs = function ( l, r ){
        var i = l,
            j = r,
            x = a[ l + r >> 1 ];
            //x = a[Math.floor(Math.random()*(r-l+1))+l];
            // x = a[ l ]; // Если нет желания использовать объект Math
 
 
        while( i <= j ){
            while( f_compare( a[ i ], x ) == -1 ){
            	i++;
            }
            	while( f_compare( a[ j ], x ) == 1 ){
            		j--;
            	}
            		if( i <= j ){
            			f_change( a, i++, j-- );}
        };
        if(l < j) {qs(l, j);}
        if(i < r) {qs(i, r);}
    };
 
    qs(0, a.length-1);
};
