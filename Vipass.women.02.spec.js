describe('Registration process, questionnaire form', () => {
	it('should visit registration page', () => {
		cy.visit(
			'https://myvipassana.calm.dhamma.org/pl/enrolment/initial_enrolment_form/Uk0eDsCOUh263wR'
		),
			{ timeout: 10000 }
	})

	// click on 10-dniowy kursy TAK
	it('should click TAK button in 10-dniowy kurs', () => {
		cy.get('.radio_buttons').contains('Tak').click()
		cy.wait(1000)
	})

	// Zaznacz, w jakiej formie chcesz uczestniczyć w kursie
	it('should click on "siedziec" course', () => {
		cy.get('.radio_buttons').contains('Siedzieć kurs').click()
		cy.wait(1000)
	})

	// zaznacz forme caly kurs
	it('zaznacz caly kurs', () => {
		cy.get('.radio_buttons').contains('Cały kurs').click()
		cy.wait(1000)
	})

	// click on Kobieta
	it('should click on Kobieta button', () => {
		cy.get('.radio_buttons').contains('Kobieta').click()
		cy.wait(1000)
	})

	// go to next page with "Nastepny" button
	it('should click on "Nastepny" button', () => {
		cy.get('.btn').contains('Następny').click()
	})

	// po 30min rezerwacji click w "Nastepny" button
	it('should click on "Nastepny" button', () => {
		cy.get('.btn').contains('Następny').click()
	})

	// wypelnia pole imie
	it('should fill name', () => {
		cy.get('#enrolment_form_given_name').as('name') // mozemy nazwe user_login podstawic jako alias
		cy.get('@name').clear()
		cy.get('@name').type('Some Invalid Name', { delay: 50 })
	})

	// wypelnia pole nazwisko
	it('should fill Surname', () => {
		cy.get('#enrolment_form_family_name').as('Surname') // mozemy nazwe user_login podstawic jako alias
		cy.get('@Surname').clear()
		cy.get('@Surname').type('Some Invalid Surame', { delay: 50 })
	})

	// Birthdate day,month,year
	it('should open dropdown with day, month, year', () => {
		cy.get('#enrolment_form_birthdate_3i').select('2').should('have.value', '2')
		cy.get('#enrolment_form_birthdate_2i').select('2').contains('luty')
		cy.get('#enrolment_form_birthdate_1i').select('1999').should('have.value', '1999')
	})

	// age
	it('should type in the age', () => {
		cy.get('#enrolment_form_age').type('22', { delay: 50 })
	})

	// occupation
	it('should type in an occupation', () => {
		cy.get('#enrolment_form_occupation').type('example occupation', {
			delay: 50,
		})
	})

	// country of birth
	it('should choose country of birth', () => {
		cy.get('#enrolment_form_birth_country').select('PL').contains('Polska')
	})

	// home country
	it('should choose home country', () => {
		cy.get('#enrolment_form_address_country').select('PL').contains('Polska')
	})

	// town
	it('should tipe in town', () => {
		cy.get('#enrolment_form_address_town').type('example town', { delay: 50 })
	})

	// postal code
	it('should type postal code', () => {
		cy.get('#enrolment_form_address_postal_code').type('42-200', { delay: 50 })
	})

	// province
	it('should choose province', () => {
		cy.get('#enrolment_form_address_state').select('SL').contains('Śląskie')
	})

	// address
	it('should type in address', () => {
		cy.get('#enrolment_form_address').type('example address', { delay: 50 })
	})

	// e-mail
	it('should type in an email', () => {
		cy.get('#enrolment_form_email').type('example@email.com', { delay: 50 })
	})

	// e-mail confirmation
	it('should type in an email confirmation', () => {
		cy.get('#enrolment_form_confirm_email').type('example@email.com', {delay: 50 })
	})

	// phone number
	it('should choose flag and type in phone nr', () => {
		cy.get('[aria-controls="iti-0__country-listbox"]').click()
		cy.wait(2000)
		cy.get('#iti-0__item-pl').click()
		cy.get('#enrolment_form_mobile_phone').type('500111222', { delay: 50 })
    })
    
    // jak dobrze znasz j.ang i j.pol
    it('should choose language skills level', () => {
        cy.get('#enrolment_form_instruction_languages_raw_proficiency_en').as('englevel')
        cy.get('@englevel').select('good').contains('Dobry')
        cy.get('#enrolment_form_instruction_languages_raw_proficiency_pl').as('pllevel')
        cy.get('@pllevel').select('native').contains('Ojczysty')
    })

    // 


})