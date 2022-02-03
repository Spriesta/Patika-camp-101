/* var name = "Ahmet Keskin"
 console.log(name)
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 let random;              // sadece tanımladık instance atamadık let'in farkı
 console.log(random);

random = "aksjdhi"
console.log(random);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
    içerisinde ki önemli bilgilerin değişmemesi gerekiyor bunun için const kullanıyoruz

    const serverpass = 57932  // direkt tanımlanması gerek


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// number , string , boolean
var Liste = []
Liste.push("yeni","la ne sacma")
console.log(Liste);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Template literals backtick ile kullanıyor  altGr ortavirgül
let isim = "ahmet"
let adres = "gebze"
const id = 5732345345
let mail = "aa@gmail.com"

 let User =`Merhaba ${isim} adresin ${adres} mail adresin ${mail}`  // + koyup devam etme zahmetinden kurtarıyor ve string içinde  JS yazıyosun

 console.log(User);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
*/



/*



///////////////////////////////////////////////////////////////////////
document.querySelector(#id neyse artık)
bunu kullanmanın önemi direkt id veya class'a yönlendirmesi  ayrı ayrı byid by class tag felan kullanmama gerek kalmıyor
///////////////////////////////////////////////////////////////////////
 //promp diye bir kavram var kullıcıdan input almamıza yarıyor alert ekranı içinde
let name = prompt("lutfen adınızı giriniz")
console.log(name)
///////////////////////////////////////////////////////////////////////

let domUl = document.querySelector("#list")
let yeniLi = document.createElement("li")
yeniLi.innerHTML=("ahey aheyyy")

domUl.append(yeniLi)

///////////////////////////////////////////////////////////////////////
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*


//===   hem değeri hemde türü eşitse 
// !=  eşit değilse
// !  (değilse)

/////////////////////////////////////////////////////////////////////////////////////////////////////////


while (true) {
    let Girdi = prompt(" Bir Sayı Giriniz")

if(Girdi >= 10 ) { 
    alert("Başarılı !")
    break
}
else{
    alert("Matematik Öğren Önce Sayı ve Rakam Farklı Kavramlar !!! ")

}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ternaty (short if  kullanımı )   ?
 let userName = "Hızlıca if"
let shortif =  userName.length > 2 ?   userName : "kullanıcı bilginiz bulunamadı"
console.log(shortif);
 
  let age = 24;
       let permission = (age >= 18) ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

       console.log(permission);


/////////////////////////////////////////////////////////////////////////////////////////////////////////



while (true) {
    
let not = prompt("Harf Notunu Öğrenmek İçin Lütfen Notunuzu Giriniz")
let cikti;
let info = document.querySelector("#info")


    if (not >=0 && not <=100) {
        if (not >= 90 && not < 101) {
            cikti = "AA"
        } 
        else if (not <90 && not >=85){ cikti="BA  :))))))))))))))"}
        else if (not <85 && not >=80){ cikti="BB  :))))))))))))))"}
        else if (not <80 && not >=75){ cikti="CB  :))))))))))))))"}
        else if (not <75 && not >=70){ cikti="CC  :))))))))))))))"}
        else if (not <70 && not >=65){ cikti="DC  ://////////////"}
        else if (not <65 && not >=60){ cikti="DD  :(((((((((((((("}
        else if (not <60 && not >=50){ cikti="FD  :(((((((((((((("}
        else if (not <50 && not >=0){
              cikti="FF  :(((((((((((((("
            info.classList.add("text-denger")
            }
        
       
    
       
        
        info.innerHTML=(`Harf Notunuz : ${cikti}`)
        
        
        break;
    } 
    else {
        alert("La adam gibi sayı gir")
        
    }

}
///////////////////////////////////////////////////////////////////////////////////////////

*/


