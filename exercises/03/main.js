const expenses = []

const nameInput = document.querySelector('[name="expense-name"]')
const amountInput = document.querySelector('[name="expense-amount"]')
const button = document.getElementById('add-expense')
const list = document.getElementById('expense-list')
const totalElement = document.getElementById('total')

const renderExpenses = () => {
    list.innerHTML = ''

    expenses.forEach(expense => {
        const li = document.createElement('li')
        li.textContent = `${expense.name}: ${expense.amount} €`
        list.appendChild(li)
    })

    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    totalElement.textContent = total
}

button.addEventListener('click', () => {
    const name = nameInput.value
    const amount = Number(amountInput.value)

    if (name === '' || !(amount > 0)) {
        alert('Write a name and a positive amount')
        return
    }

    expenses.push({ name: name, amount: amount })
    renderExpenses()

    nameInput.value = ''
    amountInput.value = ''
})
