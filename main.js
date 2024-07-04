let a = +prompt(`Birinchi soni kiriting`)
let b = +prompt(`Ikkinchi soni kiriting`)
let c = +prompt(`Amalni tanlang;` + `\n1.qo'shish.` +`\n2.ayrish.` +`\n3.kopatirish.`+`\n4.bolish.` +  `\namanli Tanlang:(1/2/3/4/)`)


if(c === 1){
    console.log(a + b);
}else if(c === 2){ 
    console.log(a - b);
}else if(c === 3){
    console.log(a*b)
}else if(c === 4){
    console.log(a/b)
}

