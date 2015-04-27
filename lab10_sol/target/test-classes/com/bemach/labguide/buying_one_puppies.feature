Feature:

  As a puppy lover
  I want to adopt puppies
  So they can chew my furniture

  @scenario-1

  Scenario: Adopting a puppy using a table --> List<PaymentInfo>
    Given I am on the puppy adoption site
    When I click the View Details button for "Brook"
    And I click the Adopt Me! button
    And I click the Complete the Adoption button
    And I complete the adoption with:
    | orderName | orderAddress    | orderEmail         | orderPaymentType |
    | Cheezy    | 123 Main Street | cheezy@example.com | Check            |
    Then I should see "Thank you for adopting a puppy!"
