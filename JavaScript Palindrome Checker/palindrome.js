const button = document.getElementById('button')

button.addEventListener('click', () => {
    const input = prompt("Enter a value to process for Palindrome:");
    const reversedInput = input.split('').reverse().join('');

    if (input !== '') {
        (input === reversedInput)
            ?
            alert(`Wooo, You just gave me a Palindrome`)
            :
            alert(`Nah, that isn't a Palindrome. You can try harder sha`)
    } else {
        alert('My input was Empty man. Stick something in me tho');
    }
});
