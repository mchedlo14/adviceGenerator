let url = 'https://api.adviceslip.com/advice';

//ADVICE #11
let getAdvice = () => {
    fetch(url,{
        method:'GET',
        cache: 'no-cache'
    }).then((response) =>{
        return response.json()
    }).then((responseData)=>{
        console.log(responseData.slip['advice']);
        document.getElementById('number').textContent = 'ADVICE' + ' ' + '#' + ' ' + responseData.slip['id']
        document.getElementById('advice').textContent = '"' + responseData.slip['advice'] + '"' 
    })
}


document.getElementById('roll').addEventListener('click',function(){
    getAdvice()
})