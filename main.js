
const button = document.getElementById('button');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const parseName = fullName.toLowerCase();
    if (parseName === 'ishrak ahamed') {
        alert(fullName + ' is boss')
    }else if (parseName === 'ayan upadhaya') {
        alert(fullName + ' is terminated....!')
    }
    else if (parseName === 'muktadir hossain') {
        alert(fullName.toUpperCase() + ' is terminated....!')
    }
    else if (parseName === 'masud rana') {
        alert(fullName.toUpperCase() + ' is the boss....!')
    }
    else if (parseName === 'faisal rabbany') {
        alert(fullName.toUpperCase() + ' is the best player!')
    }
    else if (parseName === 'protik saha') {
        alert(fullName.toUpperCase() + ' Abal....!')
    }else{
        alert('Your data is not found, please fill the form correctly....!')
    }
    
})