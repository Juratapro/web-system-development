const expenses = []

const nameInput = document.querySelector('[name="expense-name"]')
const amountInput = document.querySelector('[name="expense-amount"]')
const button = document.getElementById('add-expense')

button.addEventListener('click', () => {
    const name = nameInput.value
    const amount = Number(amountInput.value)

    if (name === '' || !(amount > 0)) {
        alert('Write a name and a positive amount')
        return
    }

    expenses.push({ name: name, amount: amount })
    console.log(expenses)

    nameInput.value = ''
    amountInput.value = ''
})
