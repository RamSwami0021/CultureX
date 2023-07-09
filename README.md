# CultureX

The data management module will be developed using Node.js. It will include APIs to handle data collection, storage, and retrieval. When data is received in JSON format, the module will use MongoDB to store the data in a suitable data structure.

To implement the dashboard, HTML, CSS, and JavaScript will be used. The dashboard will include a search bar that allows users to search for creators by their names. It will also feature a filtering mechanism to narrow down the search results based on various criteria such as city, state, category, or any other relevant data point present in the dataset.

Using JavaScript, the dashboard will interact with the data management module's APIs to retrieve the data from the MongoDB database. The search queries and filter options selected by the users will be sent to the backend, which will then query the database and return the relevant data. The returned data will be dynamically displayed on the dashboard using HTML and CSS to create an appealing and user-friendly interface.

By combining Node.js, MongoDB, HTML, CSS, and JavaScript, the solution will provide a robust data management module with efficient data storage and retrieval capabilities. The user-friendly dashboard will allow users to search for creators, apply filters, and view the search results in an intuitive manner.

## Requirements

Before running the project, make sure you have the following software installed:

- Node.js (version 14.X.X)
- npm (version X.X.X) or Yarn (version X.X.X)

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/RamSwami0021/CultureX
   ```

2. Navigate to the project directory:

   ```shell
   cd CultureX
   ```

3. Install dependencies using npm or Yarn:

   ```shell
   npm install
   # or
   yarn install
   ```

## Usage

To start the development server and run the project locally, use the following command:

```shell
npm start
# or
yarn start
```

Open your browser and visit `http://localhost:8080` to view the application.

## Build

To build the production-ready version of the project, use the following command:

```shell
npm run build
# or
yarn build
```

This will create an optimized build of the project in the `build` directory.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-branch-name`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
