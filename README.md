This template provides guidance on creating custom GitHub Actions using JavaScript. It also demonstrates how to execute workflows with matrix jobs.

## Prerequisites
Before you begin, ensure the following tools are installed:
1. [Node.js](https://nodejs.org/) (LTS version 20 is recommended).
2. [npm](https://www.npmjs.com/) (bundled with Node.js).
3. [Git](https://git-scm.com/).

## Setup
Follow these steps to set up the project:

1. Clone the repository:
  ```bash
  git clone https://github.com/xsodus/matrix-js-action-template.git
  ```

2. Navigate to the project directory:
  ```bash
  cd matrix-js-action-template
  ```

3. Install the required dependencies:
  ```bash
  npm install
  ```

## Build
To compile the project, run:
```bash
npm run build
```
The compiled files will be available in the `dist` directory.

## Run
## Run
You can test your GitHub Actions locally using the [`act`](https://github.com/nektos/act) command-line tool. Follow these steps:

1. Install `act`:
  ```bash
  brew install act
  ```

2. List all available jobs in your workflow:
  ```bash
  act -l
  ```

3. Run a specific job locally:
  ```bash
  act -j <job-name>
  ```
  Replace `<job-name>` with the name of the job you want to test, as defined in your GitHub Actions workflow file.

## Additional Notes
- Ensure all required environment variables are properly configured.
- Check the `package.json` file for additional scripts and configurations.
- Refer to the `docs` folder (if available) for more detailed documentation.
- If you encounter any issues, feel free to open an issue in the repository.
