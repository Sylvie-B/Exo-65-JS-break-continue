let para = document.getElementsByClassName("paragraphe");

for(i = 0 ; i < para.length ; i ++){
    let texte = para[i];
    texte.innerHTML = "paragraphe position " + (i+1);
}
