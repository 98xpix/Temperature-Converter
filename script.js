function submit() {
    const tempInput = document.getElementById('tempInput').value;
    const CtoF = document.getElementById('CtoF');
    const FtoC = document.getElementById('FtoC');
    const CtoK = document.getElementById('CtoK');
    const KtoC = document.getElementById('KtoC');
    const FtoK = document.getElementById('FtoK');
    const KtoF = document.getElementById('KtoF');
    const display = document.getElementById('display');
    if(CtoF.checked){
        display.innerHTML = `${(tempInput * 9/5) + 32}°F`;
    } 
    else if(FtoC.checked){
        display.innerHTML = `${(tempInput - 32) * 5/9}°C`;
    }
    else if(CtoK.checked){
        display.innerHTML = `${tempInput + 273.15}°K`;
    }
    else if(KtoC.checked){
        display.innerHTML = `${tempInput - 273.15}°C`;
    }
    else if(FtoK.checked){
        display.innerHTML = `${(tempInput - 32) * 5/9 + 273.15}°K`;
    }
    else if(KtoF.checked){
        display.innerHTML = `${(tempInput - 273.15) * 1.8 + 32}°F`;
    }
    else if (tempInput == ''){
        display.innerHTML = "write a value";
    }
    else if(!CtoF.checked || !FtoC.checked || !kelvinRadio.checked){
        display.innerHTML = 'select a unit';
    }
}

document.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        submit();
    }
});

