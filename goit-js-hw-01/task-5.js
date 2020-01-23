let country = prompt(`Выберите страну`)
let price = country. toLowerCase();

switch (price) {
  case 'китай' :
    alert( '100 кредитов' );
    break;
  case 'чили' :
    alert( '250 кредитов' );
    break;
  case 'австралия' :
    alert( '170 кредитов' );
    break;
     case 'индия' :
    alert( '80 кредитов' );
    break;
     case 'ямайка' :
    alert( '120 кредитов' );
    break;
  default:
    alert( "В вашей стране доставка не доступна" );
}

'Доставка в [страна] будет стоить [цена] кредитов'

