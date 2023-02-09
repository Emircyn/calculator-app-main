let number = [];
$('.button').click(function (event) {
  if ($(this).attr('id')) {
    math($(this).attr('id'));
  } else {
    $('#del').removeAttr('disabled');
    let currentNumber = $(this).text();
    let input = $('input');
    number.push(currentNumber);
    console.log(number);
    input.val(number.join(''));
  }
});
const math = (id) => {
  let join = eval(number.join(''));
  switch (id) {
    case 'reset':
      (number = []), $('input').val('0');
      break;
    case 'del':
      number.pop(), $('input').val(number.join(''));
      break;
    case 'val':
      $('#del').attr('disabled', true);
      $('input').val(join),
        number.push(join),
        number.splice(0, number.length - 1);
      break;
    default:
      break;
  }
};
