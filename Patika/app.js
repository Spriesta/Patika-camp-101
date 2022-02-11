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


  //        Function

// function deneme ( param ) {
//     console.log("müümkünse dışa bağımlılığı azalt fonksiyon içinde parametre aldır global parametreler sonradan sıkıntı çıkartır")
// }


// function returnfonk(firstname,lastname) {
//     let info = `Merhaba ${firstname} ${lastname}`  // fonksiyon içinde ki info diğer info ları etkilemez yani ezmez ayrı ayrı , 
//     return info  //return ettirip infonun döndürülüp başka fonksiyonda çalışmasına olanak sağlıyoruz
// }

// function DomHtml(id,info) {
//     let dom = document.querySelector(`#${id}`)
//     dom.innerHTML= info
// }


// // DomHtml("deneme" ,"merhaba fonksiyon calisti")

// DomHtml("deneme", returnfonk("ahmet","keskin"))
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

                    // Fat arrow  => 

// const arrfunc = (firstname,lastname) => {
//     let info = console.log(firstname,lastname)
//     return info
// }

// arrfunc("Ulaa calisti","soyad")
///////////////////////////////////////////////////////////////////////////////////////////////////

                                      // Dom ile event ekleme 
// let element = document.querySelector("#deneme")
// element.addEventListener("click", clicked)  // fonksiyona () direkt çalışır buda işimize yaramaz click için

// function clicked() {
//     console.log("Tıklandı");
//     console.log(this.innerHTML="içerik degisti");
//     this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
// }
///////////////////////////////////////////////////////////////////////////////////////////////////

// let scoreDOM = document.querySelector("#number")
// let arttırDOM = document.querySelector("#positive")
// let azaltDOM  = document.querySelector("#negative")



// scoreDOM.innerHTML=0

// arttırDOM.addEventListener("click",arttır)
// azaltDOM.addEventListener("click", azalt)


// function arttır() {
//     scoreDOM.innerHTML ++
// }
// function azalt() {
//     scoreDOM.innerHTML --
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

    //Formlarda url kısmında tag saklama ve sürekli sayfayı yeniden dönmesini engelliyoruz

    // let formDOM = document.querySelector("#userForm")
    // formDOM.addEventListener("submit",formSubmit)


    // function formSubmit() {
    //     event.preventDefault()   // default işlemini iptal ettirdik burada
    //     let scoreInputDOM =document.querySelector("#score")
    //     console.log(scoreInputDOM.value);

    //////////////////////////////////////////////////////////////////////////////////////////////////
                 // form bölüm sonu egzersiz


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

                   //Array's

//    let list = [5,7,6,"Ahmet Keskin","Azer Bulbul",45]

//    let  denemeDOM =  document.querySelector("#deneme")

//       denemeDOM.innerHTML=list

//     //console.log(list[0]);  //array ilk eleman


//     // console.log(list[(list.length)-1]);  // array son eleman bulma

//     // list.push("ahey aheyy")  // sona eleman ekledik 
//     // list.push(28)
//     // console.log(list); 

//     // list.unshift("Basa geldi")  // Başa eleman ekledik

//     // console.log(list); 


//     // list.pop()   // sondaki elemanı sildik 
//     // console.log(list);

//     // list.shift()
//     // console.log(list);  // baştaki elemanı sildik

//     // let den = list.splice(1,3)   //splice() ayırma işleminde kullanılır ilk numara başlangıç ikinci gidileceği. öğe de ekleyebiliriz 
//     // console.log(den);


//     // let value=  list.indexOf("Ahmet Keskin")  // value si girilen değerin index numarasını buluyor
//     // console.log(value);

//      let copy = list.slice()  // kopyasından bağımsız bir kopyaladık 

//     //  console.log(`Ilk liste    : ${list}`);
//     //  console.log(`Ikınci liste : ${copy}`);

//     //  copy.push("hello heeyy")

//     //  console.log(`Ikınci liste bağımsız : ${copy}`);

     
//     //  console.log("ES6 Array birleştirme : ", ...copy,...list ); /// ES6 sonrası Array birleştirme


//     // list.toString()  // tüm öğelerini string hale çevirdi
    

//     // list.join(" --- ")  // ekliyor 
//     // console.log(list);
//     /////////////////////////////////////////////


//     list.splice((list.length)-1,0,"Sıfır çıkarma demek buraya yazdığımda ekle demek")
//     console.log(list);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    // Loops

    // for(let i = 0 ; i<10; i++){
    //     console.log(i);
    // }

//  let userDOM=document.querySelector("#userList")

// let users = ["lorem","ipsum","dolor"]

// for (let index = 0; index < users.length; index++) {    // döngü ile array deki verileri  tabloya yerleştirme 
//     const liDOM = document.createElement("li")
//     liDOM.innerHTML=users[index]
//     userDOM.appendChild(liDOM)
// }


            // forEach         // for ile yapmaktansa bu daha kolay tabloya yerleşti

// let PRODUCTS = ["Pc","mouse","keyboard","Laptop","chair","Monitor"]

// PRODUCTS.forEach(item => {    // item adlı fonsiyonu PRODUCTS arrayinin içinde dolaştık  ve arrayin bilgilerine eriştik
//     const liDOM = document.createElement("li")
//     liDOM.innerHTML = item
//     userDOM.appendChild(liDOM)
// });



//                  /// filter kullanımı

//  let PRODUCTS = ["Pc","mouse","keyboard","Laptop","chair","Monitor","Graphic Card","Mouse pad","CPU"]

//  const newProducts = PRODUCTS.filter(item => (item.length > 4))
//  console.log(newProducts);




                                    // Array map Kullanımı

//  let users = ["LOREM","IpSUM","DOlor","Medic","HALAR","JOin"]

//  const newUsers = users.map(item => {
//      return{
//          username : item , shortname:`${item[0]}.`, newname : `${item[0].toUpperCase()} ${item.slice(1).toLowerCase()}` 
//              }
//  })

//  console.log(newUsers);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////