const submit = document.querySelector('.submit')
const alertMsg = document.querySelector('.alert')
const alertText = document.querySelector('.alert p')
const queryText = document.querySelectorAll('.query p')
const queryContainer = document.querySelectorAll('.query')
const query1 = document.getElementById('query1')
const query2 = document.getElementById('query2')
const firstName = document.querySelector('.first')
const lastName = document.querySelector('.last')
const email = document.querySelector('.email')
const message = document.querySelector('.message')
const consent = document.querySelector('.consent')

const firstError = document.querySelector('.first-error')
const lastError = document.querySelector('.last-error')
const emailError = document.querySelector('.email-error')
const queryError = document.querySelector('.query-error')
const messageError = document.querySelector('.message-error')
const consentError = document.querySelector('.consent-error')
const checkmark = document.querySelector('.checkmark')

function displaySuccess(e) {
	e.preventDefault()
	if (firstName.value === '') {
		firstError.style.opacity = '0.7'
		firstName.style.outline = '1.5px solid rgb(255,0,0)'
	} else {
		firstError.style.opacity = '0'
		firstName.style.outline = ''
	}
	if (lastName.value === '') {
		lastError.style.opacity = '0.7'
		lastName.style.outline = '1.5px solid rgb(255,0,0)'
	} else {
		lastError.style.opacity = '0'
		lastName.style.outline = ''
	}
	if (email.value === '') {
		emailError.style.opacity = '0.7'
		email.style.outline = '1.5px solid rgb(255,0,0)'
	} else {
		emailError.style.opacity = '0'
		email.style.outline = ''
	}
	if (query1.checked === false && query2.checked === false) {
		queryError.style.opacity = '0.7'
		query1.parentElement.style.outline = '1.5px solid rgb(255,0,0)'
		query2.parentElement.style.outline = '1.5px solid rgb(255,0,0)'
	} else {
		queryError.style.opacity = '0'
		query1.parentElement.style.outline = ''
		query2.parentElement.style.outline = ''
	}
	if (message.value === '') {
		messageError.style.opacity = '0.7'
		message.style.outline = '1.5px solid rgb(255,0,0)'
	} else {
		messageError.style.opacity = '0'
		message.style.outline = ''
	}
	if (consent.checked === false) {
		consentError.style.opacity = '0.7'
		checkmark.style.border = '1.5px solid rgb(255,0,0)'
	} else {
		consentError.style.opacity = '0'
		checkmark.style.border = ''
	}
	if (
		firstName.value === '' ||
		lastName.value === '' ||
		email.value === '' ||
		(query1.checked === false && query2.checked === false) ||
		message.value === '' ||
		consent.checked === false
	) {
		alertMsg.classList.add('wrong')
		alertText.innerText = 'Please fill in all of the required inputs.'
		setTimeout(() => {
			alertMsg.classList.remove('wrong')
		}, 3500)
	} else {
		alertMsg.classList.add('correct')
		alertText.innerText = `Thanks! Your message has been sent to the team. You can expect to hear
    from us in the next 24-48 hours.`

		firstName.value = ''
		lastName.value = ''
		email.value = ''
		query1.checked = false
		query2.checked = false
		message.value = ''
		consent.checked = false
		query1.parentElement.style.backgroundColor = '#fff'
		query2.parentElement.style.backgroundColor = '#fff'
		setTimeout(() => {
			alertMsg.classList.remove('correct')
		}, 3500)
	}
}

function change(e) {
	const queryBox = e.target.parentElement
	query1.parentElement.style.backgroundColor = '#fff'
	query2.parentElement.style.backgroundColor = '#fff'
	queryBox.style.backgroundColor = 'var(--light-green)'
}

submit.addEventListener('click', displaySuccess)

queryContainer.forEach((query) => {
	query.addEventListener('change', change)
})

function focusConsent() {
	const consentParent = consent.parentElement
	consentParent.style.border = '1.2px solid var(--medium-green)'
	consentParent.style.padding = '0.3rem'
}

function blurConsent() {
	const consentParent = consent.parentElement
	consentParent.style.border = ''
	consentParent.style.padding = '0.3rem'
}

consent.addEventListener('focus', focusConsent)
consent.addEventListener('blur', blurConsent)
