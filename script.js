"use strict";

/**            BOUCLE
 *              FOR
 * Declarer une variable aBis qui est egale à un entier positif
 * 
 * Faire un console log de 'OKLM' autant de fois que le valeur de aBis
 * 
 * 
 */

let aBis=4;
for(let i=0;i<aBis;i++){
    console.log('OKLM');
}

//          WHILE
/**
 * Declarer une varaible aT qui est egale a 3
 * tant que aT est plus petit que 9 
 * incremente a de 1
 * si aT est egal a 8 on arrete la boucle 
 * si aT est egal a 7 on revient au debut de la boucle 
 * on console log(aT)
 */
let aT=3;
while(aT<9){
    aT++
    if(aT==7){
        continue
    }
    if(aT==8){
        break
    }
    console.log(aT);
}
console.log('Jai cassé la boucle au bout de '+aT+" tours");
