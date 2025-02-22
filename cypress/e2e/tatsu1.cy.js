
// beforeEach(() => {{
//   cy.session('Web Url', () => {
//     cy.visit('/')
//   })
// }})

describe('Web', () => {
  it('Website url', () => {
    cy.visit('https://www.astroempires.com')
    cy.wait(3000)
    cy.get('.btnaction1 > h2').click()
    cy.wait(1000)
  })
})

describe('Ranks', () => {
  it.skip('Player', () => {
    cy.visit('https://www.astroempires.com')
    cy.wait(3000)
    cy.get(':nth-child(13) > .btn-normal > .btn_ctr > div').click()
    cy.get(':nth-child(3) > :nth-child(2) > .input-text').type('wewewadidaw@gmail.com')
    cy.get('#login_box_login > #login > table > tbody > :nth-child(5) > :nth-child(2) > .input-text').type('newAccount!123')
    cy.get('#login_box_login > #login > table > tbody > :nth-child(7) > th > .input-button').click()
    cy.wait(5000)
    cy.get(':nth-child(3) > .btn-normal > .btn_ctr > div',).click()
    cy.get('#ply_lvl > .btn_ctr').click()
    cy.wait(5000)
    cy.get('#ply_econ > .btn_ctr > div').click()
    cy.wait(5000)
    cy.get('#ply_fleet > .btn_ctr > div').click()
    cy.wait(5000)
    cy.get('#ply_tech > .btn_ctr > div').click()
    cy.wait(5000)
    cy.get('#ply_exp > .btn_ctr > div').click()
    cy.wait(5000)
  })
  it.skip('Guild', () => {
    cy.visit('https://www.astroempires.com')
    cy.wait(3000)
    cy.get(':nth-child(13) > .btn-normal > .btn_ctr > div').click()
    cy.get(':nth-child(3) > :nth-child(2) > .input-text').type('wewewadidaw@gmail.com')
    cy.get('#login_box_login > #login > table > tbody > :nth-child(5) > :nth-child(2) > .input-text').type('newAccount!123')
    cy.get('#login_box_login > #login > table > tbody > :nth-child(7) > th > .input-button').click()
    cy.wait(5000)
    cy.get(':nth-child(3) > .btn-normal > .btn_ctr > div').click()
    cy.get('#guilds_lvl > .btn_ctr > div').click()
    cy.wait(5000)
    cy.get('#guilds_econ > .btn_ctr > div').click()
    cy.wait(5000)
    cy.get('#guilds_fleet > .btn_ctr > div').click()
    cy.wait(5000)
    cy.get('#guilds_tech > .btn_ctr > div').click()
    cy.wait(5000)
    cy.get('#guilds_exp > .btn_ctr > div').click()
    cy.wait(5000)
  })
})
  describe('Register Account', () => {
    it('Empty Input', () => {
      cy.visit('https://www.astroempires.com') 
      cy.wait(1000)
      cy.get('.btnaction1 > h2').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > :nth-child(2) > .input-text').type('TestAccount').clear()
      cy.wait(1000)
      cy.get(':nth-child(4) > :nth-child(2) > .input-text').type('wewewadidaw@gmail.com').clear()
      cy.wait(1000)
      cy.get(':nth-child(7) > :nth-child(2) > .input-text').type('newAccount!123').clear()
      cy.wait(2000)
      // cy.get(':nth-child(11) > :nth-child(2) > .input-select',select name="Bolt" class="input-select")
      cy.wait(3000)
      cy.get(':nth-child(14) > td > .input-checkbox').click()
      cy.wait(2000)
      cy.get(':nth-child(16) > td > .input-checkbox').click()
      cy.wait(2000)
      cy.get('.input-button').click()
      cy.wait(5000)
    })
    it('Correct Input', () => {
      cy.visit('https://www.astroempires.com')
      cy.wait(1000)
      cy.get('.btnaction1 > h2').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > :nth-child(2) > .input-text').type('TestAccount')
      cy.wait(1000)
      cy.get(':nth-child(4) > :nth-child(2) > .input-text').type('wewewadidaw@gmail.com')
      cy.wait(1000)
      cy.get(':nth-child(7) > :nth-child(2) > .input-text').type('newAccount!123')
      cy.wait(2000)
      // cy.get(':nth-child(11) > :nth-child(2) > .input-select').select('Bolt')
      cy.wait(3000)
      cy.get(':nth-child(14) > td > .input-checkbox').click()
      cy.get(':nth-child(16) > td > .input-checkbox').click()
      cy.get('.input-button').click()
      cy.wait(5000)
    })
  })

    describe('Login User', () =>{
      it('Validate Login but Empty Input', () =>{
        cy.visit('https://bolt.astroempires.com/login.aspx?account=2621&activation=4010707843639122&galaxy=-1')
        cy.get('.btn-normal-active > .btn_ctr > div').click()
        cy.get(':nth-child(1) > td > .input-text').type('wewewadidaw@gmail.com').clear()
        cy.get(':nth-child(2) > td > .input-text').type('newAccount!123').clear()
        cy.get('.input-button').click()
        cy.wait(5000)

      })
      it('Validate Login Correct Input', () =>{
        cy.visit('https://bolt.astroempires.com/login.aspx?account=2621&activation=4010707843639122&galaxy=-1')
        cy.get('.btn-normal-active > .btn_ctr > div').click()
        cy.get(':nth-child(1) > td > .input-text').type('wewewadidaw@gmail.com')
        cy.get(':nth-child(2) > td > .input-text').type('newAccount!123')
        cy.get('.input-button').click()
      })
      describe('Game Web Page', () => {
        it('Bases', () => { 
          cy.visit('https://bolt.astroempires.com/login.aspx?account=2621&activation=4010707843639122&galaxy=-1')
          cy.get('.btn-normal-active > .btn_ctr > div').click()
          cy.get(':nth-child(1) > td > .input-text').type('wewewadidaw@gmail.com')
          cy.get(':nth-child(2) > td > .input-text').type('newAccount!123')
          cy.get('.input-button').click()
          cy.wait(5000)
          cy.get('#bases > .btn_ctr > div').click()
          //cy.get('.input-select').click() //cari tentang dropdown dari internet
          //cy.get('#notes > div').click()
          cy.get('#overview > .btn_ctr > div')
          cy.wait(2000)
          cy.get('#structures > .btn_ctr > div').click()
          cy.wait(2000)
          //cy.get('#btn_support_facilities2 > .btn-tab-active').click()
          //cy.wait(2000)
         // cy.get('#item_research-labs > .base_items-title > h6').click()
         // cy.wait(2000)
         cy.get('#btn_support_facilities2 > .btn-tab').click()
          cy.wait(2000)
          cy.get('#item_urban-structures > .base_items-input > form > .input-button').click()
          cy.wait(2000)
          // cy.get('#item_barracks').click()
          // cy.wait(2000)
          // cy.get('.base_items > .btn-action').click()
          // cy.wait(2000)
          // cy.get('#messages > .btn_ctr > div').click()
          // cy.wait(2000)
          cy.get('[href="base.aspx?base=18123&view=defenses"]').click()
          cy.wait(3000)
          cy.get('#production > .btn_ctr > div').click()
          cy.wait(4000)
          cy.get('#research > .btn_ctr > div').click()
          cy.wait(4000)
          // cy.get('#item_energy > .base_items-input > form > .input-button').click()
          // cy.wait(6000)
          cy.get('#item_energy > .base_items-input > form > .input-button').click()
          cy.wait(5000)
          cy.get('.row_active > [align="right"] > .btn-action').click()
          cy.wait(3000)
          cy.get('form > .input-button').click()
          cy.wait(3000)
          cy.get('#trade > .btn_ctr > div').click()
          cy.wait(4000)
        })
        it('Map', () => {
          cy.visit('https://bolt.astroempires.com/login.aspx?account=2621&activation=4010707843639122&galaxy=-1')
          cy.get('.btn-normal-active > .btn_ctr > div').click()
          cy.get(':nth-child(1) > td > .input-text').type('wewewadidaw@gmail.com')
          cy.get(':nth-child(2) > td > .input-text').type('newAccount!123')
          cy.get('.input-button').click()
          cy.wait(5000)
          cy.get('#map > .btn_ctr > div').click()
          cy.wait(8000)
          cy.get('p > :nth-child(1)').click()
          cy.wait(2000)
          cy.get('#getLocation').type('B34')
          cy.wait(3000)
          cy.get('.btn').click()
          cy.wait(5000)
          cy.get('#map2_Fav-5-switch').click()
          cy.wait(4000)
          cy.get('#map2_Fav-4-switch').click()
          cy.wait(4000)
        })
        it('Fleet', () => {
          cy.visit('https://bolt.astroempires.com/login.aspx?account=2621&activation=4010707843639122&galaxy=-1')
          cy.get('.btn-normal-active > .btn_ctr > div').click()
          cy.get(':nth-child(1) > td > .input-text').type('wewewadidaw@gmail.com')
          cy.get(':nth-child(2) > td > .input-text').type('newAccount!123')
          cy.get('.input-button').click()
          cy.wait(5000)
          cy.get('#fleets > .btn_ctr > div').click()
          cy.wait(3000)
        })
        it('Cmdrs', () => {
          cy.visit('https://bolt.astroempires.com/login.aspx?account=2621&activation=4010707843639122&galaxy=-1')
          cy.get('.btn-normal-active > .btn_ctr > div').click()
          cy.get(':nth-child(1) > td > .input-text').type('wewewadidaw@gmail.com')
          cy.get(':nth-child(2) > td > .input-text').type('newAccount!123')
          cy.get('.input-button').click()
          cy.wait(5000)
          cy.get('#commanders > .btn_ctr > div').click()
          cy.wait(3000)
          cy.contain('You must have at least 1 Command Center to recruit a new commander.')
          cy.wait(3000)
        })
        it('Empire', () => {
          cy.visit('https://bolt.astroempires.com/login.aspx?account=2621&activation=4010707843639122&galaxy=-1')
          cy.get('.btn-normal-active > .btn_ctr > div').click()
          cy.get(':nth-child(1) > td > .input-text').type('wewewadidaw@gmail.com')
          cy.get(':nth-child(2) > td > .input-text').type('newAccount!123')
          cy.get('.input-button').click()
          cy.wait(5000)
          cy.get('#empire > .btn_ctr > div').click()
          cy.wait(3000)
          cy.get('#empire-events > .btn_ctr > div').click()
          cy.wait(3000)
          cy.get('#empire-production > .btn_ctr > div').click()
          cy.wait(3000)
          cy.get('#empire-economy > .btn_ctr > div').click()
          cy.wait(3000)
          cy.get('#empire-trade > .btn_ctr > div').click()
          cy.wait(3000)
          cy.get('#empire-trade > .btn_ctr > div').click()
          cy.wait(3000)
          cy.get('#empire-reports > .btn_ctr > div').click()
          cy.wait(3000)
        })
      })
      describe('Logout Page', () => {
        it('Logout User Account', () => {
          cy.visit('https://bolt.astroempires.com/login.aspx?account=2621&activation=4010707843639122&galaxy=-1')
          cy.get('.btn-normal-active > .btn_ctr > div').click()
          cy.get(':nth-child(1) > td > .input-text').type('wewewadidaw@gmail.com')
          cy.get(':nth-child(2) > td > .input-text').type('newAccount!123')
          cy.get('.input-button').click()
        })
      })
      
      // it('Forgot Password', () => {
      //   cy.get('.sbox_footer > .sbox_ctr > :nth-child(1)').click()

      // })
      // it('Resend Validation Link', () => {
      //   cy.get('.sbox_ctr > :nth-child(2)').click()
      // })
    })