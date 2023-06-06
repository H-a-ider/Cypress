
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

describe("Daraz Project", () => {
    it("Working Page", () => {
        cy.visit("http://sellercenter.daraz.pk/order/query", { force: true })
        cy.get("input[placeholder='Please enter'][type='text']").type("Email")
        cy.get("input[placeholder='Please enter'][type='password']").type("Password")
        cy.get(".loginButtonStyle.flexCenterCenter").click()

        cy.wait(3000)

        // All Option 
        cy.get(':nth-child(1) > .next-tabs-tab-inner > :nth-child(1) > :nth-child(1) > span').click()

        // Items per pages
        cy.get("span[class='page-size-ctrl'] button[type='button']").trigger("mouseover")

        // 50 Pages
        cy.get('.next-menu-content > :nth-child(3) > span').click()

        // Selecting Orders
        cy.get("body > div:nth-child(7) > div:nth-child(1) > article:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > th:nth-child(1) > div:nth-child(1) > label:nth-child(1) > input:nth-child(2)").click()

        cy.get("body div div[role='tablist'] div div div div div:nth-child(1) div:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1)").click()

        // Print Option
        cy.get("body > div:nth-child(7) > div:nth-child(1) > article:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1) > i:nth-child(1)").trigger("mouseover")

        // Printing shipping label 
        cy.get(':nth-child(4) > span').click()

    

        cy.wait(3000)
        cy.wait(3000)
       
          


        // Done Button
        cy.get("button[class='next-btn next-btn-primary next-btn-medium']").click()

        // Set Status
        cy.get("body > div:nth-child(7) > div:nth-child(1) > article:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").trigger("mouseover")

        // Ready to Ship
        cy.get('.next-menu-content > :nth-child(1) > span').click()

        cy.get(".next-icon.next-icon-close.next-icon-small").click()

    })
})