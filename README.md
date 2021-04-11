# Tree Facet Component App

## Table of contents

- [General info](#general-info)
- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [Authors](#authors)
- [Contributing](#contributing)

## General info

Tree Facet Component app is a web based responsive application to the show tree view of items from a flat array of categories.

## Built With

Application is developed using,

- React
- Node: 14.15.4
- CSS
- Bootstrap
- Jest/ enzyme
- Webpack/ babel

## Installation

Make sure that you have Node.js v14.15.4(or above) and NPM version 6.14.10(or above) installed in your local environment.

Clone this repo to the desired local directory using

```bash
  git clone --depth=1 https://github.com/ImChamZ/tree-facet-component-app.git <YOUR_PROJECT_NAME>
```

Extract and navigate into the project folder using

```bash
  cd <YOUR_PROJECT_NAME>
```

Open a new terminal or open the project in a desired IDE. For the first time use install npm dependency packages using

```bash
  npm install
```

Serve the application in the development version using

```bash
  npm run dev
```

Execute test cases using

```bash
  npm run test
```

Go to 'http://localhost:3000' in your browser.

Tree Facet Component App should up and running. Enjoy...........

## Usage

- In the main view, the use will see two panels. Left side panel is to selected categories. Right side panel is to show the selected categories.
- User can use the left side panel to select required/ desired categories by clicking the checkbox of relevant category.
- Click on the category name label will toggle the view of the child categories of each main category.
- Once user select a list of categories and click on the "Add Selected Category(s)" button, the right side panel will get populated with the selected categories.
- User can use the right side panel to either remove each item by pressing the "Delete" icon on the right side of each category or can remove all selected items by pressing the "Remove All Selected Category(s)" button.
- User can click on the "Change View" button which will toggle the view of the selected categories(list view & tree view).

## Authors

- Chamara Chathuranga

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
