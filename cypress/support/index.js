// cypress/support/index.js

import { useHierarchies } from "@hooks/hierarchies/useHierarchies";


Cypress.on('window:before:load', (win) => {
  cy.stub(win, 'useHierarchies', useHierarchies).as('useHierarchies');
});
