
document.getElementById('loan-form').addEventListener('submit',calculate);

function calculate(e)
{
    //Hide result
    document.getElementById('results').style.display='none';
    //Show loading
    document.getElementById('loading').style.display='block';

    setTimeout(calculateResults,2000);

    e.preventDefault();
}


function calculateResults()
{
console.log('Calculting....')
const amount=document.getElementById('amount');

const interest=document.getElementById('interest');

const years=document.getElementById('years');



const monthlypayment=document.getElementById('monthly-payment');
const totalpayment=document.getElementById('total-payment');

const totalinterest=document.getElementById('total-interest');

const principal =parseFloat(amount.value);
const calcinterset=parseFloat(interest.value)/100/12;
const calpayment=parseFloat(years.value)*12;
const x=Math.pow(1+calcinterset,calpayment);

const month=(principal*x*calcinterset)/(x-1);


if(isFinite(month))
{
    monthlypayment.value=month.toFixed(2);
    // console.log(monthlypayment.value);
    totalpayment.value=(month*calpayment).toFixed(2);
    // console.log(totalpayment.value);
    totalinterest.value=((month*calpayment)-principal).toFixed(2);
    // console.log(totalinterest.value);
   //Hide loading
   document.getElementById('loading').style.display='none';
    //show result
    document.getElementById('results').style.display='block';
    

}
else
{
    
    showError("Please check your number");
    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='none';
}




}
function showError(error)
{
  
  const ediv=document.createElement('div');
  const card=document.querySelector('.card');
  const heading=document.querySelector('.heading');

  ediv.className='alert alert-danger';

  ediv.appendChild(document.createTextNode(error));
  card.insertBefore(ediv,heading);
 
   setTimeout(clearscreen,3000);


}

function clearscreen()
{

 document.querySelector('.alert').remove();

}

