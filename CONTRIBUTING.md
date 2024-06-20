# Contributing to Musa Capital

Thank you for considering contributing to Musa Capital!
We're excited to have you here.
This guide will help you get started with contributing to the project.

This is an Open Source cap table project using the [Open Cap Table (OCF)](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF
) format.

## Process for Submitting Changes

This section describes the overall change submission process.
The section following explains each step in more detail.

Follow these steps to submit your code changes:

1. **Create a new branch:**
   Work in your fork, cloned to your local computer.
   ```sh
   git checkout -b feature/{story-id}  # For features
   git checkout -b bug/{story-id}      # For bugs
   git checkout -b chore/{story-id}    # For chores
   ```

2. **Make your changes:**
   Ensure your code follows the coding standards (see below).

3. **Write failing tests:**
   Write tests that demonstrate the functionality is NOT already present. Make a WIP commit:
   ```sh
   git add .
   git commit -m "WIP: Red Tests."
   ```

4. **Implement code to pass the tests:**
   Make WIP commits as you go, and commit code when your tests are green:
   ```sh
   git add .
   git commit -m "WIP: Green Tests."
   ```

5. **Refactor your code:**
   Refactor to improve code quality. Re-run the tests and commit:
   ```sh
   git add .
   git commit -m "Refactor complete."
   ```

6. **Submit a pull request:**
   ```sh
   git push origin feature/{story-id}  # Push your branch
   ```

   Go to the main repository `urbantech/musacapital` on GitHub and create a pull request from your branch to the `main` branch.
   If you have done the push correctly to your fork, there should be a notification about a potential pull request to be made.

7. **Review process:**
   Review outstanding pull requests, comment on, approve and merge open pull requests, or request changes on any PRs that need improvement.

## Getting Started

### Fork the Repository

1. Navigate to the [MusaCapital repository](https://github.com/urbantech/musacapital) on GitHub.
2. Click on the "Fork" button at the top right corner of the page.
   This will offer to create a copy of the repository in your GitHub account.
   By default it will chose the same repository name, which can make it easier to tell your forked repositories apart.

The fork will end up in `github.com/YOUR-USERNAME/muscapital`.

### Clone the Forked Repository

Cloning the repository lets you do work remotely on your own computer, then push those changes to GitHub when you are ready to make a _pull request_ (PR).
A PR is a request to merge changes from your fork to the original repository.

1. Go to your GitHub account and find the forked repository.
2. Click on the "Code" button and copy the URL.
3. Open your terminal and run the following command to clone the repository to your local machine:

    ```sh
    git clone https://github.com/YOUR-USERNAME/musacapital.git
    ```

    Replace `YOUR-USERNAME` with your GitHub username.

### Set Upstream Remote

To keep your fork updated with the latest changes from the original repository, you need to add an upstream remote:

1. Navigate to the cloned repository:

    ```sh
    cd musacapital
    ```

2. Add the upstream remote:

    ```sh
    git remote add upstream https://github.com/urbantech/musacapital.git
    ```

### Branching Strategy

To keep your contributions organized, always work on specific and separate branches.
You will want to create a new branch for each distinct item of work (_story_), such as resolving a bug or working on the elements of a user interface.
When you make a PR from your work, the branch name helps make it clear what the PR is related to.

This branching strategy is related to the strategy of avoiding monolithic commits.
When you bundle several unrelated changes into a commit, it is too many things to review in one PR.
By having a distinct branch and discrete PR for each piece of work, discussions about that work are contained to the one topic and resolution.
This makes reviewing PRs more efficient, and retrospectives more fruitful.

1. Create a new branch for your work:

    ```sh
    git checkout -b feature/{story-id}  # For features
    git checkout -b bug/{story-id}      # For bugs
    git checkout -b chore/{story-id}    # For chores
    ```

    Use these patterns for work that has a story ID.
    If your work doesn't have a story ID, use the issue number.

3. Make your changes in the new branch.

4. Stage and commit your changes:

    ```sh
    git add .
    git commit -m "Add a descriptive commit message"
    ```
   🗒️ **Note:  Use your commit message to explain why rather than what.
   Where it can be useful to have a brief few words about what the effect of the change is, it is more useful to later understand the reason behind a particular change.**   

5. Push the branch to your forked repository:

    ```sh
    git push origin {feature,bug,chore}/{story-id}
    ```

### Making a Pull Request

1. Go to your forked repository on GitHub.
2. Click on the "Compare & pull request" button next to your branch.
3. Ensure the base repository is `urbantech/musacapital` and the base branch is `main`.
4. Provide a clear and descriptive title for your pull request.
5. Describe the changes you have made and any relevant information in the description.
6. Click on the "Create pull request" button.

### Keeping Your Fork Updated

To keep your fork updated with the latest changes from the original repository:

1. Fetch the latest changes from upstream:

    ```sh
    git fetch upstream
    ```

2. Merge the changes into your local `main` branch:

    ```sh
    git checkout main
    git merge upstream/main
    ```

3. Push the updated `main` branch to your fork:

    ```sh
    git push origin main
    ```

## Coding Standards

Please follow these coding standards to maintain code quality and consistency:

1. **Indentation:**
   Use 4 spaces for indentation.

2. **Naming Conventions:**
   - Variables and functions: camelCase
   - Classes and components: PascalCase
   - Constants: UPPERCASE_SNAKE_CASE

3. **Comments:**
   - Use JSDoc style comments for functions and classes.
   - Provide meaningful comments for complex code segments and functions.
   - Document any public APIs and classes with clear explanations of their purpose and usage.
   - Remove or update outdated comments as code changes.

4. **Code Structure:**
   - Organize code into modules and components.
   - Keep functions small and focused on a single task.

5. **Linting:**
   Ensure your code passes ESLint checks:
   ```sh
   npm run lint
   ```

6. **Testing:**
   - Write unit tests using BDD-style frameworks like Mocha or Jasmine.
   - Follow the Arrange, Act, and Assert (AAA) pattern:
     ```javascript
     it('should correctly add two positive numbers', () => {
       // Arrange
       const num1 = 5;
       const num2 = 7;

       // Act
       const result = add(num1, num2);

       // Assert
       expect(result).to.equal(12);
     });
     ```

   - Write integration tests to validate interactions between different parts of the application.
   - Write functional tests to validate the application's functionality.

## Code of Conduct TBD

TBD Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## Questions?

If you have any questions or need further assistance, feel free to open an issue or reach out to the maintainers.

Happy coding!
