let para = document.getElementsByClassName("paragraphe");

for(i = 0 ; i < para.length ; i ++){

    if ( (++i % 2) === 0){
        console.log("dans la boucle : " + i);
        continue;
    }
    else if ( i >= para.length - 1 ){
        break;
    }

    para[i].innerHTML = "paragraphe position " + (i+1);

}
