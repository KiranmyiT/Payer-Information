describe("Payer Information Testing", () => {
  it("Loads successfully", () => {
    cy.visit("http://localhost:3000");

    cy.get("div").should("contain.text", "Payer Information");
    cy.get("div").should("contain.text", "Payer Config");
    cy.get("div").should("contain.text", "Payer Status");
    cy.get("button").should("contain.text", "Create").should("be.enabled");

    cy.get("table")
      .should("be.visible")
      .within(() => {
        cy.get("thead").should("be.visible");
        cy.get("tbody").should("be.visible");
        cy.get("tr")
          .should("be.visible")
          .within(() => {
            cy.get("input").should("be.visible");
          });
        cy.get("td").should("be.visible");
      });
  });

  it("Sidebar", () => {
    cy.visit("http://localhost:3000");

    cy.get("div").eq(6).should("be.visible").click();
    cy.get("div").eq(5).should("be.visible").click();
  });

  it("Create data popup submission", () => {
    const correctPayerId = "Zeken2711";
    const correctPayerName = "Zeke";
    const correctTradingPartnerId = "Zeke";

    cy.get("button").first().click();
    cy.get("h3").should("contain.text", "Create Payer");
    cy.get("input")
      .eq(13)
      .should("be.visible")
      .invoke("val", correctPayerId)
      .click();
    cy.get("input")
      .eq(14)
      .should("be.visible")
      .invoke("val", correctPayerName)
      .click();
    cy.get("input")
      .eq(15)
      .should("be.visible")
      .invoke("val", correctTradingPartnerId)
      .click();
    cy.get("#transactionTypes").should("be.visible");
    cy.get("#transactionTypes").focus().select(["PAC", "MAC", "Elig"]);
    cy.get("input").eq(16).should("be.visible").should("be.checked");
    cy.get("input").eq(16).uncheck().should("not.be.checked");
    cy.get('[type="radio"]').first().check();
    cy.get('[type="radio"]').last().check();
    cy.get("input").eq(19).click();

    cy.get("span").should("contain.text", "Data Saved Successfully!");

    cy.get("button").eq(7).should("be.visible").click();
    cy.get("button").eq(5).should("be.visible").click();
  });

  it("Create data popup validation check", () => {
    const wrongPayerId1 = "Zeke";
    const wrongPayerName = "Zeke27";
    const wrongTradingPartnerId = "Zeke27";

    cy.visit("http://localhost:3000");
    cy.get("button").first().click({ multiple: true });
    cy.get("h3").should("contain.text", "Create Payer");
    cy.get("input")
      .eq(13)
      .should("be.visible")
      .invoke("val", wrongPayerId1)
      .click();
    cy.get("input")
      .eq(14)
      .should("be.visible")
      .invoke("val", wrongPayerName)
      .click();
    cy.get("input")
      .eq(15)
      .should("be.visible")
      .invoke("val", wrongTradingPartnerId)
      .click();
    cy.get("#transactionTypes").should("be.visible");
    cy.get("input").eq(16).should("be.visible").should("be.checked");
    cy.get("input").eq(16).uncheck().should("not.be.checked");
    cy.get('[type="radio"]').first().check();
    cy.get('[type="radio"]').last().check();
    cy.get("input").eq(19).click();

    cy.get("span").should("contain.text", "*Please fill mandatory field*");
    cy.get("span").should("contain.text", "*Min 5 char required*");
    cy.get("span").should("contain.text", "*Special characters not allowed*");

    cy.get("button").eq(7).should("be.visible").click();
    cy.get("button").eq(5).should("be.visible").click();
  });

  it("Update data popup check 1", () => {
    cy.visit("http://localhost:3000");
    cy.get("table").within(() => {
      cy.get("thead")
        .should("be.visible")
        .within(() => {
          cy.get("th")
            .should("contain.text", "Payer Name")
            .dblclick({ force: true });
        });
      cy.get("td").eq(7).should("be.visible").click();
    });
  });

  it("Update data popup submission", () => {
    const correctPayerId = "Zekee2711";
    const correctPayerName = "Zekee";
    const correctTradingPartnerId = "Zekee";

    cy.get("h3").should("contain.text", "Update Payer");
    cy.get("input")
      .eq(13)
      .should("be.visible")
      .invoke("val", correctPayerId)
      .click();
    cy.get("input")
      .eq(14)
      .should("be.visible")
      .invoke("val", correctPayerName)
      .click();
    cy.get("input")
      .eq(15)
      .should("be.visible")
      .invoke("val", correctTradingPartnerId)
      .click();
    cy.get("select").focus().select(["PAC", "CSI"]);
    cy.get("input").eq(16).check().should("be.checked");
    cy.get("input").eq(19).click();

    cy.get("span").should("contain.text", "Data Saved Successfully!");
  });

  it("Update data popup check 2", () => {
    cy.visit("http://localhost:3000");

    cy.get("table").within(() => {
      cy.get("thead")
        .should("be.visible")
        .within(() => {
          cy.get("th")
            .should("contain.text", "Trading Partner ID")
            .within(() => {
              cy.get("input")
                .eq(0)
                .should("be.visible")
                .click()
                .invoke("val", "z");
            });
        });
      cy.get("td").eq(7).should("be.visible").click();
    });
  });

  it("Update data popup validation", () => {
    const wrongPayerId2 = "Zeken27!";
    const wrongPayerName = "Zeke27";
    const wrongTradingPartnerId = "Zeke27";

    cy.get("h3").should("contain.text", "Update Payer");
    cy.get("input")
      .eq(13)
      .should("be.visible")
      .invoke("val", wrongPayerId2)
      .click();
    cy.get("input")
      .eq(14)
      .should("be.visible")
      .invoke("val", wrongPayerName)
      .click();
    cy.get("input")
      .eq(15)
      .should("be.visible")
      .invoke("val", wrongTradingPartnerId)
      .click();
    cy.get("select").focus().select([]);
    cy.get("input").eq(19).click();

    cy.get("span").should("contain.text", "*Please fill mandatory field*");
    cy.get("span").should("contain.text", "*Special characters not allowed*");

    cy.get("button").eq(7).should("be.visible").click();
    cy.get("button").eq(5).should("be.visible").click();
  });

  it("Update data popup check 3 for cancel", () => {
    cy.visit("http://localhost:3000");

    cy.get("table").within(() => {
      cy.get("thead")
        .should("be.visible")
        .within(() => {
          cy.get("th")
            .should("contain.text", "Trading Partner ID")
            .within(() => {
              cy.get("input")
                .eq(0)
                .should("be.visible")
                .click()
                .invoke("val", "z");
            });
        });
      cy.get("td").eq(7).should("be.visible").click();
    });
    cy.get("h3").should("contain.text", "Update Payer");

    cy.get("button").eq(5).should("be.visible").click();
  });

  it("Delete data popup check 1", () => {
    cy.visit("http://localhost:3000");
    cy.get("table").within(() => {
      cy.get("thead")
        .should("be.visible")
        .within(() => {
          cy.get("th")
            .should("contain.text", "Payer Name")
            .dblclick({ force: true });
        });
      cy.get("td").eq(8).should("be.visible").click();
    });
  });

  it("Delete data popup cancel", () => {
    cy.get("div").should("contain.text", "Are you sure you want to delete?");
    cy.get("button").eq(5).should("be.visible").click();
  });

  it("Delete data popup check 2", () => {
    cy.visit("http://localhost:3000");
    cy.get("table").within(() => {
      cy.get("thead")
        .should("be.visible")
        .within(() => {
          cy.get("th")
            .should("contain.text", "Payer Name")
            .dblclick({ force: true });
        });
      cy.get("td").eq(8).should("be.visible").click();
    });
  });

  it("Delete data popup submission", () => {
    cy.get("div").should("contain.text", "Are you sure you want to delete?");
    cy.get("button").eq(6).click();
  });

  it("Payer status is Active", () => {
    cy.visit("http://localhost:3000");

    cy.get("div")
      .should("contain.text", "Payer Status")
      .dblclick({ force: true });

    cy.get("table")
      .should("be.visible")
      .within(() => {
        cy.get("thead").should("be.visible");
        cy.get("tbody").should("be.visible");
        cy.get("tr")
          .should("be.visible")
          .within(() => {
            cy.get("input").should("be.visible");
          });
        cy.get("td")
          .eq(3)
          .should("be.visible")
          .within(() => {
            cy.get("input").should("be.visible").should("be.checked");
          });
      });
  });

  it("Payer status is Inactive", () => {
    cy.visit("http://localhost:3000");

    cy.get("div")
      .should("contain.text", "Payer Status")
      .dblclick({ force: true });
    cy.get("li").eq(1).should("be.visible").click();

    cy.get("table")
      .should("be.visible")
      .within(() => {
        cy.get("thead").should("be.visible");
        cy.get("tbody").should("be.visible");
        cy.get("tr")
          .should("be.visible")
          .within(() => {
            cy.get("input").should("be.visible");
          });
        cy.get("td")
          .eq(3)
          .should("be.visible")
          .within(() => {
            cy.get("input").should("be.visible").should("not.be.checked");
          });
      });
  });
});
