let country = prompt(`Выберите страну`)
let price = country. toLowerCase();

switch (price) {
  case 'китай' :
    alert( '100 кредитов' );'Доставка в [страна] будет стоить [цена] кредитов'
    break;
  case 'чили' :
    alert( '250 кредитов' );'Доставка в [страна] будет стоить [цена] кредитов'
    break;
  case 'австралия' :
    alert( '170 кредитов' );'Доставка в [страна] будет стоить [цена] кредитов'
    break;
     case 'индия' :
    alert( '80 кредитов' );'Доставка в [страна] будет стоить [цена] кредитов'
    break;
     case 'ямайка' :
    alert( '120 кредитов' );'Доставка в [страна] будет стоить [цена] кредитов'
    break;
  default:
    alert( "В вашей стране доставка не доступна" );
}

'Доставка в [страна] будет стоить [цена] кредитов'

--------------------------------------------------------------------


let country = prompt(`Выберите страну`);
let price;

if (country === null) {
  alert("Ахрана атмена!");
} else
  switch (country.toLowerCase()) {
    case "китай":
      price = 100;  
      break;
    case "чили":
      price = 250;
      break;
    case "австралия":
      price = 170;
      break;
    case "индия":
      price = 80;
      break;
    case "ямайка":
      price = 120;
      break;
    case "":
      alert(`111111`);
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }

if ( price !== undefined ) {
  alert(`Доставка в ${country} будет стоить ${price} кредитов`);
}

